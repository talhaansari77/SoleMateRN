import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const ActionBtn = ({actions}) => {
  return (
    <>
      {/* Actions */}
      {actions ? (
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: verticalScale(8),
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 2,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.primary,
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo
              name="cross"
              size={moderateScale(20)}
              color={colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.darkOrange,
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="heart"
              size={moderateScale(15)}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ActionBtn;
