import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styled from 'react-native-styled-components';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import icons from '../../../../assets/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingItem from './molecules/SettingItem';

const Settings = ({navigation}) => {
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
              onPress={() => console.log('btn')}
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
