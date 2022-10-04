import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import SettingStack from './SettingStack';
import Chat from '../screens/home/chat';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import EditProfile from '../screens/home/editProfile/EditProfile';

const RootNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffff',
    },
  };

  const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
    console.log('ForeGround DynamicLink-1:🖐', link);
    if (link?.url) {
      const id = link.url?.split('=').pop();
      const screenName = link.url?.split('&')[0].split('=').pop();
      const wihApp = link.url?.split('&')[1].split('=').pop();
      console.log('user Id:', id);
      console.log('screenName:', screenName);
      console.log('wihApp:', wihApp);
      // if (screenName === 'Profile')
      //   navigation.navigate('MainStack', {screen: 'Profile', params: {id: id}});
    }

  };

  useEffect(() => {

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

        <Stack.Screen name="MainStack" component={MainStack} />
        {/* <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="SettingStack" component={SettingStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
