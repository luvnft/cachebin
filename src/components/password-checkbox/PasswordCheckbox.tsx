import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox';
import React, { memo } from 'react';
import { PasswordCheckboxProps } from '../../core/models/password-checkbox-props.model';

const PasswordCheckbox = ({
  enablePassword,
  setEnablePassword,
  setPassword,
  isFetching
}: PasswordCheckboxProps): JSX.Element => {
  const generateRandomPassword = (): void => {
    const password = Math.random().toString(36).substring(2, 15);
    setPassword(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (isFetching === false) {
      generateRandomPassword();
    }
    console.log(e.currentTarget.checked);
    setEnablePassword(e.currentTarget.checked);
  };

  return (
    <Checkbox
      checked={enablePassword}
      onChange={handleChange}
      labelPlacement={LABEL_PLACEMENT.right}
    >
      Password Protection
    </Checkbox>
  );
};

export default memo(PasswordCheckbox);
