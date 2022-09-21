import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../utils/Colors";
import CustomText from "../../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";

const SettingItem = ({ name, icon, count, setCount, index, coming }) => {
  return (
    <TouchableOpacity
      activeOpacity={name == "Video settings" ? 1 : 0.6}
      onPress={() => {
        // setIsSelected(!selected);
        setCount(index);
      }}
    >
      <View
        style={{
          paddingBottom: 32,
          paddingHorizontal: scale(20),
          width: Dimensions.get("window").width,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                marginRight: scale(10),
                marginTop: verticalScale(3),
                height: verticalScale(14),
                width: scale(14),
                resizeMode: "contain",
                tintColor:
                  name == "Video settings"
                    ? colors.gray
                    : count == index
                    ? colors.primary
                    : colors.gray,
              }}
              source={icon}
            />
            <CustomText
              fontSize={13}
              color={
                name == "Video settings"
                  ? colors.gray
                  : count == index
                  ? colors.primary
                  : colors.black
              }
            >
              {name}
            </CustomText>
          </View>

          <View>
            <CustomText
              fontSize={12}
              marginTop={3}
              // alignSlef='flex-end'
              color={colors.gray}
            >
              {coming}
            </CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
