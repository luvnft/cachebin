import React, { Fragment, useState } from 'react';
import ChooseLanguage from '../choose-language/ChooseLanguage';
import { Block } from 'baseui/block';
import { HeadingLevel } from 'baseui/heading';
import { ParagraphMedium } from 'baseui/typography';
import UploadCheckbox from '../upload-checkbox/UploadCheckbox';
import TextArea from '../text-area/TextArea';
import './CreateBin.css';
import Password from '../password/Password';

const CreateBin = (): JSX.Element => {
  const [lang, setLang] = useState('');
  const [isUpload, setIsUpload] = useState(false);
  const [text, setText] = useState('');
  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <Block width="100%" className="component">
      <HeadingLevel>
        <ParagraphMedium>Create a paste</ParagraphMedium>
        <UploadCheckbox isUpload={isUpload} setIsUpload={setIsUpload} setLang={setLang} />
        <div className="component--division" />
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
      </HeadingLevel>
    </Block>
  );
};

export default CreateBin;
