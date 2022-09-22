import {View, Text, Image, ImageBackground, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import welcomeImages from '../../../../assets/welocme_images';
import commonStyles from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import CustomGradientButton from '../../../components/CustomGradientButton';

const Welcome = ({navigation}) => {
  return (
    <View style={commonStyles.commonMain}>
      <ImageBackground
        ImageBackground
        source={welcomeImages.welcomeImageGirl}
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
            // fontWeight="700"
            fontSize={verticalScale(35)}
          />
          <CustomText
            label="Refer. Understand.& Connect."
            fontFamily="ProximaNova-Regular"
            color={colors.white}
            marginTop={verticalScale(10)}
            fontSize={verticalScale(10)}
          />
          <View style={{height: '45%'}} />
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
