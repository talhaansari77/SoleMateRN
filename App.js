import 'react-native-gesture-handler';
import {LogBox, View} from 'react-native';
import {Provider} from 'redux';
import {store} from './src/redux/store';
import {useFonts} from 'react-native-font';
import RootNavigator from './src/routes';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useEffect} from 'react';

LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

export default function App() {
  async function buildLink() {
    const link = await dynamicLinks().buildLink({
      link: 'https://invertase.io',
      // domainUriPrefix is created in your Firebase console
      domainUriPrefix: 'https://getsolemate.page.link',
      // optional setup which updates Firebase analytics campaign
      // "banner". This also needs setting up before hand
      analytics: {
        campaign: 'banner',
      },
    });

    return link;
  }

  //  const handleUrlLink = link => {
  //   console.log('this is DynamicLink:🖐', link);
  // };

  useEffect(() => {
    buildLink().then(res => console.log('this is DynamicLink:🖐', res));

    // console.log('this is DynamicLink:🖐', dynamicLinks().getInitialLink());

    // const linkingListener = dynamicLinks().onLink(handleUrlLink);
    // return () => {
    //   linkingListener();
    // };
  }, []);

  // const [loaded] = useFonts({
  //   regular: require('./assets/Fonts/ProximaNova_Regular.otf'),
  //   bold: require('./assets/Fonts/ProximaNova_Bold.otf'),
  //   extra: require('./assets/Fonts/ProximaNova_Extrabold.otf'),
  // });

  // if (!loaded) return <View />;

  return (
    //  <Provider store={store}>
    <RootNavigator />
    //  </Provider>
  );
}
