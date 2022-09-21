import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import { moderateScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import CustomImage from "../../../components/CustomImage";
import profileImages from "../../../../assets/Profile_images";

const Reported = () => {
  return (
    <Container>
      <SafeAreaView>
        <View>
          <CustomText
            marginTop={35}
            fontFamily={"bold"}
            fontSize={20}
            textAlign={"center"}
            alignSelf={"center"}
            color={colors.darkOrange}
          >
            We sent Samer the reason you end the conversation!
          </CustomText>
        </View>
        <View>
          <CustomImage
            height={290}
            width={260}
            alignSelf={"center"}
            src={profileImages.reportImage}
          />
        </View>

        <CustomText
            marginTop={30}
            fontFamily={"bold"}
            fontSize={20}
            textAlign={"center"}
            alignSelf={"center"}
            color={colors.darkOrange}
          >
           Thank you for your honest!
          </CustomText>
      </SafeAreaView>
    </Container>
  );
};

const Container = styled(View, {
  width: "100%",
  padding: moderateScale(40),
  flex: 1,
});

export default Reported;
