import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GeneralSettings from "../../screens/home/settings/GeneralSettings";
import MainSettings from "../../screens/home/settings/MainSettings";
import Settings from "../../screens/home/settings/Settings";

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={"Settings"}
    >
      <Stack.Screen name="GeneralSettings" component={GeneralSettings} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="MainSettings" component={MainSettings} />
    </Stack.Navigator>
  );
};

export default SettingStack;
