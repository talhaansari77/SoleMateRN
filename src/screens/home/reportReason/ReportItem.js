import {TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/Colors';
import {ScaledSheet} from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';

const ReportItem = ({name, setCount, count, index, setReason}) => {
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        {
          borderColor: count == index ? colors.darkOrange : colors.black,
        },
      ]}
      activeOpacity={0.6}
      onPress={() => {
        setCount(index);
        setReason(name);
      }}>
      <CustomText
        fontFamily={'ProximaNova-Regular'}
        fontSize={12}
        label={name}
        marginLeft={10}
        color={count == index ? colors.darkOrange : colors.black}
      />
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  mainContainer: {
    height: '39@vs',
    width: '100%',
    borderRadius: 15,
    borderWidth: 1.2,
    marginTop: '10@vs',
    justifyContent: 'center',
  },
});
export default ReportItem;
