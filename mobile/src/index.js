import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import './config/ReactotronConfig';

import store from './store';

import colors from './styles/colors';
import Routes from './routes';

export default function src() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.header} barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
