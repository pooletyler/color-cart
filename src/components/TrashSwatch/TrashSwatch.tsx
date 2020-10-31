import React, { FC } from 'react';
import { ReactComponent as TrashCan } from '../../assets/ui/trashCan.svg';
import './TrashSwatch.scss';

interface Props {
  index?: number;
  onClick?: (index: number) => void;
}

const TrashSwatch: FC<Props> = (props: Props) => {
  const { index, onClick } = props;

  const handleOnClick = () => {
    onClick(index);
  };

  return (
    <button
      className="TrashSwatch--container"
      onClick={handleOnClick}
      type="button"
    >
      <div className="TrashSwatch--trash">
        <TrashCan width="20px" height="24px" />
      </div>
    </button>
  );
};

TrashSwatch.defaultProps = {
  index: 0,
  onClick: () => {},
};

export default TrashSwatch;
