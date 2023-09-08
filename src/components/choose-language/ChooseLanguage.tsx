import React, { useMemo, memo } from 'react';
import { Combobox, SIZE } from 'baseui/combobox';
import { ChooseLanguageProps } from '../../core/models/ChooseLanguageProps.model';
import { languages } from '../../core/data/languages';

const ChooseLanguage = ({ lang, setLang }: ChooseLanguageProps): JSX.Element => {
  const langOptions = useMemo(() => {
    const supportedLanguages = languages;
    return supportedLanguages.filter((option) => {
      return option.toLowerCase().includes(lang.toLowerCase());
    });
  }, [lang]);

  return (
    <div data-testid="choose-language--component">
      <Combobox
        value={lang}
        onChange={(nextValue) => setLang(nextValue)}
        options={langOptions}
        mapOptionToString={(option: string) => option}
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
    </div>
  );
};

export default memo(ChooseLanguage);
