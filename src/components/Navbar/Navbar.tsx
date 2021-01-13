import React, { FC } from 'react';
import { ReactComponent as Home } from '../../assets/ui/home.svg';
import { ReactComponent as Cart } from '../../assets/ui/cart.svg';
import './Navbar.scss';
import Badge from '../Badge/Badge';

interface Props {
  numberOfSelectedColors?: number;
  onHomeClick?: () => void;
  onCartClick?: () => void;
}

const Navbar: FC<Props> = (props: Props) => {
  const { numberOfSelectedColors, onHomeClick, onCartClick } = props;

  return (
    <div className="Navbar--container">
      <div className="Navbar--icon Navbar--home">
        <Home onClick={onHomeClick} fill="#FFFFFF" height="30px" width="30px" />
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
  onHomeClick: () => {},
  onCartClick: () => {},
};

export default Navbar;
