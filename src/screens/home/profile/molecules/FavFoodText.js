import {View, Text} from 'react-native';
import React from 'react';
import {Spacer} from '../../../../components/Spacer';
import {PaddingLeft} from '../Profile';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {moderateScale, scale} from 'react-native-size-matters';

const FavFoodText = icebreaker => {
  console.log('IceBreakerQue', icebreaker?.icebreaker[1]?.question);
  return (
    <>
      {/* Fav Food */}
      <Spacer height={20} />
      <PaddingLeft>
        <View
          style={{
            paddingRight: scale(5),
          }}>
          <CustomText
            fontSize={14}
            color={colors.gray}
            fontFamily={'ProximaNova-Bold'}>
            {icebreaker?.icebreaker?.[1]?.question}
          </CustomText>
          <View style={{padding: moderateScale(10)}}>
            <CustomText
              fontSize={13}
              color={colors.black}
              fontFamily={'ProximaNova-Bold'}>
              {icebreaker?.icebreaker?.[1]?.answer}
            </CustomText>
          </View>
        </View>
      </PaddingLeft>
    </>
  );
};

export default FavFoodText;
