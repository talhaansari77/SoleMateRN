import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";

import React from "react";

const AddMoreContainer = ({ onAddMore }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.mainContainer}
      onPress={onAddMore}
    >
      <CustomText color={colors.primary} fontFamily={"bold"}>
        Add More
      </CustomText>
      <Spacer width={5} />
      <View style={styles.addContainer}>
        <FontAwesomeIcon name="plus" color={colors.white} />
      </View>
    </TouchableOpacity>
  );
};

export default AddMoreContainer;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(15),
    borderStyle: "dashed",
    borderColor: colors.primary,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: scale(5),
  },
  addContainer: {
    backgroundColor: colors.primary,
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
