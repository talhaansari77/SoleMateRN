import 'react-native-gesture-handler';
import { LogBox, View } from 'react-native';
import { Provider } from 'redux';
import { store } from './src/redux/store';
import RootNavigator from './src/routes';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';
import { useEffect } from 'react';
// import SplashScreen from 'react-native-splash-screen'
import { requestUserPermission } from './src/utils/PushNotification';

LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

export default function App() {
  useEffect(() => {
    // SplashScreen.hide();
    requestUserPermission();
    // notificationS ervices();
  }, [])

  return (
    //  <Provider store={store}>
    <RootNavigator />
    //  </Provider>
  );
}
