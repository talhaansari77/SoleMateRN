import {View} from 'react-native';
import React from 'react';
import {Spacer} from '../../../../components/Spacer';
import {PaddingLeft} from '../Profile';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {colors} from 'react-native-elements';

const IceBreakQ = icebreaker => {
  return (
    <>
      {/* Ice Breaker Question */}
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
            {icebreaker?.icebreaker?.[0]?.question}
          </CustomText>
          <View style={{paddingVertical: verticalScale(5)}}>
            <CustomText
              fontSize={11}
              color={colors.grey1}
              marginLeft={10}
              fontFamily={'ProximaNova-Regular'}>
              {icebreaker?.icebreaker?.[0]?.answer}
            </CustomText>
          </View>
        </View>
      </PaddingLeft>
      <Spacer height={20} />
    </>
  );
};

export default IceBreakQ;
