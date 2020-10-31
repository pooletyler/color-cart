import React, { FC } from 'react';
import './Input.scss';

interface Props {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input: FC<Props> = (props: Props) => {
  const { value, placeholder, onChange } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="Input--container"
      value={value}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
};

export default Input;
