import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import welcomeImages from '../../../../assets/welocme_images';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import {verticalScale} from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import CustomGradientButton from '../../../components/CustomGradientButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const OnBoardingData = [
  {
    id: 0,
    title: 'Get refer to by your friends',
    text1: 'Please read our ',
    privacy: 'privacy policy',
    regarding: 'policy regarding',
    text2: ' before registering.',

    image: welcomeImages.friendspurple,
  },
  {
    id: 1,
    title: 'Chat with your special one',
    text1: 'Please read our ',
    privacy: 'privacy policy',
    regarding: 'policy regarding',
    text2: ' before registering.',

    image: welcomeImages.couplePurple,
  },
  {
    id: 2,
    title: 'Delete the app after use',
    text1: 'Please read our ',
    privacy: 'privacy policy',
    regarding: 'policy regarding',
    text2: ' before registering.',

    image: welcomeImages.eminemPurple,
  },
];
const OnBoarding = ({navigation}) => {
  const [page, setPage] = useState(0);
  const ref = useRef(null);
  const [isAuth, setIsAuth] = useState(true);

  // check  Auth id
  useEffect(() => {
    (async function () {
      const user = await AsyncStorage.getItem('userAuth');
      console.log('AuthID');
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{name: 'MainStack'}],
        });
      }
      setIsAuth(true);
    })();
  }, []);

  // move Next function if use click next Button
  const moveForward = () => {
    if (page + 1 <= 2) {
      ref?.current?.goToSlide(page + 1);
      setPage(page + 1);
    } else {
    }
  };
  return isAuth ? (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <OnBoardContainer/> */}
      <AppIntroSlider
        showNextButton={false}
        showDoneButton={false}
        ref={ref}
        data={OnBoardingData}
        dotStyle={{backgroundColor: 'white'}}
        activeDotStyle={{backgroundColor: 'white'}}
        onSlideChange={index => setPage(index)}
        keyExtractor={(item, index) => {
          item?.id + index.toString();
        }}
        renderItem={({item}) => (
          <>
            {/* mainOnBoarding View */}
            <View style={styles.onBoardingContainer}>
              <View style={styles.imgConatiner}>
                <Image
                  source={item.image}
                  style={styles.img}
                  resizeMode="contain"
                />
              </View>
              <View style={{flexDirection: 'row', marginVertical: 40}}>
                <View style={{width: verticalScale(40)}} />
                {page == 1 || page == 2 ? null : (
                  <View
                    style={page == 0 ? styles.dotactive1 : styles.dotInactive}
                  />
                )}
                {page == 2 ? null : (
                  <View
                    style={page == 1 ? styles.dotactive2 : styles.dotInactive}
                  />
                )}
                <View
                  style={page == 2 ? styles.dotactive3 : styles.dotInactive}
                />
                <View style={{width: verticalScale(40)}} />
              </View>

              <CustomText
                label={item.title}
                fontFamily="ProximaNova-Bold"
                fontSize={verticalScale(16)}
              />
              <Spacer height={verticalScale(10)} />
              <View style={{flexDirection: 'row'}}>
                <CustomText
                  label={item.text1}
                  fontFamily="ProximaNova-Regular"
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                />
                <CustomText
                  label={item.privacy}
                  fontFamily="ProximaNova-Regular"
                  textDecorationLine={'underline'}
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                  textDecorationColor="black"
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <CustomText
                  label="and "
                  fontFamily="ProximaNova-Regular"
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                />
                <CustomText
                  label={item.regarding}
                  fontFamily="ProximaNova-Regular"
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                  textDecorationColor="black"
                  textDecorationLine={'underline'}
                />
                <CustomText
                  label={item.text2}
                  fontFamily="ProximaNova-Regular"
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                />
              </View>

              {/* Next Button */}
              <CustomGradientButton
                title="Next"
                marginTop={verticalScale(35)}
                height={verticalScale(45)}
                onPress={() => {
                  if (page == 2) {
                    navigation.navigate('Welcome');
                  } else {
                    moveForward();
                  }
                }}
              />

              {/* Skip Button */}
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  zIndex: 1,
                  height: 50,
                }}
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                <CustomText
                  label="Skip"
                  fontFamily="ProximaNova-Bold"
                  color={colors.primary}
                  fontSize={verticalScale(12)}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  ) : (
    <></>
  );
};

export default OnBoarding;

const styles = ScaledSheet.create({
  onBoardingContainer: {
    alignItems: 'center',
    flex: 1,
  },
  imgConatiner: {
    height: '50%',
    width: '100%',
    paddingRight: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  dotInactive: {
    width: '8@s',
    height: '8@s',
    backgroundColor: colors.gray,
    borderRadius: '25@s',
    marginHorizontal: '5@s',
  },
  dotactive1: {
    width: '8@s',
    height: '8@s',
    backgroundColor: colors.primary,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
  dotactive2: {
    width: '35@s',
    height: '8@s',
    backgroundColor: colors.primary,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
  dotactive3: {
    width: '45@s',
    height: '8@s',
    backgroundColor: colors.primary,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
});
