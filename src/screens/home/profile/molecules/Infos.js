import {View, Dimensions, Image} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';

const Infos = ({title, icon, label, name, icon1, label1, name1,icon1Height,icon1Width,icon2Width,icon2Height}) => {
  return (
    <>
      {/* BasicINFO */}
      <View
        style={{
          width: '100%',
          paddingLeft: 20,
        }}>
        <CustomText
          fontSize={14}
          color={colors.gray}
          fontFamily={'ProximaNova-Bold'}
          // marginBottom={verticalScale(20)}
        >
          {title}
        </CustomText>
        <Spacer height={10} />

        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              // alignItems: "center",
              width: Dimensions.get('window').width / 2.5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={icon}
                resizeMode={'contain'}
                style={{width:  icon1Width|| 15, height: icon1Height|| 15}}
              />
              <CustomText color={colors.primary} marginLeft={3}>
                {label}
              </CustomText>
            </View>
            <CustomText marginTop={5} marginLeft={15}>
              {name}
            </CustomText>
            <Spacer height={20} />
          </View>

          <View
            style={{
              width: Dimensions.get('window').width / 2.5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={icon1}
                style={{width:   icon2Width||15, height: icon2Height ||15}}
                resizeMode={'contain'}
              />
              <CustomText color={colors.primary} marginLeft={3}>
                {label1}
              </CustomText>
            </View>
            <CustomText marginTop={5} marginLeft={15}>
              {name1}
            </CustomText>
            <Spacer height={20} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Infos;
