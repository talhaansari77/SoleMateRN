import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../../../../utils/Colors";
import commonStyles from "../../../../utils/CommonStyles";
import profileImages from "../../../../../assets/Profile_images";
import styled from "react-native-styled-components";
import { scale, verticalScale } from "react-native-size-matters";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const ProfilePicture = () => {
  const navigation=useNavigation();
  return (
    <Center>
      <ProfileImg activeOpacity={0.7} onPress={() => navigation.navigate("AuthStack",{screen:"EditProfile"})}>
        <Image source={profileImages.profile01} style={{ width: "100%" }} />
      </ProfileImg>
      <EditBtn activeOpacity={0.7}>
        <MaterialIcons name="edit" size={scale(15)} color={colors.primary} />
      </EditBtn>
    </Center>
  );
};

export default ProfilePicture;

const Center = styled(View, {
  ...commonStyles.center,
});
const ProfileImg = styled(TouchableOpacity, {
  height: verticalScale(120),
  width: scale(140),
  borderRadius: 20,
  overflow: "hidden",
  backgroundColor: colors.primary,
  elevation: 8,
});
const EditBtn = styled(TouchableOpacity, {
  justifyContent: "center",
  alignItems: "center",
  height: 30,
  width: 30,
  borderRadius: 15,
  backgroundColor: colors.white,
  elevation: 9,
  zIndex: 99,
  position: "absolute",
  bottom: -10,
  right: 80,
});
