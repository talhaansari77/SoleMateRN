import {View} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';

const ConditionPassCon = ({txt1, txt2, color, color2, onGetPassword}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.childContainer}>
        <CustomText
          label={txt1}
          fontFamily="ProximaNova-Regular"
          color={color}
          fontSize={verticalScale(10)}
        />
      </View>
      <View style={{alignSelf: 'center', width: '45%'}}>
        <CustomText
          label={txt2}
          onPress={txt2 == '* get our password' ? onGetPassword : null}
          alignSelf="flex-start"
          textDecorationLine={
            txt2 == '* get our password' ? 'underline' : 'none'
          }
          fontFamily="ProximaNova-Regular"
          color={color2}
          fontSize={verticalScale(10)}
        />
      </View>
    </View>
  );
};

export default ConditionPassCon;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: '5@vs',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  childContainer: {
    alignSelf: 'center',
    width: '45%',
    marginLeft: '30@s',
  },
});
