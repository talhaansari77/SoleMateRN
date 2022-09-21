import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import icons from "../../../../../assets/icons";
import { Spacer } from "../../../../components/Spacer";

const GenderContainer = ({ index, txt, isSelect, setIsSelect,  setGender,error,
  setSubmitError,
  submitError,
}) => {

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {

        setIsSelect(index);
        setGender(txt)
        setSubmitError({ ...submitError, genderError: "" });



      }}
      style={[
        styles.mainContainer,
        {
          borderColor: isSelect == index ? colors.darkOrange : colors.lightBlack,
          borderRadius: 50,
          // borderColor: color,
          borderWidth: 1,
          flexDirection: "row",
        },
      ]}
    >
      <View 
      style={{ flex: 7, alignItems: "center" }}>
        <CustomText
          label={txt}
          color={isSelect == index ? colors.darkOrange : colors.black}
          fontFamily="regular"
          fontSize={verticalScale(10)}
          marginLeft={scale(30)}
        />
      </View>
      {isSelect == index ? (
        <View style={{ flex: 3, alignItems: "center" }}>
          <Image
            source={icons.tickPurple}
            style={{ height: verticalScale(20), width: scale(20) }}
            resizeMode={"contain"}
          />
        </View>
      ) : (
        <Spacer width={35}/>
      )}



      
    </TouchableOpacity>
  );
};

export default GenderContainer;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "130@s",
    height: "35@vs",
    alignItems: "center",
    justifyContent: "center",
  },
});
