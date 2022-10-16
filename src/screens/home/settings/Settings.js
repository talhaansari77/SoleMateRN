import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'react-native-styled-components';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import icons from '../../../../assets/icons';
import SettingItem from './molecules/SettingItem';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';
import base64 from 'react-native-base64';
import profileImages from '../../../../assets/Profile_images';
import {getAuthId} from '../../../services/FirebaseAuth';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Settings = ({navigation}) => {
  // prefix for Sharing Image
  // 'data:image/jpeg;base64,/9j/'
  const generateLink = async () => {
    const id = await getAuthId();
    const linkDate = new Date();

    console.log(linkDate)
    try {
      var link = await dynamicLinks().buildShortLink(
        {
          link: `https://getsolemate.page.link/EwdR?screen=Profile&withApp=true&linkDate=${linkDate}&id=${id}`,
          domainUriPrefix: 'https://getsolemate.page.link',
          android: {
            packageName: 'com.Solmate',
            minimumVersion: '18',
          },
          ios: {
            appStoreId: '123456789',
            bundleId: 'com.Solmate',
            minimumVersion: '18',
          },
        },
        dynamicLinks.ShortLinkType.DEFAULT,
      );
      return link;
    } catch (error) {
      console.log('error raised', error);
    }
   
  };

  const shareUser = async () => {
    
    // console.log('imageLink:', base64.encode(''));
    // getting userProfile Link
    const profileLink = await generateLink();
    // console.log('get builtLink:🖐', profileLink);
    const options = {
      url: profileLink,
      // urls: [ShareImages.image2],
      message: 'Lets get to know each other',
    };

    // Share
    await Share.open(options)
      .then(res => {
        console.log('Success', res);
      })
      .catch(err => {
        err && console.log('Error', err);
      });
  };
  const [count, setCount] = useState(-1);
  const SettingsArray = [
    {
      id: 1,
      name: 'Account Management',
      icon: icons.profileIcon,
    },
    {
      id: 2,
      name: 'Language',
      icon: icons.langWhite,
    },
    {
      id: 3,
      name: 'Stickers',
      icon: icons.smileIcon,
    },
    {
      id: 4,
      name: 'Notification',
      icon: icons.notificationIcon,
    },
    {
      id: 5,
      name: 'Privacy policy',
      icon: icons.noteIcon,
    },
    {
      id: 6,
      name: 'Generate link',
      icon: icons.qrIcon,
    },

    {
      id: 7,
      name: 'Video settings',
      icon: icons.camIcon,
      comingSoon: ' - Comming Soon',
    },
  ];
  return (
    <Container>
      <View style={{padding:20}}>

      {/* <TouchableOpacity activeOpacity={0.6}>
        <View>
          <CustomText
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

      <TouchableOpacity activeOpacity={0.6}>
        <View>
          <CustomText
            fontSize={20}
            fontWeight={'700'}
            marginBottom={35}
            marginTop={20}>
            Settings
          </CustomText>
        </View>
      </TouchableOpacity>

      {SettingsArray.map((setting, index) => (
        <View style={{display: 'flex'}}>
          <SettingItem
            name={setting.name}
            coming={setting.comingSoon}
            icon={setting.icon}
            setCount={setCount}
            count={count}
            index={index}
            key={index}
            onPress={
              setting.name === 'Generate link'
                ? shareUser
                : () => console.log('btn')
            }
          />
          {/* <CustomText>
          {setting.comingSoon ? "CommingSoon" : ""}
          </CustomText> */}
        </View>
      ))}
            </View>

    </Container>
  );
};

const Container = styled(SafeAreaView, {
  width: '100%',
  // alignItems: "center",
  // flexDirection: "column",
  // padding: moderateScale(20),
  flex: 1,
});

export default Settings;
