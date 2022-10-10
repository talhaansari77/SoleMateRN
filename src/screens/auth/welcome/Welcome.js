import {View, ImageBackground} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import commonStyles from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import CustomGradientButton from '../../../components/CustomGradientButton';
import profileImages from '../../../../assets/Profile_images';

const Welcome = ({navigation}) => {
  return (
    <View style={commonStyles.commonMain}>
      <ImageBackground
        ImageBackground
        source={profileImages.loginSignupGiral}
        style={[
          commonStyles.img,
          {
            alignItems: 'center',
          },
        ]}>
        <View style={{alignItems: 'center', height: '100%', width: '100%'}}>
          <Spacer height={verticalScale(100)} />

          <CustomText
            label="SoleMate"
            fontFamily="ProximaNova-Bold"
            color={colors.white}
            marginTop={20}
            fontSize={verticalScale(35)}
          />
          <CustomText
            label="Refer. Understand.& Connect."
            fontFamily="ProximaNova-Regular"
            color={colors.white}
            marginTop={verticalScale(10)}
            fontSize={verticalScale(10)}
          />
          <View style={{height: '40%'}} />

          {/* go to login Screen */}
          <CustomGradientButton
            title="Login"
            width="90%"
            marginTop={verticalScale(10)}
            backgroundColor={colors.primary}
            height={verticalScale(45)}
            borderRadius={moderateScale(10)}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />

          {/* got to SignupScreen */}
          <CustomText
            label="Sign up"
            fontFamily="ProximaNova-Bold"
            color={colors.primary}
            onPress={() => {
              navigation.navigate('Signup');
            }}
            marginTop={verticalScale(12)}
            fontSize={verticalScale(12)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
