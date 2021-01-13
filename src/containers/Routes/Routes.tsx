import React, { FC, useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import checkForSelectedColors from '../../utils/checkForSelectedColors';
import getCookie from '../../utils/getCookie';
import setCookie from '../../utils/setCookie';
import Navbar from '../../components/Navbar/Navbar';
import colorQuery from './colorQuery';
import List from '../List/List';
import history from './history';
import './Routes.scss';
import Cart from '../Cart/Cart';

const Routes: FC<any> = () => {
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [resultOffset, setResultOffset] = useState(20);

  useQuery(colorQuery, {
    variables: {
      resultOffset,
    },
    onCompleted: (data: { colors: { hex: string }[] }) => {
      setColors(
        colors.concat(
          data.colors.map((color: { hex: string }) => {
            return color.hex;
          })
        )
      );
    },
  });

  useEffect(() => {
    checkForSelectedColors(getCookie, setSelectedColors);
  }, []);

  useEffect(() => {
    setCookie('inCart', JSON.stringify(selectedColors), 10);
  }, [selectedColors]);

  const handleOnNavbarCartClick = () => {
    window.location.hash = '/cart';
  };

  const handleOnNavbarHomeClick = () => {
    window.location.hash = '/';
  };

  const handleOnLoadMore = () => {
    setResultOffset(resultOffset + 14);
  };

  return (
    <HashRouter history={history}>
      <div className="Routes--container">
        <Navbar
          numberOfSelectedColors={selectedColors.length}
          onHomeClick={handleOnNavbarHomeClick}
          onCartClick={handleOnNavbarCartClick}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <List
                colors={colors}
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                onLoadMore={handleOnLoadMore}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
              />
            )}
          />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
