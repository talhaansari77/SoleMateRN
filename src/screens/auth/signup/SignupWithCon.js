import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import {verticalScale} from 'react-native-size-matters';
import commonStyles from '../../../utils/CommonStyles';
import profileImages from '../../../../assets/Profile_images';
import icons from '../../../../assets/icons';
const SignupWithCon = ({onGoogle, onFacebook}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.childContainer}
        activeOpacity={0.6}
        onPress={onGoogle}>
        <ImageBackground
          style={[
            commonStyles.img,
            {
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            },
          ]}
          resizeMode="cover"
          source={profileImages.google}>
          <View
            style={{
              width: moderateScale(30),
              height: verticalScale(30),
              marginLeft: 10,
              padding: 2,
            }}>
            <Image source={icons.google} style={commonStyles.img} />
          </View>

          <View style={{width: '60%'}}>
            <CustomText
              label="GOOGLE"
              fontFamily="ProximaNova-Bold"
              color={colors.googleGreen}
              fontSize={verticalScale(12)}
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
export default SignupWithCon;
const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
    height: '50@vs',
    backgroundColor: colors.white,
    borderRadius: '10@s',
    borderWidth: 1.2,
    borderColor: colors.lightGray,
    flexDirection: 'row',
    shadowColor: colors.lightGray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 2,
    shadowRadius: 5,
  },
  childContainer: {
    width: '100%',
    height: '100%',

    flexDirection: 'row',
  },
});
