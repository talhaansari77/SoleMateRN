import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../../../../components/CustomTextInput";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/CustomButton";
import { verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/Colors";

const TwoInputModal = ({
  setModalVisible,
  modalVisible,
  addIceBreakerQ,
  setAddIceBreakerQ,
  iceBreakerQ,
  iceBreakerA,
  addIceBreakerA,
  setAddIceBreakerA,
}) => {
  const onSaveIceBreakerQ = () => {

    let data1 = {
      iceBreakerA: addIceBreakerA,
    };
    iceBreakerA.push(data1);

    let data = {
      iceBreakerQ: addIceBreakerQ,
    };
    iceBreakerQ.push(data);

    
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomTextInput
              withLabel={"Ice Breaker Question"}
              height={52}
              placeholder="Question"
              value={addIceBreakerQ}
              onChangeText={(add) => setAddIceBreakerQ(add)}
              onPress={() => {
                // {addItems}
                console.log(addItems, "addItems");
              }}
            />

            <Spacer height={verticalScale(15)} />

            <CustomTextInput
              height={52}
              placeholder="Answer"
              value={addIceBreakerA}
              onChangeText={(add) => setAddIceBreakerA(add)}
            />

            <Spacer height={verticalScale(20)} />

            <CustomButton onPress={() => onSaveIceBreakerQ()} title="Save" />

            <Spacer height={verticalScale(10)} />

            <CustomButton
              onPress={() => setModalVisible(!modalVisible)}
              title="Cancel"
              color={colors.black}
              backgroundColor={colors.white}
              borderColor={colors.black}
              borderWidth={0.5}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: "90%",
    height: "45%",
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

export default TwoInputModal;
