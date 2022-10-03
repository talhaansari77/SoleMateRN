import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
// import SettingsArray from "./molecules/SettingsArray";
import styled from 'react-native-styled-components';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import icons from '../../../../assets/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {signout} from '../../../services/FirebaseAuth';
function MainSettings({navigation}) {
  const MainSettingsArray = [
    {
      id: 1,
      name: 'Settings',
      icon: icons.settingIcon,
      onPress: () => navigation.navigate('Settings'),
    },
    {
      id: 2,
      name: 'Support Center',
      icon: icons.questionMarkIcon,
      onPress: () => navigation.navigate('GeneralSettings'),
    },
    {
      id: 3,
      name: 'Log Out',
      icon: icons.logIcon,
      onPress: async () => {
        await AsyncStorage.removeItem('userAuth');
        await AsyncStorage.removeItem('fcmToken');


        await signout();
        navigation.reset({
          index: 0,
          routes: [{name: 'AuthStack'}],
        });
      },
    },
  ];
  return (
    <Container>
      <TouchableOpacity>
        <View>
          <CustomText
            fontFamily={'ProximaNova-Bold'}
            fontSize={16}
            fontWeight={'700'}
            alignSelf={'flex-end'}
            marginRight={12}
            marginTop={10}
            color={colors.primary}>
            Done
          </CustomText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          {/* <CustomText fontSize={30} fontWeight={'700'} marginLeft={18}  marginBottom={35} marginTop={20}  > */}

          <CustomText
            fontFamily={'ProximaNova-Bold'}
            fontSize={30}
            fontWeight={'700'}
            marginLeft={18}
            marginBottom={35}
            marginTop={20}>
            Settings
          </CustomText>
        </View>
      </TouchableOpacity>

      {MainSettingsArray.map((settings, index) => {
        return (
          // onPress={() => navigation.navigate("MainSettings")}
          <TouchableOpacity onPress={settings.onPress} key={index}>
            <View
              style={{flexDirection: 'row', paddingBottom: 38, marginLeft: 20}}>
              <Image
                style={{marginRight: scale(10), marginTop: verticalScale(5)}}
                source={settings.icon}
              />
              <CustomText fontFamily={'ProximaNova_Regular'} fontSize={15}>
                {settings.name}
              </CustomText>
            </View>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}

const Container = styled(SafeAreaView, {
  width: '100%',
  // alignItems: "center",
  // flexDirection: "column",
  padding: moderateScale(20),
  flex: 1,
});

export default MainSettings;
