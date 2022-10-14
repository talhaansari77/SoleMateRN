import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import {colors} from '../utils/Colors';
import CustomText from './CustomText';

import Ionicons from 'react-native-vector-icons/Ionicons';
const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
  ...props
}) => {
  return (
    <View>
      {withLabel ? (
        <CustomText
          label={withLabel}
          color={colors.gray}
          fontFamily="ProximaNova-Regular"
          fontSize={verticalScale(10)}
          // marginTop={marginTop}
          marginBottom={verticalScale(10)}
        />
      ) : null}
      <TouchableOpacity
        onPress={props.onPress}
        disabled={!props.onPress}
        style={[
          {
            width: props.width || '100%',
            height: props.height || verticalScale(50),
            borderRadius: props.borderRadius || moderateScale(15),
            backgroundColor: props.backgroundColor,
            marginTop: props.marginTop || verticalScale(0),
            flexDirection: 'row',
            borderColor: props.borderColor || colors.primary,
            borderWidth: 1.3,
            alignItems: 'center',
            paddingLeft: props.paddingLeft,
          },
        ]}>
        {props.icon ? (
          <Image
            style={{
              width: moderateScale(20),
              height: verticalScale(15),
              tintColor: colors.gray,
            }}
            resizeMode="contain"
            source={props.icon}
          />
        ) : null}
        <TextInput
          style={[
            {
              width: props.inputWidth || password ? '86%' : '95%',
              height: props.inputHeight || '100%',
              marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily:   props.textFamily|| 'ProximaNova-Bold',
              fontSize: verticalScale(13),
              color: props.textColor  || colors.black 
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
        {password ? (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setEyeClick(!eyeClick);
            }}>
            {eyeClick ? (
              <Ionicons
                name="eye-off"
                size={moderateScale(22)}
                style={{opacity: 0.5}}
                color={colors.primary}
              />
            ) : (
              <Ionicons
                name="eye"
                size={moderateScale(22)}
                style={{opacity: 0.5}}
                color={colors.primary}
              />
            )}
            {/* <Image style={styles.icon} source={eyeClick ? images.eye:images.hiddenEye } /> */}
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
      {error ? (
        <CustomText
          label="* "
          children={error}
          fontSize={verticalScale(8)}
          color={colors.red}
          fontWeight="600"
          marginTop={verticalScale(5)}
        />
      ) : null}
    </View>
  );
};
export default CustomTextInput;
const styles = ScaledSheet.create({
  icon: {
    width: '20@s',
    height: '15@vs',
    tintColor: colors.gray,
  },
});
