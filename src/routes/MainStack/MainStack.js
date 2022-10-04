import {View, Text, Image, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import base from '../../screens/home/base';
import Profile from '../../screens/home/profile';
import search from '../../screens/home/search';
import favorite from '../../screens/home/favorite';
import chat from '../../screens/home/chat';
import icons from '../../../assets/icons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/Colors';
import EditProfile from '../../screens/home/editProfile/EditProfile';
import interests from '../../screens/home/interests';
import Settings from '../../screens/home/settings';
import SettingStack from '../SettingStack';
import MessagingStack from '../MessagingStack/MessagingStack';
const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: verticalScale( Platform.OS=="ios"? 60:50),
          paddingHorizontal: scale(20),
          paddingTop:Platform.OS=="ios"?10:0
    
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = 'user';
            size = focused ? 27 : 25;
          } else if (route.name === 'MessagingStack') {
            iconName = 'message1';
            size = focused ? 27 : 25;
            return (
              <AntDesign
                name={iconName}
                size={moderateScale(size)}
                color={color}
              />
            );
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            size = focused ? 27 : 25;
          }

          return (
            <Feather name={iconName} size={moderateScale(size)} color={color} />
          );
        },
      })}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: '#000',
        activeBackgroundColor: '#fff',
        showIcon: true,
      }}
      initialRouteName="Profile">
      <Tab.Screen name="Profile" component={Profile} />

      <Tab.Screen name="MessagingStack" component={MessagingStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
      {/* <Tab.Screen name="Favorite" component={favorite} />
      <Tab.Screen name="Home" component={base} /> */}

      {/* <Tab.Screen
        options={{
          tabBarItemStyle: { display: "none" },
        }}
        name="EditProfile"
        component={EditProfile}
      /> */}
      {/* <Tab.Screen name="Profile" component={interests} /> */}
    </Tab.Navigator>
  );
};

export default MainStack;
