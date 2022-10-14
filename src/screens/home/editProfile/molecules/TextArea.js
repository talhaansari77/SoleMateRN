import {View, TextInput} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const TextArea = ({label, lines = 5, onChangeText, value, error}) => {
  return (
    <>
      <View>
        <CustomText
          label={label}
          color={colors.primary}
          fontFamily={'ProximaNova-Regular'}
          fontSize={11}
        />
        <Spacer height={10} />
        <TextInput
          multiline={true}
          numberOfLines={lines}
          value={value}
          onChangeText={onChangeText}
          style={{
            borderWidth: 1,
            padding: moderateScale(5),
            borderRadius: moderateScale(10),
            color: colors.black,
            height: verticalScale(150),
          }}
        />
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

export default TextArea;
