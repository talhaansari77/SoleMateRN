import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import styled from 'react-native-styled-components';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import profileImages from '../../../../assets/Profile_images';
import CustomImage from '../../../components/CustomImage';
import {color} from 'react-native-elements/dist/helpers';
import CustomButton from '../../../components/CustomButton';
import CustomGradientButton from '../../../components/CustomGradientButton';
import commonStyles from '../../../utils/CommonStyles';
import Component from '../../../components/FastImage';

const Report = ({navigation,route}) => {

  console.log("RoutesData",route?.params?.otherData)
  return (
    <Container>
      <SafeAreaView>
        <View>
          <CustomText
            marginTop={35}
            fontFamily={'ProximaNova-Bold'}
            fontSize={20}
            textAlign={'center'}
            alignSelf={'center'}
            color={colors.primary}>
            Are you sure you want to end conversation with {route?.params?.otherData?.firstName}?
          </CustomText>
        </View>
        <View style={{width:moderateScale(300),height:verticalScale(240),borderRadius:20,overflow:"hidden",marginVertical:20}}>
        <Component
                        uri={Math.random()}
                        style={commonStyles.img}
                        source={{uri: route?.params?.otherData?.images?.[0]}}
                      />
        
        </View>
        {/* <View
          style={{
            shadowColor: '#171717',
            shadowOffset: {height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}> */}
          <CustomGradientButton
            marginTop={30}
            height={50}
            width={390}
            fontFamily={'ProximaNova-Bold'}
            fontSize={20}
            title={'Yes, I am sure!'}
            backgroundColor={colors.darkOrange}
            borderRadius={50}
            onPress={() => {
              navigation.navigate('ReportReason',{otherUser:route?.params?.otherData,authUser:route?.params?.authData,userAllChat:route?.params?.allChat});
            }}
          />
        {/* </View> */}

        <CustomButton
          style={{shadowColor: '#171717'}}
          backgroundColor={'none'}
          marginTop={40}
          height={50}
          width={350}
          fontFamily={'ProximaNova-Bold'}
          fontSize={20}
          title={'Nevermind'}
          borderColor={colors.darkOrange}
          borderWidth={1.9}
          onPress={()=>{
            navigation.goBack()

          }}
          color={colors.primary}
          borderRadius={50}
        />
      </SafeAreaView>
    </Container>
  );
};

const Container = styled(View, {
  width: '100%',
  padding: moderateScale(40),
  flex: 1,
});

export default Report;
