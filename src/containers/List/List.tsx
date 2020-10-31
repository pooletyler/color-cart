import React, { FC } from 'react';
import removeItemFromArray from '../../utils/removeItemFromArray';
import Swatch from '../../components/Swatch/Swatch';
import updateSelectedColors from '../../utils/updateSelectedColors';
import Button from '../../components/Button/Button';
import './List.scss';

interface Props {
  colors?: string[];
  selectedColors?: string[];
  setSelectedColors?: (selectedColors: string[]) => void;
  onLoadMore?: () => void;
}

const List: FC<Props> = (props: Props) => {
  const { colors, selectedColors, setSelectedColors, onLoadMore } = props;

  const handleOnSwatchClick = (hex: string) => {
    updateSelectedColors(
      hex,
      selectedColors,
      removeItemFromArray,
      setSelectedColors
    );
  };

  return (
    <div className="List--container">
      <div className="List--swatches">
        {colors.map((color: string) => {
          return (
            <div className="List--swatch" key={color}>
              <Swatch
                hex={color}
                selected={selectedColors.includes(color)}
                onSwatchClick={handleOnSwatchClick}
                usePointer
              />
            </div>
          );
        })}
      </div>
      <div className="List--button">
        <Button label="Load More" onClick={onLoadMore} />
      </div>
    </div>
  );
};

List.defaultProps = {
  colors: [],
  selectedColors: [],
  setSelectedColors: () => {},
  onLoadMore: () => {},
};

export default List;
