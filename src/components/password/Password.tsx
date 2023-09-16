import React, { memo } from 'react';
import PasswordCheckbox from '../password-checkbox/PasswordCheckbox';
import PasswordInput from '../password-input/PasswordInput';
import { PasswordProps } from '../../core/models/password-props.model';

const Password = ({
  enablePassword,
  setEnablePassword,
  password,
  setPassword,
  isFetching
}: PasswordProps): JSX.Element => {
  return (
    <React.Fragment>
      <PasswordCheckbox
        enablePassword={enablePassword}
        setEnablePassword={setEnablePassword}
        setPassword={setPassword}
        isFetching={isFetching}
      />
      <div className="component--division" />
      {enablePassword && <PasswordInput password={password} setPassword={setPassword} />}
    </React.Fragment>
  );
};

export default memo(Password);
