import React, { FC } from 'react';
import './Badge.scss';

interface Props {
  number?: number;
}

const Badge: FC<Props> = (props: Props) => {
  const { number } = props;

  return (
    <div className="Badge--container">
      <div className="Badge--text">{number}</div>
    </div>
  );
};

Badge.defaultProps = {
  number: 0,
};

export default Badge;
