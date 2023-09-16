import { Card } from 'baseui/card';
import { ParagraphLarge } from 'baseui/typography';
import { DisplayFilesProps } from '../../core/models/display-files-props.model';
import DisplayFile from '../display-file/DisplayFile';
import React from 'react';

const DisplayFiles = ({ parsedFiles }: DisplayFilesProps): JSX.Element => {
  return (
    <div>
      <div style={{ marginTop: 16, marginBottom: 16 }} />
      <Card>
        <ParagraphLarge>Files</ParagraphLarge>

        {parsedFiles.map((file, index) => (
          <DisplayFile key={index} file={file} />
        ))}
      </Card>
    </div>
  );
};

export default DisplayFiles;
