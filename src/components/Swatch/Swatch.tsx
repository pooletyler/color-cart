import React, { FC } from 'react';
import { ReactComponent as TrashCan } from '../../assets/ui/trashCan.svg';
import './Swatch.scss';

interface Props {
  hex?: string;
  selected?: boolean;
  showTrashCan?: boolean;
  usePointer?: boolean;
  onSwatchClick?: (hex: string) => void;
  onTrashCanClick?: (hex: string) => void;
  onMouseEnter?: (hex: string) => void;
  onMouseLeave?: (hex: string) => void;
}

const Swatch: FC<Props> = (props: Props) => {
  const {
    hex,
    selected,
    showTrashCan,
    usePointer,
    onSwatchClick,
    onTrashCanClick,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const handleOnSwatchClick = () => {
    onSwatchClick(hex);
  };

  const handleOnTrashCanClick = () => {
    onTrashCanClick(hex);
  };

  const handleOnMouseEnter = () => {
    onMouseEnter(hex);
  };

  const handleOnMouseLeave = () => {
    onMouseLeave(hex);
  };

  return (
    <button
      className="Swatch--container"
      style={{
        backgroundColor: `#${hex}`,
        border:
          (selected && '4px solid rgba(0,0,0,0.50)') || '4px solid transparent',
        cursor: (usePointer && 'pointer') || 'default',
      }}
      onClick={handleOnSwatchClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      type="button"
    >
      {showTrashCan && (
        <div className="Swatch--trash">
          <TrashCan onClick={handleOnTrashCanClick} />
        </div>
      )}
      <div className="Swatch--text">{`#${hex}`}</div>
    </button>
  );
};

Swatch.defaultProps = {
  hex: '#FFFFFF',
  selected: false,
  showTrashCan: false,
  usePointer: false,
  onSwatchClick: () => {},
  onTrashCanClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

export default Swatch;
