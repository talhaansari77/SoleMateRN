import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styled from 'react-native-styled-components';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import icons from '../../../../assets/icons';
import SettingItem from './molecules/SettingItem';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';
import {getAuthId, saveUser} from '../../../services/FirebaseAuth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import firebase from '@react-native-firebase/app';

import {getSpecificeUser} from '../../../services/FirebaseAuth';
const Settings = ({navigation}) => {
  const [authData, setauthData] = useState({});



  useEffect(() => {

    // get user Data
    getAuthData();
  }, []);

  const getAuthData = async () => {
    const id = await getAuthId();
// get user all data
    getSpecificeUser(id).then(data => {
      setauthData(data);
    });
  };
  // generate link using firabase deeplinking 
  const generateLink = async () => {
    const id = await getAuthId();
  
    var newDate = new Date();

    var totalDate=(moment(newDate).add(2,"days").format("YYYY-MM-DD"))
    console.log("NewDataIS",totalDate)
    // save user requst time ifuser  share profile the link user 
    await saveUser(id, {requestTime:  totalDate})
    try {
      var link = await dynamicLinks().buildShortLink(
        {
          link: `https://getsolemate.page.link/EwdR?screen=Profile&withApp=true&linkDate=${totalDate}&id=${id}`,
          domainUriPrefix: 'https://getsolemate.page.link',

          // generate  link in android and get  package  name in android foilder
          android: {
            packageName: 'com.Solmate',
            minimumVersion: '18',
          },
          // generate link in ios  and get bundeld in xcode
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

  // save user link link whatsapp and other
  const shareUser = async () => {
// get user age
    var a = moment();
    var b = moment(authData?.dob, 'YYYY');
    var age = a.diff(b, 'years');
   // set user name and age
    const data = authData?.firstName + ' ' + authData?.lastName + ' - ' + age;
// generate  link
    const profileLink = await generateLink();
    const options = {
      url: profileLink,
      message: data,
    };
    await Share.open(options)
      .then(res => {
        console.log('Success', res);
      })
      .catch(err => {
        err && console.log('Error', err);
      });
  };
  const [count, setCount] = useState(-1);

  // setting array
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

         {/* setting array */}

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
                // if name is equal equal Generate link then share  linkn
                setting.name === 'Generate link'
                  ? shareUser
                  : () => console.log('btn')
              }
            />
          </View>
        ))}
      </View>
    </Container>
  );
};

const Container = styled(SafeAreaView, {
  width: '100%',
  flex: 1,
});

export default Settings;
