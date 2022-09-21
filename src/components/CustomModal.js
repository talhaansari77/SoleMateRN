import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Platform
  } from "react-native";
  import React from "react";
  import Modal from "react-native-modal";
  import {
    moderateScale,
    scale,
    ScaledSheet,
    verticalScale,
  } from "react-native-size-matters";
  import { colors } from "../utils/Colors";
;
 

  

const CustomModal = ({isVisible,
    onDisable,
    mainMargin,
    marginTop,
    backgroundColor,
    height,
    width,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    marginBottom,
    children,
    paddingTop}) => {
  return (
    <Modal
    isVisible={isVisible}
    animationIn="slideInUp"
    animationOut="slideOutDown"
    transparent={true}
    onBackdropPress={onDisable}
    style={[
      {
        margin: mainMargin,
        marginTop: marginTop,
        marginBottom:marginBottom

      },
    ]}
  >
    <View style={styles.transparent}>
      <View
        style={[
          {
            backgroundColor: backgroundColor || colors.white,
            height: height || "100%",
            width: width || "100%",
            paddingTop: Platform.OS == "ios" ? paddingTop : null,
            borderRadius: borderRadius,
            borderTopLeftRadius: borderTopLeftRadius,
            borderTopRightRadius: borderTopRightRadius,

            // padding: props.mainPadding || verticalScale(5),
          },
        ]}
      >
     
        {children}
      </View>
    </View>
  </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    transparent: {
        // backgroundColor: "#000000aa",
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }


})