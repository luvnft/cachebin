import React, { memo } from 'react';
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox';
import { UploadCheckboxProps } from '../../core/models/upload-checkbox-props.model';

const UploadCheckbox = ({ isUpload, setIsUpload, setLang }: UploadCheckboxProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLang('none');
    setIsUpload(e.target.checked);
  };

  return (
    <Checkbox checked={isUpload} onChange={handleChange} labelPlacement={LABEL_PLACEMENT.right}>
      Upload a file
    </Checkbox>
  );
};

export default memo(UploadCheckbox);
