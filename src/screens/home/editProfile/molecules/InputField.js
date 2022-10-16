import {View, TextInput, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {verticalScale} from 'react-native-size-matters';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Spacer } from '../../../../components/Spacer';

const InputField = ({label, arrow = true, onChangeText, value, error}) => {
  return (
    <>
      <View>
        <CustomText
          color={colors.primary}
          fontFamily={'ProximaNova-Regular'}
          fontSize={11}>
          {label}
        </CustomText>
        {/* <Spacer  height={10}/> */}

        <View
          style={{
            borderBottomWidth: 1,
            paddingVertical: verticalScale(0),
            justifyContent: 'space-between',
            height:Platform.OS=="ios"?verticalScale(25):  verticalScale(40),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={{width: '90%', color: colors.black}}
          />
          {/* {arrow ? (
            <TouchableOpacity activeOpacity={0.6}>
              <FontAwesomeIcon name="chevron-right" />
            </TouchableOpacity>
          ) : (
            <></>
          )} */}
        </View>
        {error ? (
          <CustomText
            color={colors.red}
            fontFamily={'ProximaNova-Regular'}
            fontSize={11}
            marginTop={4}>
            * {error}
          </CustomText>
        ) : null}
      </View>
    </>
  );
};

export default InputField;
