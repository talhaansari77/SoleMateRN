import {View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'react-native-styled-components';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import { scale, moderateScale} from 'react-native-size-matters';
import icons from '../../../../assets/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getAuthId, saveUser, signout} from '../../../services/FirebaseAuth';
import commonStyles from '../../../utils/CommonStyles';
function MainSettings({navigation}) {

  // Setting Array
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
        // logout funcation
        onLogout();
      },
    },
  ];
// logout user if user exist and remove id in local storage and also remove fcm token in local storage
  const onLogout = async () => {
    const id= await getAuthId()
    await saveUser(id,{fcmToken:""})

    await AsyncStorage.removeItem('userAuth');
     await AsyncStorage.removeItem('fcmToken');


   // signout function
    await signout();
    navigation.reset({
      index: 0,
      routes: [{name: 'AuthStack'}],
      // screen:'Login'
    });
  };
  return (
    <Container> 
      <View style={{padding: 20}}>

        {/* header back button */}
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

         {/* setting array */}

        {MainSettingsArray.map((settings, index) => {
          return (
            <TouchableOpacity onPress={settings.onPress} key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingBottom: 40,
                  alignItems: 'center',
                }}>
                  <View style={{width:20,height:20,marginRight: scale(10)}}>
                  <Image
                  style={commonStyles.img}
                  source={settings.icon}
                />

                  </View>
               
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
  flex: 1,
});

export default MainSettings;
