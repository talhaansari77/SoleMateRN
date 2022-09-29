import 'react-native-gesture-handler';
import {LogBox, View} from 'react-native';
import {Provider} from 'redux';
import {store} from './src/redux/store';
import {useFonts} from 'react-native-font';
import RootNavigator from './src/routes';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';
import {useEffect} from 'react';


LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    //  <Provider store={store}>
    <RootNavigator />
    //  </Provider>
  );
}
