import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../../Screens/Auth/Signup';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Signup">
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
