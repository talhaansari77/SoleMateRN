import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";
// import colors from '../../Utils/colors';
import { colors } from "../utils/Colors";
function CustomText(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      disabled={!props.onPress}
      style={[
        props.container,
        {
          width: props.width,
        },
      ]}
    >
      <Text
        style={[
          {
            fontSize: verticalScale(props.fontSize || 10),
            color: props.color || colors.black,
            fontSize: verticalScale(props.fontSize || 10),
            marginTop: verticalScale(props.marginTop || 0),
            marginBottom: verticalScale(props.marginBottom || 0),
            margin: moderateScale(props.margin || 0),
            marginLeft: scale(props.marginLeft || 0),
            marginRight: scale(props.marginRight || 0),
            marginBottom: scale(props.marginBottom || 0),
            alignSelf: props.alignSelf || "flex-start",
            fontWeight: props.fontWeight,
            fontStyle: props.fontStyle,
            textAlign: props.textAlign,
            fontFamily: props.fontFamily,
            numberOfLines: props.numberOfLines,
            ellipsizeMode: props.ellipsizeMode,
            marginVertical: verticalScale(props.marginVertical || 0),
            textAlign: props.textAlign,
            textDecorationLine: props.textDecorationLine,
            textDecorationColor: props.textDecorationColor,
            // text-decoration-color: "red";
            textDecorationLine:props.textDecorationLine, 
          },
          props.textStyle,
        ]}
        numberOfLines={props.numberOfLines}
      >
        {props.label}
        {props.children}
        
      </Text>
    </TouchableOpacity>
  );
}

export default CustomText;
