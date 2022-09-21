import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../../screens/home/chat/Chat";
import Request from "../../screens/home/chat/request/Request";
import Report from "../../screens/home/report";
import ReportReason from "../../screens/home/reportReason";
import Reported from "../../screens/home/reported";


const MessagingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={"Report"}
    >
      <Stack.Screen name="Request" component={Request} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="ReportReason" component={ReportReason} />
      <Stack.Screen name="Reported" component={Reported} />
  
    </Stack.Navigator>
  );
};

export default MessagingStack;

