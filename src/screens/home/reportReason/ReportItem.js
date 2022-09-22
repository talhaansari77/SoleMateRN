import {View} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton';
import {colors} from '../../../utils/Colors';

const ReportItem = ({name, setCount, count, index, hideColor}) => {
  return (
    <View>
      <CustomButton
        marginTop={12}
        backgroundColor={'none'}
        fontFamily={'ProximaNova-Regular'}
        height={45}
        fontSize={12}
        title={name}
        borderWidth={1.1}
        color={count == index ? colors.darkOrange : colors.black}
        borderColor={count == index ? colors.darkOrange : colors.black}
        borderRadius={15}
        alignItems={'left'}
        paddingHorizontal={15}
        onPress={() => {
          setCount(index);
          // hideColor(true)
        }}
      />
    </View>
  );
};

export default ReportItem;
