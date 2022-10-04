import {View, Text, SafeAreaView,TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'react-native-styled-components';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomImage from '../../../components/CustomImage';
import Ionicons from "react-native-vector-icons/Ionicons"
import profileImages from '../../../../assets/Profile_images';

const Reported = ({navigation}) => {
  return (
  <View style={{flex:1}}>
    <TouchableOpacity 
    onPress={()=>{
      navigation.navigate("Request")

    }}
    style={{width:40,height:40,margin:20}}>
    <Ionicons name='ios-chevron-back-outline' size={moderateScale(22)} color={colors.primary}/>


    </TouchableOpacity>


    
    <Container>
      <SafeAreaView>
        <View style={{marginHorizontal:20}}>
          <CustomText
            fontFamily={'ProximaNova-Bold'}
            fontSize={20}
            textAlign={'center'}
            alignSelf={'center'}
            color={colors.darkOrange}>
            We sent Samer the reason you end the conversation!
          </CustomText>
        </View>
        <View style={{marginTop:verticalScale(20)}}>
          <CustomImage
            height={290}
            width={260}
            alignSelf={'center'}
            src={profileImages.reportImage}
          />
        </View>

        <CustomText
          marginTop={30}
          fontFamily={'ProximaNova-Bold'}
          fontSize={20}
          textAlign={'center'}
          alignSelf={'center'}
          color={colors.darkOrange}>
          Thank you for your honest!
        </CustomText>
      </SafeAreaView>
    </Container>
    </View>

  );
};

const Container = styled(View, {
  width: '100%',
  padding: moderateScale(20),
  flex: 1,
});

export default Reported;
