import React from 'react';
import { CopyBlock, solarizedLight } from 'react-code-blocks';
import { DisplayCodeProps } from '../../core/models/display-code-props.model';

const DisplayCode = ({ content, language }: DisplayCodeProps): JSX.Element => {
  const copyBlockProps = {
    text: content,
    language: language,
    showLineNumbers: true,
    startingLineNumber: 1,
    wrapLines: true,
    theme: solarizedLight,
    wrapLongLines: true
  };

  return (
    <div style={{ fontSize: 14 }}>
      <CopyBlock {...copyBlockProps} />
    </div>
  );
};

export default DisplayCode;
