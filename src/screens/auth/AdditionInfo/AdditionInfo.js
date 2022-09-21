import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import commonStyles from "../../../utils/CommonStyles";
import { colors } from "../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import CustomTextInput from "../../../components/CustomTextInput";
import BirthContainer from "./molecules/BirthContainer";
import GenderContainer from "./molecules/GenderContainer";
const AdditionInfo = () => {
  const birthData = [
    { id: 1, width: verticalScale(80) },
    { id: 2, width: verticalScale(80) },
    { id: 3, width: verticalScale(80) },
  ];

  const genderData=[
    { id: 1, txt:"Male" },
    { id: 2,  txt:"Female" },



  ]
  return (
    <View
      style={[
        commonStyles.commonMain,
        {
          padding: 25,
        },
      ]}
    >
      <Spacer height={verticalScale(25)} />

      <CustomTextInput withLabel="Enter your name" />
      <Spacer height={verticalScale(25)} />
      <CustomText
        label="Date of birth"
        color={colors.gray}
        fontFamily="regular"
        fontSize={verticalScale(10)}
        // marginTop={marginTop}
        marginBottom={verticalScale(10)}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {birthData.map((item) => {
          return <BirthContainer width={item.width} />;
        })}
      </View>
      <Spacer height={verticalScale(25)} />
      

      <CustomTextInput withLabel="Choose your country" />
      <Spacer height={verticalScale(30)} />


      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >

      {
        genderData.map((item,index)=>{
          return(
            <GenderContainer txt={item.txt} index={index}/>

            

          )

        })
      }
      </View>

    </View>
  );
};

export default AdditionInfo;

const styles = StyleSheet.create({});
