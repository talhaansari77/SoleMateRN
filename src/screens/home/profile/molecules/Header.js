import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProfileNav from "./ProfileNav";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";
import { colors } from "../../../../utils/Colors";

const Header = ({navigation}) => {
  return (
    <>
      {/* Header */}
      <Spacer height={15} />
      <ProfileNav
        RightSide={() => (
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            activeOpacity={0.6}
            style={{ alignItems: "flex-end", width: "100%" }}
          >
            <CustomText
              fontSize={13}
              color={colors.black}
              fontFamily={"bold"}
              marginRight={20}
            >
              Edit Profile
            </CustomText>
          </TouchableOpacity>
        )}
      />
      <Spacer height={10} />
    </>
  );
};

export default Header;
