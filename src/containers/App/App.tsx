import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from '../../apollo/client';
import Routes from '../Routes/Routes';
import './App.scss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
