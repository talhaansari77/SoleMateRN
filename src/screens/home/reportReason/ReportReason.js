import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "../../../components/CustomText";
import styled from "react-native-styled-components";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../../../utils/Colors";
import CustomButton from "../../../components/CustomButton";
import ReportItem from "./ReportItem";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomGradientButton from "../../../components/CustomGradientButton";

const ReportReason = ({navigation}) => {
  const [count, setCount] = useState(-1);
  // const [off, setOff] = useState(false)
 
  useEffect(() => {

  }, [])

  const ReportListArray = [
    {
      id: 1,
      name: "no longer share the same interests",
    },
    {
      id: 2,
      name: "have different goals",
    },
    {
      id: 3,
      name: "someone does not want to change or grow",
    },
    {
      id: 4,
      name: "want to be alone",
    },
    {
      id: 5,
      name: "no longer feel connected",
    },
    {
      id: 6,
      name: "don’t share the same values",
    },
    {
      id: 7,
      name: "difficulty compromising",
    },
    {
      id: 8,
      name: "they’ve become different people",
    },
  ];
  return (
    <Container>
      <SafeAreaView>
        <View>
          <CustomText
            marginTop={35}
            fontFamily={"extra"}
            fontSize={20}
            textAlign={"center"}
            alignSelf={"center"}
            color={colors.darkOrange}
          >
            Let Samer know your reason for ending the conversation?
          </CustomText>
        </View>
        <View style={{ marginTop: 40,  }}>
          {ReportListArray.map((reportlist, index) => (
            <ReportItem
            name={reportlist.name}
            setCount={setCount}
            count={count}
            hideColor={() => setOff(false)}
            index={index}
            key={index}
            /> 
          ))}
        </View> 
        <View style={{marginTop: 10}}>
          <CustomTextInput
            borderColor= {colors.black}
            height = {45}
            placeholder = {"Write your own reason......"}
            paddingHorizontal = {8}
            // onPress={() => {
            //   setOff(true)
            // }}
           />
        </View>

        <View
          style={{
            shadowColor: "#171717",
            shadowOffset: { height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <CustomGradientButton
            marginTop={40}
            height={50}
            width={350}
            fontFamily={"extra"}
            fontSize={20}
            title={"Send"}
            // backgroundColor={colors.darkOrange}
            borderRadius={50}
            onPress={() => {
              navigation.navigate("Reported");
            }}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

const Container = styled(View, {
  width: "100%",
  padding: moderateScale(30),
  flex: 1,
});

export default ReportReason;
