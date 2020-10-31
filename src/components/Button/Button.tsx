import React, { FC } from 'react';
import './Button.scss';

interface Props {
  label?: string;
  onClick?: () => void;
}

const Button: FC<Props> = (props: Props) => {
  const { label, onClick } = props;

  return (
    <button className="Button--container" onClick={onClick} type="button">
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: '',
  onClick: () => {},
};

export default Button;
