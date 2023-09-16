import { Button } from 'baseui/button';
import { Card, StyledAction } from 'baseui/card';
import { SIZE } from 'baseui/input';
import { ParagraphMedium } from 'baseui/typography';
import { DisplayFileProps } from '../../core/models/display-file-props.model';
import React from 'react';

const DisplayFile = ({ file }: DisplayFileProps): JSX.Element => {
  const handleClick = (): void => {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(new Blob([file], { type: file.type }));
    elem.download = file.name;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  };

  return (
    <div>
      <div style={{ marginTop: 16, marginBottom: 16 }} />
      <Card>
        <ParagraphMedium>{file.name}</ParagraphMedium>
        <StyledAction>
          <Button
            overrides={{ BaseButton: { style: { width: '100%' } } }}
            size={SIZE.compact}
            onClick={handleClick}
          >
            Download
          </Button>
        </StyledAction>
      </Card>
    </div>
  );
};

export default DisplayFile;
