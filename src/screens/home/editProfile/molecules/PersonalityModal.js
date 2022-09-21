import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomModal from "../../../../components/CustomModal";
import commonStyles from "../../../../utils/CommonStyles";
import { colors } from "../../../../utils/Colors";
import CustomTextInput from "../../../../components/CustomTextInput";
import CustomButton from "../../../../components/CustomButton";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import { verticalScale, moderateScale, scale } from "react-native-size-matters";
const PersonalityModal = ({
  modalVisible,
  setModelVisible,
  value,
  setValue,
  onSaveData,
  error,
  onChange
}) => {
  return (
    <CustomModal
      transparent={true}
      isVisible={modalVisible}
      onDisable={() => {
        setModelVisible(false);
        setValue("")
      }}
      height={verticalScale(250)}
      width={moderateScale(350)}
      borderRadius={moderateScale(10)}
    >
      <View style={styles.centeredView}>
        <CustomText
          label={"Add Personality"}
          color={colors.darkOrange}
          fontSize={13}
          fontFamily={"medium"}
          // marginTop={verticalScale(5)}
          marginBottom={verticalScale(10)}
        />

        <CustomTextInput
          height={50}
          borderRadius={scale(10)}
          value={value}
          onChangeText={onChange}
          placeholder="Personality"
          error={error}
        />

        <Spacer height={verticalScale(30)} />

        <CustomButton
          onPress={onSaveData}
          title="Save"
          borderRadius={scale(10)}
        />

        <Spacer height={verticalScale(10)} />

        <CustomButton
          onPress={() => setModelVisible(false)}
          title="Cancel"
          borderRadius={scale(10)}
          color={colors.black}
          backgroundColor={colors.white}
          borderColor={colors.black}
          borderWidth={0.5}
        />
      </View>
    </CustomModal>
  );
};

export default PersonalityModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    padding: 20,

    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "90%",
    height: "35%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
