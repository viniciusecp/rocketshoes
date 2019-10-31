import React from 'react';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';

import colors from './styles/colors';
import Routes from './routes';

export default function src() {
  return (
    <>
      <StatusBar backgroundColor={colors.header} barStyle="light-content" />
      <Routes />
    </>
  );
}
