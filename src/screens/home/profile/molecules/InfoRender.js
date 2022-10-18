import {View, Text} from 'react-native';
import React from 'react';
import InfoTag from './InfoTag';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {colors} from '../../../../utils/Colors';

const InfoRender = ({title, dataList, icons}) => {
  return (
    <View style={{paddingLeft: 20}}>
      <CustomText
        fontSize={14}
        color={colors.gray}
        fontFamily={'ProximaNova-Bold'}
        // marginBottom={verticalScale(20)}
      >
        {title}
      </CustomText>
      <Spacer height={10} />

      {title === 'Religiousness' ? (
        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {dataList?.map((info, index) =>
            info.hasDetail ? (
              <InfoTag
                label={info.label}
                status={info.status}
                icon={icons[index]}
              />
            ) : info.label === 'Religion' ? (
              <InfoTag
                label={info.label}
                status={info.status}
                icon={icons[index]}
              />
            ) : (
              <></>
            ),
          )}
        </View>
      ) : (
        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
          }}>
          {dataList?.map((info, index) =>
            info.status === 'No' ? (
              <></>
            ) : (
              <InfoTag
                label={info.label}
                status={info.status}
                icon={icons[index]}
              />
            ),
          )}
        </View>
      )}
    </View>
  );
};

export default InfoRender;
