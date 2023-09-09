import React from 'react';
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox';
import { UploadCheckboxProps } from '../../core/models/upload-checkbox-props.model';

const UploadCheckbox = ({ isUpload, setIsUpload, setLang }: UploadCheckboxProps): JSX.Element => {
  return (
    <Checkbox
      checked={isUpload}
      onChange={(e) => {
        setLang('none');
        setIsUpload(e.target.checked);
      }}
      labelPlacement={LABEL_PLACEMENT.right}
    >
      Upload a file
    </Checkbox>
  );
};

export default UploadCheckbox;
