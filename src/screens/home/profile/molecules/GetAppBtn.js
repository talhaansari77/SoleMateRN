import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../../../utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import CustomButton from "../../../../components/CustomButton";
import CustomGradientButton from "../../../../components/CustomGradientButton";

const GetAppBtn = ({ getApp }) => {
  return (
    <>
      {/* Get The App */}
      {getApp ? (
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: verticalScale(10),
            paddingHorizontal: scale(35),
            flexDirection: "row",
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 2,
          }}
        >
          
         
          <CustomGradientButton
            title={"Get the Solemate App"}
            fontFamily={"extra"}
            borderRadius={100}
          />
          
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default GetAppBtn;
