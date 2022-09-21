import 'react-native-gesture-handler';
import {LogBox, View, Text} from 'react-native';
import {Provider} from 'redux';
import {store} from './src/redux/store';
import {useFonts} from 'react-native-font';
// import RootNavigator from './src/routes';

LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

export default function App() {
  // const [loaded] = useFonts({
  //   regular: require('./assets/Fonts/ProximaNova_Regular.otf'),
  //   bold: require('./assets/Fonts/ProximaNova_Bold.otf'),
  //   extra: require('./assets/Fonts/ProximaNova_Extrabold.otf'),
  // });

  // if (!loaded) return <View />;

  return (
    <View>
      <Text>ckfncdkcndkc</Text>
    </View>
    //  <Provider store={store}>
    // <RootNavigator />
    //  </Provider>
  );
}
