import React, { memo } from 'react';
import { Table } from 'baseui/table-semantic';
import { Card } from 'baseui/card';
import { tableStyles } from '../../core/data/table-styles';
import { tableColumns } from '../../core/data/table-columns';
import { UploadedFileDataProps } from '../../core/models/uploaded-file-data-props.model';

const UploadedFileData = ({ uploadFiles }: UploadedFileDataProps): JSX.Element => {
  const getInfo = (): string[][] => {
    const fileInfo: string[][] = [];

    for (const uploadFile of uploadFiles) {
      const file: string[] = [];
      file.push(uploadFile.name);
      file.push(uploadFile.type);
      file.push(uploadFile.size.toString() + 'bytes');
      fileInfo.push(file);
    }
    return fileInfo;
  };

  return (
    <Card>
      <div style={{ marginTop: 16, marginBottom: 16 }} />
      <h4>Uploaded items</h4>
      <Table
        overrides={{
          Root: {
            style: tableStyles
          }
        }}
        columns={tableColumns}
        data={getInfo()}
      />
    </Card>
  );
};

export default memo(UploadedFileData);
