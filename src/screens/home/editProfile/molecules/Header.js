import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Spacer} from '../../../../components/Spacer';
import ProfileNav from '../../profile/molecules/ProfileNav';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';

const Header = ({handleSubmit, handleCancel}) => {
  return (
    <>
      <Spacer height={15} />
      <ProfileNav
        title={'Edit Profile'}
        LeftSide={() => (
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}
            activeOpacity={0.6}>
            <CustomText
              fontSize={13}
              color={colors.black}
              fontFamily={'ProximaNova-Regular'}>
              Save
            </CustomText>
          </TouchableOpacity>
        )}
        RightSide={() => (
          <TouchableOpacity activeOpacity={0.6} onPress={handleCancel}>
            <CustomText
              fontSize={13}
              color={colors.black}
              fontFamily={'ProximaNova-Regular'}>
              Cancel
            </CustomText>
          </TouchableOpacity>
        )}
        Center={() => (
          <CustomText
            fontSize={16}
            color={colors.black}
            fontFamily={'ProximaNova-Bold'}>
            Edit Profile
          </CustomText>
        )}
      />
      <Spacer height={10} />
    </>
  );
};

export default Header;
