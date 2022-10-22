import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../../screens/auth/welcome';
import Login from '../../screens/auth/login';
import Signup from '../../screens/auth/signup';
import OnBoarding from '../../screens/auth/onBoarding/OnBoarding';
import Settings from '../../screens/home/settings';
import MainSettings from '../../screens/home/settings/MainSettings';
import GeneralSettings from '../../screens/home/settings/GeneralSettings';
import EditProfile from '../../screens/home/editProfile';

import profile from '../../screens/home/profile';

import Report from '../../screens/home/report/Report';
import ReportReason from '../../screens/home/reportReason';
import Reported from '../../screens/home/reported/Reported';
import reportReason from '../../screens/home/reportReason';
import reported from '../../screens/home/reported';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestScreen from '../../screens/home/TestScreen/testScreen';

const AuthStack = ({navigation}) => {
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        handleDynamicUrlLink(link);
      });

    const linkingListener = dynamicLinks().onLink(handleDynamicUrlLink);
    return () => {
      linkingListener();
    };
  }, []);

  const handleDynamicUrlLink = async link => {
    console.log('this is background');

    console.log('this is DynamicLink:🖐', link);
    if (link?.url) {
      const id = link.url?.split('=').pop();
      await AsyncStorage.setItem('requestId', id);
      console.log('Forground Id:', id);
      const screenName = link.url?.split('&')[0].split('=').pop();
      const wihApp = link.url?.split('&')[1].split('=').pop();
      const linkDate = link.url?.split('&')[2].split('=').pop();
      console.log('linkDate', linkDate);
      await AsyncStorage.setItem('linkDate', linkDate);

      console.log('screenName:', screenName);
      console.log('wihApp:', wihApp);

      if (screenName === 'Profile')
        navigation.navigate('MainStack', {screen: 'Profile'});
    }
  };

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={"Report"}
    >
      {/* <Stack.Screen name="TestScreen" component={TestScreen} /> */}
      
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="ReportReason" component={ReportReason} />
      <Stack.Screen name="Reported" component={Reported} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
