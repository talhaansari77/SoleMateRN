import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import styled from 'react-native-styled-components';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Component from '../../../components/FastImage';

const Reported = ({navigation, route}) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS == 'ios' ? verticalScale(30) : 0,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Request');
        }}
        style={{width: 40, height: 40, margin: 20}}>
        <Ionicons
          name="ios-chevron-back-outline"
          size={moderateScale(22)}
          color={colors.primary}
        />
      </TouchableOpacity>

      <Container>
        <SafeAreaView>
          <View style={{width:"100%",alignItems:"center"}}>
            <CustomText
              fontFamily={'ProximaNova-Bold'}
              fontSize={18}
              textAlign={'center'}
              color={colors.primary}>
              We sent {route?.params?.otherUserData?.firstName} the reason you
              end the conversation!
            </CustomText>
          </View>
          <View
            style={{
              width: '100%',
              height: verticalScale(240),
              borderRadius: 20,
              overflow: 'hidden',
              marginVertical: 20,
            }}>
            <View
              style={{
                with: '70%',
                height: verticalScale(240),
              }}>
              <Component
                uri={Math.random()}
                style={{with: '100%', height: '100%'}}
                source={{uri: route?.params?.otherUserData?.images?.image1}}
              />
            </View>
          </View>

          <CustomText
            marginTop={20}
            fontFamily={'ProximaNova-Bold'}
            fontSize={19}
            textAlign={'center'}
            alignSelf={'center'}
            color={colors.primary}>
            Thank you for your honest!
          </CustomText>
        </SafeAreaView>
      </Container>
    </View>
  );
};

const Container = styled(View, {
  width: '100%',
  padding: moderateScale(30),
  flex: 1,
});

export default Reported;
