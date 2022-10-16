import {View, TextInput} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const HeightField = ({
  inchesHeight,
  setInchesHeight,
  feetHeight,
  setFeetHeight,
  submitError,
  setSubmitError,
}) => {
  console.log("")
  return (
    <>
      <View style={{paddingHorizontal: scale(10)}}>
        <CustomText
          label={'Height'}
          color={colors.darkOrange}
          fontFamily={'ProximaNova-Regular'}
          fontSize={11}
        />

        <Spacer height={10} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',

            paddingHorizontal: scale(10),
          }}>
          <View
            style={{flex: 1, justifyContent: 'center'}}>
            <CustomText color={colors.primary} marginLeft={scale(5)}>
              Feet
            </CustomText>
            <View
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(7),
                height: verticalScale(27),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '80%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <TextInput
                  value={feetHeight}
                  onChangeText={feet => {
                    setSubmitError({...submitError, heightError: ''});

                    setFeetHeight(feet);
                  }}
                  keyboardType={'numeric'}
                  placeholder={'6'}
                  placeholderTextColor={{color: colors.gray}}
                  style={{paddingLeft: '50%', color: colors.black, padding: 0}}
                />
              </View>
              <View style={{paddingRight: 5}}>
                <FontAwesomeIcon name="chevron-down" color={colors.gray} />
              </View>
            </View>
          </View>

          <Spacer width={10} />
          <View style={{flex: 1}}>
            <CustomText
              color={colors.primary}
              fontFamily="ProximaNova-Regular"
              marginLeft={scale(5)}>
              Inches
            </CustomText>
            <View
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(7),
                height: verticalScale(27),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '80%',
                  justifyContent: 'center',
                  height: '100%',
                }}>
                <TextInput
                  value={inchesHeight}
                  onChangeText={inches => {
                    setSubmitError({...submitError, heightError: ''});
                    setInchesHeight(inches);
                  }}
                  keyboardType={'numeric'}
                  placeholder={'6 '}
                  placeholderTextColor={{color: colors.gray}}
                  style={{color: colors.black, padding: 0, paddingLeft: '50%'}}
                />
              </View>
              <View style={{paddingRight: 5}}>
                <FontAwesomeIcon name="chevron-down" color={colors.gray} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeightField;
