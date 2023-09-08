import React from 'react';
import ChooseLanguage from '../choose-language/ChooseLanguage';

const CreateBin = (): JSX.Element => {
  const [lang, setLang] = React.useState('');

  return (
    <div>
      <ChooseLanguage lang={lang} setLang={setLang} />
    </div>
  );
};

export default CreateBin;
