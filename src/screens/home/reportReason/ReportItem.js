import {View,TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton';
import {colors} from '../../../utils/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';

const ReportItem = ({name, setCount, count, index, hideColor,setReason}) => {
  return (
    <TouchableOpacity style={[styles.mainContainer,{

      borderColor:count == index ? colors.darkOrange : colors.black

      
    }]}
    activeOpacity={0.6}
    onPress={() => {
      setCount(index);
      setReason(name)
      
      // hideColor(true)
    }}
    >

<CustomText

            fontFamily={"ProximaNova-Regular"}
            fontSize={12}
            label={name}
            marginLeft={10}
            color={count == index ? colors.darkOrange : colors.black}
          />

      {/* <CustomButton
        marginTop={12}
        backgroundColor={'none'}
        fontFamily={'ProximaNova-Regular'}
        height={45}
        fontSize={14}
        title={name}
        borderWidth={1.1}
        color={count == index ? colors.darkOrange : colors.black}
        borderColor={count == index ? colors.darkOrange : colors.black}
        borderRadius={15}
        alignItems={'flex-start'}
        paddingHorizontal={15}
        onPress={() => {
          setCount(index);
          // hideColor(true)
        }}
      /> */}
    </TouchableOpacity>
  );
};
const styles=ScaledSheet.create({
  mainContainer:{
    height:"39@vs",
    width:"100%",
    borderRadius:15,
    borderWidth:1.2,
    marginTop:"10@vs",
    justifyContent:"center"
    // alignItems:"center"

  }



})
export default ReportItem;
