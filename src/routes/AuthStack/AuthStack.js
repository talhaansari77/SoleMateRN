import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screens/auth/welcome";
import Login from "../../screens/auth/login";
import Signup from "../../screens/auth/signup";
import OnBoarding from "../../screens/auth/onBoarding/OnBoarding";
import ViewPager from "../../screens/auth/ViewPager";
import Settings from "../../screens/home/settings";
import MainSettings from "../../screens/home/settings/MainSettings";
import GeneralSettings from "../../screens/home/settings/GeneralSettings";
import EditProfile from "../../screens/home/editProfile";

import profile from "../../screens/home/profile";

import Report from "../../screens/home/report/Report";
import ReportReason from "../../screens/home/reportReason";
import Reported from "../../screens/home/reported/Reported";
import reportReason from "../../screens/home/reportReason";
import reported from "../../screens/home/reported";


const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={"Report"}
    >

    


      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      {/* <Stack.Screen name="ViewPager" component={ViewPager} /> */}


      {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      {/* <Stack.Screen name="ViewPager" component={ViewPager} /> */}

      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="ReportReason" component={ReportReason} />
      <Stack.Screen name="Reported" component={Reported} />




      {/* <Stack.Screen name="Settings" component={Settings} /> */}
      {/* <Stack.Screen name="MainSettings" component={MainSettings} /> */}
      {/* <Stack.Screen name="GeneralSettings" component={GeneralSettings} /> */}

      {/* <Stack.Screen name="Settings" component={Settings} /> */}

     <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} /> 
      {/* <Stack.Screen name="EditProfile" component={profile} />




      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      {/* <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} /> */}

    </Stack.Navigator>
  );
};

export default AuthStack;
