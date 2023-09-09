import { Input, SIZE } from 'baseui/input';
import React from 'react';
import { PasswordInputProps } from '../../core/models/password-input-props.model';

const PasswordInput = ({ password, setPassword }: PasswordInputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  return (
    <Input
      value={password}
      size={SIZE.compact}
      onChange={handleChange}
      placeholder="Password"
      clearOnEscape
    />
  );
};

export default PasswordInput;
