import { FileUploaderProps } from '../../core/models/file-uploader-props.model';
import { FileUploader as Uploader } from 'baseui/file-uploader';
import React, { memo } from 'react';

const FileUploader = ({
  isUploading,
  setIsUploading,
  setUploadFiles
}: FileUploaderProps): JSX.Element => {
  const reset = (): void => {
    setIsUploading(false);
  };

  const handleUpload = (acceptedFiles: File[], rejectedFiles: File[]): void => {
    console.log(acceptedFiles, rejectedFiles);
    setIsUploading(true);
    setUploadFiles(acceptedFiles);
    setIsUploading(false);
  };

  return (
    <Uploader
      onCancel={reset}
      onDrop={handleUpload}
      progressMessage={isUploading ? 'Uploading' : ''}
    />
  );
};

export default memo(FileUploader);
