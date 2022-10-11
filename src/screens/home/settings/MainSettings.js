import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
// import SettingsArray from "./molecules/SettingsArray";
import styled from 'react-native-styled-components';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import icons from '../../../../assets/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getAuthId, saveUser, signout} from '../../../services/FirebaseAuth';
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
      onPress: () => {
        onLogout();
      },
    },
  ];

  const onLogout = async () => {
    const id= await getAuthId()
    await saveUser(id,{fcmToken:""})

    await AsyncStorage.removeItem('userAuth');
     await AsyncStorage.removeItem('fcmToken');



    await signout();
    navigation.reset({
      index: 0,
      routes: [{name: 'AuthStack'}],
    });
  };
  return (
    <Container>
      {/* <TouchableOpacity>
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
      </TouchableOpacity> */}

     
      <View style={{padding: 20}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{width: 40, height: 40}}>
          <Ionicons
            name="ios-chevron-back-outline"
            size={moderateScale(22)}
            color={colors.primary}
          />
        </TouchableOpacity>

        <CustomText
          fontSize={22}
          fontWeight={'700'}
          marginBottom={35}
          marginTop={17}
          fontFamily={'ProximaNova-Bold'}>
          Settings
        </CustomText>

        {MainSettingsArray.map((settings, index) => {
          return (
            // onPress={() => navigation.navigate("MainSettings")}
            <TouchableOpacity onPress={settings.onPress} key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingBottom: 40,
                  alignItems: 'center',
                }}>
                <Image
                  style={{marginRight: scale(10)}}
                  source={settings.icon}
                />
                <CustomText fontFamily={'ProximaNova-Regular'} fontSize={15}>
                  {settings.name}
                </CustomText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Container>
  );
}

const Container = styled(SafeAreaView, {
  width: '100%',
  // alignItems: "center",
  // flexDirection: "column",
  // padding: moderateScale(20),
  flex: 1,
});

export default MainSettings;
