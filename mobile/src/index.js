import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

import colors from './styles/colors';

export default function src() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.header} barStyle="light-content" />
      <Routes
        ref={navigationRef => NavigationService.setNavigator(navigationRef)}
      />
    </Provider>
  );
}
