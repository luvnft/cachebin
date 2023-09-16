import { Input, SIZE } from 'baseui/input';
import React, { memo } from 'react';
import { PasteHashInputProps } from '../../core/models/paste-hash-input-props.model';

const PasteHashInput = ({ pasteHash, setPasteHash }: PasteHashInputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setPasteHash(e.currentTarget.value);
  };

  return (
    <Input
      value={pasteHash}
      onChange={handleChange}
      placeholder="Paste Hash"
      clearOnEscape
      clearable
      autoFocus
      size={SIZE.compact}
    />
  );
};

export default memo(PasteHashInput);
