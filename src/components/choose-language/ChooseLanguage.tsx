import React, { useMemo, memo } from 'react';
import { Combobox, SIZE } from 'baseui/combobox';
import { ChooseLanguageProps } from '../../core/models/choose-language-props.model';
import { languages } from '../../core/data/languages';

const ChooseLanguage = ({ lang, setLang }: ChooseLanguageProps): JSX.Element => {
  const langOptions = useMemo(() => {
    const supportedLanguages = languages;
    return supportedLanguages.filter((option) => {
      return option.toLowerCase().includes(lang.toLowerCase());
    });
  }, [lang]);

  const handleChange = (nextValue: string): void => {
    setLang(nextValue);
  };

  const mapOptionToString = (option: string): string => {
    return option;
  };

  return (
    <Combobox
      value={lang}
      onChange={handleChange}
      options={langOptions}
      mapOptionToString={mapOptionToString}
      autocomplete={true}
      size={SIZE.compact}
      overrides={{
        Input: {
          props: {
            placeholder: 'Select language'
          }
        }
      }}
    />
  );
};

export default memo(ChooseLanguage);
