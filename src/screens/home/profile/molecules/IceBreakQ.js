import { View, Text } from "react-native";
import React from "react";
import { Spacer } from "../../../../components/Spacer";
import { PaddingLeft } from "../Profile";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "react-native-elements";

const IceBreakQ = () => {
  return (
    <>
      {/* Ice Breaker Question */}
      <Spacer height={20} />
      <PaddingLeft>
        <View
          style={{
            paddingRight: scale(5),
          }}
        >
          <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
            Ice Breaker Question
          </CustomText>
          <View style={{ paddingVertical: verticalScale(5) }}>
            <CustomText fontSize={13} color={colors.black} fontFamily={"bold"}>
              Instagram is great when it comes to OOTDs—outfit of the day—and
              quick style inspirations,
            </CustomText>
          </View>
        </View>
      </PaddingLeft>
      <Spacer height={20} />
    </>
  );
};

export default IceBreakQ;
