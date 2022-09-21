import { View, Text } from "react-native";
import React from "react";
import { Spacer } from "../../../../components/Spacer";
import { PaddingLeft } from "../Profile";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/Colors";
import CustomText from "../../../../components/CustomText";

const AboutMeText = ({aboutMe}) => {
  return (
    <>
      {/* About Me */}
      <Spacer height={30} />
      <PaddingLeft>
        <View
          style={{
            paddingRight: scale(5),
          }}
        >
          <CustomText fontSize={13} color={colors.primary} fontFamily={"regular"}>
            About me
          </CustomText>
          <View style={{ paddingVertical: verticalScale(5) }}>
            <CustomText fontSize={13} color={colors.black} fontFamily={"bold"}>
             {aboutMe}
            </CustomText>
          </View>
        </View>
      </PaddingLeft>
      <Spacer height={20} />
    </>
  );
};

export default AboutMeText;
