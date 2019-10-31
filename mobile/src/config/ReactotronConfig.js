import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {reactotronRedux} from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
