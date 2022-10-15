import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import { colors } from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import icons from '../../../../../assets/icons';
import { Spacer } from '../../../../components/Spacer';


const InfoTag = ({label,icon,status,iconHeight,iconWidth}) => {
  // let iconName=icons.location
  return (
    <View
      style={{
        // alignItems: "center",        
        width: Dimensions.get('window').width / 2.5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image 
          source={icon}
          resizeMode={'contain'}
          style={{width: iconWidth || 15, height: iconHeight || 15}}
        />
        <CustomText color={colors.primary} marginLeft={3}>
          {label}
        </CustomText>
      </View>
      <CustomText marginTop={5} marginLeft={15}>
        {label==="Language"?status.map(l => l + ', '):status}
      </CustomText> 
      <Spacer height={20} />
    </View>
  );
};

export default InfoTag;
