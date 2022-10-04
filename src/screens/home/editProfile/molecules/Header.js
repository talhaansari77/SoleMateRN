import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {Spacer} from '../../../../components/Spacer';
import ProfileNav from '../../profile/molecules/ProfileNav';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';

const Header = ({handleSubmit, handleCancel}) => {
  return (
    <View style={styles.mainContainer}>
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
          <CustomText
            fontSize={16}
            color={colors.black}
            fontFamily={'ProximaNova-Bold'}>
            Edit Profile
          </CustomText>

          <TouchableOpacity activeOpacity={0.6} onPress={handleCancel}>
            <CustomText
              fontSize={13}
              color={colors.black}
              fontFamily={'ProximaNova-Regular'}>
              Cancel
            </CustomText>
          </TouchableOpacity>
      
      </View>

  );
};

export default Header;

const styles=ScaledSheet.create({

  mainContainer: {
    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 1.5},
    shadowOpacity: 5,
    // shadowRadius: 10,
    elevation: 15,
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: '35@vs',
    marginTop: Platform.OS=="ios"? verticalScale(30):5,
    paddingHorizontal:20,
    width: '100%',
    alignItems: 'center',
    justifyContent:"space-between",
    // backgroundColor: 'red',
    width: '100%',
    // marginTop: verticalScale(5),
  },
  btnCon:{
    width:30,height:30,marginTop:5
  }

})
