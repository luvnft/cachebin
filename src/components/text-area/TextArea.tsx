import React, { memo } from 'react';
import { Textarea } from 'baseui/textarea';
import { TextAreaProps } from '../../core/models/text-area-props.model';
import { inputStyles } from '../../core/data/input-styles';

const TextArea = ({ text, setText }: TextAreaProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.currentTarget.value);
  };

  return (
    <Textarea
      value={text}
      onChange={handleChange}
      placeholder="Input text..."
      clearable
      autoFocus
      overrides={{
        Input: {
          style: inputStyles
        }
      }}
    />
  );
};

export default memo(TextArea);
