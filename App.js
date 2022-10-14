import 'react-native-gesture-handler';
import { LogBox, View } from 'react-native';
import { Provider } from 'redux';
import { store } from './src/redux/store';
import RootNavigator from './src/routes';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { requestUserPermission,notificationServices } from './src/utils/PushNotification';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

export default function App() {

  const handleDynamicLink = async link => {
    console.log("this is Forground")
    console.log('ForeGround DynamicLink-1:🖐', link);
    if (link?.url) {
      const id = link.url?.split('=').pop();
      await AsyncStorage.setItem("requestId",id)
      console.log('Forground Id:', id);
      const screenName = link.url?.split('&')[0].split('=').pop();
      const wihApp = link.url?.split('&')[1].split('=').pop();
      const linkDate = link.url?.split('&')[2].split('=').pop();
      // const linkDate = link.url?.split('&')[2].split('=').pop();
      console.log('linkDate', linkDate);
      await AsyncStorage.setItem("linkDate",linkDate)


      
      console.log('screenName:', screenName);
      console.log('wihApp:', wihApp);
      if (screenName === 'Profile'){
        // navigation.navigate('MainStack', {screen: 'Profile'});


      }
      // if (screenName === 'Profile')
      //   navigation.navigate('MainStack', {screen: 'Profile'});
    }

  };

  useEffect(() => {

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, [dynamicLinks]);

  
  useEffect(() => {

    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
    requestUserPermission();
    notificationServices();
  }, [])

  return (
    //  <Provider store={store}>
    <RootNavigator />
    //  </Provider>
  );
}
