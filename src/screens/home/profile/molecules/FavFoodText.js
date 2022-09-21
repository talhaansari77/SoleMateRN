import { View, Text } from "react-native";
import React from "react";
import { Spacer } from "../../../../components/Spacer";
import { PaddingLeft } from "../Profile";
import { colors } from "../../../../utils/Colors";
import CustomText from "../../../../components/CustomText";
import { moderateScale, scale } from "react-native-size-matters";

const FavFoodText = () => {
  return (
    <>
      {/* Fav Food */}
      <Spacer height={20} />
      <PaddingLeft>
        <View
          style={{
            paddingRight: scale(5),
          }}
        >
          <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
            My favorite food is
          </CustomText>
          <View style={{ padding: moderateScale(20) }}>
            <CustomText fontSize={13} color={colors.black} fontFamily={"bold"}>
              Instagram is great when it comes to OOTDs—outfit of the day—and
              quick style inspirations,
            </CustomText>
          </View>
        </View>
      </PaddingLeft>
      
    </>
  );
};

export default FavFoodText;
