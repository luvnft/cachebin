import React, { useState } from 'react';
import ChooseLanguage from '../choose-language/ChooseLanguage';
import { Block } from 'baseui/block';
import { HeadingLevel } from 'baseui/heading';
import { ParagraphMedium } from 'baseui/typography';
import UploadCheckbox from '../upload-checkbox/UploadCheckbox';

const CreateBin = (): JSX.Element => {
  const [lang, setLang] = useState('');
  const [isUpload, setIsUpload] = useState(false);

  return (
    <Block width="100%">
      <HeadingLevel>
        <ParagraphMedium>Create a paste</ParagraphMedium>
        <UploadCheckbox isUpload={isUpload} setIsUpload={setIsUpload} setLang={setLang} />
        <ParagraphMedium>
          <strong>Options</strong>
        </ParagraphMedium>
        <ChooseLanguage lang={lang} setLang={setLang} />
      </HeadingLevel>
    </Block>
  );
};

export default CreateBin;
