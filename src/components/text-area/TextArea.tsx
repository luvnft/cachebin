import React from 'react';
import { Textarea } from 'baseui/textarea';
import { TextAreaProps } from '../../core/models/text-area-props.model';

const TextArea = ({ text, setText }: TextAreaProps): JSX.Element => {
  return (
    <Textarea
      value={text}
      onChange={(e) => setText(e.currentTarget.value)}
      placeholder="Input text..."
      clearable
      autoFocus
      overrides={{
        Input: {
          style: {
            minHeight: '300px',
            width: '100vw',
            resize: 'vertical'
          }
        }
      }}
    />
  );
};

export default TextArea;
