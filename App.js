import 'react-native-gesture-handler';
import {LogBox, View} from 'react-native';
import {Provider} from 'redux';
import {store} from './src/redux/store';
import {useFonts} from 'react-native-font';
import RootNavigator from './src/routes';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';
import {useEffect} from 'react';

LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

export default function App() {
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

  // async function buildLink() {
  //   const id = '454edy7';
  //   const link = await dynamicLinks().buildShortLink({
  //     link: `https://getsolemate.page.link/EwdR?id=${id}`,
  //     // domainUriPrefix is created in your Firebase console
  //     domainUriPrefix: 'https://getsolemate.page.link',
  //     android: {
  //       packageName: 'com.Solmate',
  //       minimumVersion: '18',
  //     },
  //     ios: {
  //       appStoreId: '123456789',
  //       bundleId: 'com.Solmate',
  //       minimumVersion: '18',
  //     },

  //     // optional setup which updates Firebase analytics campaign
  //     // "banner". This also needs setting up before hand
  //     // analytics: {
  //     //   campaign: 'banner',
  //     // },
  //   });
  //   dynamicLinks.ShortLinkType.DEFAULT;
  //   return link;
  // }

  // async function buildLink() {
  //   const link = await dynamicLinks().buildLink({
  //     link: 'https://getsolemate.page.link/EwdR?name=user&id=123',
  //     // domainUriPrefix is created in your Firebase console
  //     // domainUriPrefix: 'https://getsolemate.page.link',
  //     // optional setup which updates Firebase analytics campaign
  //     // "banner". This also needs setting up before hand
  //     // analytics: {
  //     //   campaign: 'banner',
  //     // },
  //   });

  //   return link;
  // }

  const handleDynamicUrlLink = link => {
    // console.log('this is DynamicLink:🖐', link);
    if (!!link?.url) {
      let id = link.url?.split('=').pop();
      let screenName = link.url?.split('=')[1].split('&')[0];
      console.log('user Id:🖐', id);
      console.log('screenName:🖐', screenName);
    }
  };

  // const showLink = async () => {
  //   const getLink = await generateLink();
  //   console.log('get buildLink:🖐', getLink);
  // };
  

  useEffect(() => {
    // buildLink().then(res => console.log('buildLink:🖐', res));

    

    dynamicLinks()
      .getInitialLink()
      .then(link => {
        handleDynamicUrlLink(link);
      });
    // console.log('this is DynamicLink:🖐', dynamicLinks().getInitialLink());

    const linkingListener = dynamicLinks().onLink(handleDynamicUrlLink);
    return () => {
      linkingListener();
    };
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
