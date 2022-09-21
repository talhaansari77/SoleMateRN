import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const InputField = ({ label, arrow = true, onChangeText, value, error }) => {
  return (
    <>
      <View>
        <CustomText
          color={colors.primary}
          fontFamily={"medium"}
          fontSize={11}
        >
          {label}
        </CustomText>
        {/* <Spacer height={10} /> */}

        <View
          style={{
            borderBottomWidth: 1,
            paddingVertical: verticalScale(7),
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={{ width: "90%" }}
          />
          {arrow ? (
            <TouchableOpacity activeOpacity={0.6}>
              <FontAwesomeIcon name="chevron-right" />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        {error ? (
          <CustomText
            color={colors.red}
            fontFamily={"medium"}
            fontSize={11}
            marginTop={4}
          >
            * {error}
          </CustomText>
        ) : null}
      </View>
    </>
  );
};

export default InputField;
