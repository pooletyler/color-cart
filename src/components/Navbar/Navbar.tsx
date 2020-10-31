import React, { FC } from 'react';
import { ReactComponent as NewEngen } from '../../assets/ui/newEngen.svg';
import { ReactComponent as Cart } from '../../assets/ui/cart.svg';
import './Navbar.scss';
import Badge from '../Badge/Badge';

interface Props {
  numberOfSelectedColors?: number;
  onNewEngenClick?: () => void;
  onCartClick?: () => void;
}

const Navbar: FC<Props> = (props: Props) => {
  const { numberOfSelectedColors, onNewEngenClick, onCartClick } = props;

  return (
    <div className="Navbar--container">
      <div className="Navbar--icon Navbar--newEngen">
        <NewEngen onClick={onNewEngenClick} />
      </div>
      <div className="Navbar--icon Navbar--cart">
        <div className="Navbar--cartBadge">
          <Badge number={numberOfSelectedColors} />
        </div>
        <Cart onClick={onCartClick} />
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  numberOfSelectedColors: 0,
  onNewEngenClick: () => {},
  onCartClick: () => {},
};

export default Navbar;
