import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
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

  // const handleDynamicLink = link => {
  //   // Handle dynamic link inside your own application
  //   console.log('this is DynamicLink-1:🖐', link);
  //   if (link.url == 'http://getsolemate.com') {
  //     // ...navigate to your offers screen
  //     console.log('this is DynamicLink-2:🖐', link.url);

  //   }
  // };

  // useEffect(() => {

  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
  //   // When the component is unmounted, remove the listener
  //   return () => unsubscribe();
  // }, []);

  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
