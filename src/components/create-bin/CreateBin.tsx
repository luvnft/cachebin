import React, { Fragment, useState } from 'react';
import ChooseLanguage from '../choose-language/ChooseLanguage';
import { Block } from 'baseui/block';
import { HeadingLevel } from 'baseui/heading';
import { ParagraphMedium } from 'baseui/typography';
import UploadCheckbox from '../upload-checkbox/UploadCheckbox';
import CryptoJS from 'crypto-js';
import { Web3Storage } from 'web3.storage';
import TextArea from '../text-area/TextArea';
import Password from '../password/Password';
import { Button } from 'baseui/button';
import { SIZE } from 'baseui/input';
import './CreateBin.css';
import PasteIdContent from '../paste-id-content/PasteIdContent';
import FileUploader from '../file-uploader/FileUploader';
import UploadedFileData from '../uploaded-file-data/UploadedFileData';

const CreateBin = (): JSX.Element => {
  const [lang, setLang] = useState('');
  const [isUpload, setIsUpload] = useState(false);
  const [text, setText] = useState('');
  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [cid, setCid] = useState('');

  const storageClient = new Web3Storage({
    token: process.env.REACT_APP_WEB3_STORAGE_TOKEN as string
  });

  /**
   * This method is used to create a unique hash to be stored in the IPFS network.
   * User can enter this hash to get back the files uploaded.
   * @param message
   * @returns SHA256 hash of the message
   */
  const sha256 = async (message: string): Promise<string> => {
    const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(message));
    // The '00' ensures that each hexadecimal digit is at least two characters long
    return Array.prototype.map
      .call(new Uint8Array(buffer), (x: number) => ('00' + x.toString(16)).slice(-2))
      .join('');
  };

  const createNewPaste = async (): Promise<void> => {
    setLoading(true);

    let formattedContent = null;
    let serializedFiles;

    if (isUpload) {
      serializedFiles = [];

      const filePromises = uploadFiles.map(async (file) => {
        return await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = async () => {
            try {
              const response = {
                // Store the file content as an array of bytes
                content: Array.from(new Uint8Array(reader.result as ArrayBuffer)),
                type: file.type,
                name: file.name
              };
              resolve(response);
            } catch (err) {
              reject(err);
            }
          };

          reader.onerror = (e) => {
            reject(e);
          };

          // Used to start reading the file
          reader.readAsArrayBuffer(file);
        });
      });
      serializedFiles = await Promise.all(filePromises);
    } else {
      // If the user is not uploading a file, then create a file with the text content
      serializedFiles = [
        {
          content: text,
          type: null,
          name: null
        }
      ];
    }

    formattedContent = {
      isFile: isUpload,
      files: serializedFiles,
      language: lang === 'none' ? '' : lang,
      timestamp: new Date().getTime()
    };

    const serializedFileContent = JSON.stringify(formattedContent);
    const finalizedFileContent = enablePassword
      ? CryptoJS.AES.encrypt(serializedFileContent, password).toString()
      : serializedFileContent;
    const file = new File([finalizedFileContent], await sha256(finalizedFileContent), {
      type: 'text/plain'
    });
    const cid = await storageClient.put([file]);

    setCid(cid);
    setLoading(false);
  };

  return (
    <Block width="100%" className="component">
      <HeadingLevel>
        <ParagraphMedium>Create a paste</ParagraphMedium>
        <UploadCheckbox isUpload={isUpload} setIsUpload={setIsUpload} setLang={setLang} />
        <div className="component--division" />
        {isUpload && (
          <React.Fragment>
            <FileUploader
              isUploading={isUploading}
              setIsUploading={setIsUploading}
              setUploadFiles={setUploadFiles}
            />
            <br />
            <UploadedFileData uploadFiles={uploadFiles} />
          </React.Fragment>
        )}
        {!isUpload && (
          <Fragment>
            <TextArea text={text} setText={setText} />
            <ParagraphMedium>
              <strong>Options</strong>
            </ParagraphMedium>
            <ChooseLanguage lang={lang} setLang={setLang} />
          </Fragment>
        )}
        <div className="component--division" />
        <Password
          enablePassword={enablePassword}
          setEnablePassword={setEnablePassword}
          password={password}
          setPassword={setPassword}
        />
        <div style={{ marginTop: 16, marginBottom: 16 }} />
        <Button size={SIZE.compact} isLoading={loading} onClick={createNewPaste}>
          Create New Paste
        </Button>

        {cid !== '' && <PasteIdContent cid={cid} />}
      </HeadingLevel>
    </Block>
  );
};

export default CreateBin;
