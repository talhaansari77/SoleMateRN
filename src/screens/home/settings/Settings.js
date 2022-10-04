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
  const ShareImages = {
    image1:
      'data:image/jpeg;base64,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',
  };
  const generateLink = async () => {
    const id = await getAuthId();
    try {
      var link = await dynamicLinks().buildShortLink(
        {
          link: `https://getsolemate.page.link/EwdR?screen=Profile&withApp=true&id=${id}`,
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
    console.log('imageLink:', base64.encode(''));
    // getting userProfile Link
    const profileLink = await generateLink();
    // console.log('get builtLink:🖐', profileLink);
    const options = {
      url: profileLink,
      // urls: [ShareImages.image2],
      message: 'Wanna Talk! Go to my profile',
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
