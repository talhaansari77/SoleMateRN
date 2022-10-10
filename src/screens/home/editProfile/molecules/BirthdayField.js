import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BirthdayField = ({
  birthday,
  setBirthday,
  error,
  setSubmitError,
  submitError,
}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const handleDataPicker = data => {
    console.log(data);
    const dob = JSON.stringify(data).slice(1, 11);
    setBirthday(dob);
    setIsDatePickerVisible(!isDatePickerVisible);
    setYear(dob.split('-')[0]);
    setMonth(dob.split('-')[1]);
    setDay(dob.split('-')[2]);

    getAge(new Date(year, month, day));
  };
  const getAge = (d1, d2) => {
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  };

  useEffect(() => {
    setYear(birthday.split('-')[0]);
    setMonth(birthday.split('-')[1]);
    setDay(birthday.split('-')[2]);
  }, [birthday]);

  return (
    <>
      <View>
        <CustomText
          label={'Birthday'}
          color={colors.darkOrange}
          fontFamily={'ProximaNova-Regular'}
          fontSize={11}
        />
        <Spacer height={10} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: scale(10),
            height: verticalScale(27),
          }}>
          <View style={{flex: 5}}>
            <CustomText
              color={colors.gray}
              label={'Month'}
              marginLeft={verticalScale(5)}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setSubmitError({...submitError, birthdayError: ''});

                setIsDatePickerVisible(true);
              }}
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(7),
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: scale(5),
              }}>
              <TextInput
                value={month}
                onChangeText={mo => setMonth(mo)}
                placeholder="January"
                placeholderTextColor={colors.placeholder}
                style={{width: '70%', color: colors.black, padding: 0}}
              />

              <View>
                <FontAwesomeIcon name="chevron-down" color={colors.gray} />
              </View>
            </TouchableOpacity>
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
          <Spacer width={10} />
          <View style={{flex: 2}}>
            <CustomText
              label={'Day'}
              color={colors.gray}
              fontFamily={'ProximaNova-Regular'}
              marginLeft={verticalScale(5)}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setSubmitError({...submitError, birthdayError: ''});

                setIsDatePickerVisible(true);
              }}
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(7),
                height: verticalScale(27),
                paddingHorizontal: 5,
                justifyContent: 'center',
              }}>
              <TextInput
                value={day}
                onChangeText={da => setDay(da)}
                placeholder="20"
                placeholderTextColor={colors.placeholder}
                style={{color: colors.black, padding: 0}}
              />
            </TouchableOpacity>
          </View>
          <Spacer width={10} />
          <View style={{flex: 3}}>
            <CustomText
              color={colors.gray}
              fontFamily={'ProximaNova-Regular'}
              marginLeft={verticalScale(5)}>
              Year
            </CustomText>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setSubmitError({...submitError, birthdayError: ''});

                setIsDatePickerVisible(true);
              }}
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(7),
                height: verticalScale(27),
                paddingHorizontal: 5,
                justifyContent: 'center',
              }}>
              <TextInput
                placeholder="1994"
                value={year}
                onChangeText={ye => setYear(ye)}
                placeholderTextColor={colors.placeholder}
                style={{color: colors.black, padding: 0}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={data => handleDataPicker(data)}
          onCancel={() => setIsDatePickerVisible(false)}
          maximumDate={new Date()}
        />
      </View>
    </>
  );
};

export default BirthdayField;
