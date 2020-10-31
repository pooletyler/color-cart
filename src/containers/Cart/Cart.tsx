import React, { FC, useState } from 'react';
import removeItemFromArray from '../../utils/removeItemFromArray';
import Swatch from '../../components/Swatch/Swatch';
import updateSelectedColors from '../../utils/updateSelectedColors';
import './Cart.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import getCookie from '../../utils/getCookie';
import setCookie from '../../utils/setCookie';
import saveColorSet from '../../utils/saveColorSet';
import TrashSwatch from '../../components/TrashSwatch/TrashSwatch';
import deleteColorSet from '../../utils/deleteColorSet';

interface Props {
  selectedColors?: string[];
  setSelectedColors?: (selectedColors: string[]) => void;
}

const Cart: FC<Props> = (props: Props) => {
  const [currentlyHoveringColor, setCurrentlyHoveringColor] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [savedColorSets, setSavedColorSets] = useState(
    (getCookie('savedColorSets') && JSON.parse(getCookie('savedColorSets'))) ||
      []
  );

  const { selectedColors, setSelectedColors } = props;

  const handleOnSwatchMouseEnter = (hex: string) => {
    setCurrentlyHoveringColor(hex);
  };

  const handleOnSwatchMouseLeave = () => {
    setCurrentlyHoveringColor(undefined);
  };

  const handleOnSwatchTrashCanClick = (hex: string) => {
    updateSelectedColors(
      hex,
      selectedColors,
      removeItemFromArray,
      setSelectedColors
    );
  };

  const handleOnSave = () => {
    saveColorSet(
      inputValue,
      selectedColors,
      savedColorSets,
      setCookie,
      setSavedColorSets,
      setSelectedColors,
      setInputValue
    );
  };

  const handleOnDelete = (index: number) => {
    deleteColorSet(index, savedColorSets, setCookie, setSavedColorSets);
  };

  return (
    <div className="Cart--container">
      {(selectedColors.length > 0 && (
        <div className="Cart--current">
          <div className="Cart--title">Your current color cart palette</div>
          <div className="Cart--swatches">
            {selectedColors.map((color: string) => {
              return (
                <div className="Cart--swatch" key={color}>
                  <Swatch
                    hex={color}
                    onMouseEnter={handleOnSwatchMouseEnter}
                    onMouseLeave={handleOnSwatchMouseLeave}
                    showTrashCan={currentlyHoveringColor === color}
                    onTrashCanClick={handleOnSwatchTrashCanClick}
                  />
                </div>
              );
            })}
          </div>
          <div className="Cart--description">
            Name and save your color palette
          </div>
          <div className="Cart--controls">
            <Input
              value={inputValue}
              placeholder="Color palette name"
              onChange={setInputValue}
            />
            <div className="Cart--controlsButton">
              <Button label="Save Palette" onClick={handleOnSave} />
            </div>
          </div>
        </div>
      )) || <div className="Cart--title">You have nothing in your cart</div>}

      <div className="Cart--divider" />
      {(savedColorSets.length > 0 && (
        <div className="Cart--previous">
          <div className="Cart--title">Previously saved color palettes</div>
          {savedColorSets.map(
            (colorSet: { name: string; colors: string[] }, index: number) => {
              return (
                <div key={colorSet.name}>
                  <div className="Cart--description">{`${colorSet.name} - ${colorSet.colors.length} colors`}</div>
                  <div className="Cart--swatches">
                    {colorSet.colors.map((color: string) => {
                      return (
                        <div className="Cart--swatch" key={color}>
                          <Swatch hex={color} />
                        </div>
                      );
                    })}
                    <div className="Cart--swatch">
                      <TrashSwatch index={index} onClick={handleOnDelete} />
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )) || <div className="Cart--title">You have no saved color sets</div>}
    </div>
  );
};

Cart.defaultProps = {
  selectedColors: [],
  setSelectedColors: () => {},
};

export default Cart;
