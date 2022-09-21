import { Image } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";

const CustomImage = ({ height, width, resizeMode, src }) => {
  return (
    <Image
      source={src}
      style={{
        height: verticalScale(height) || '100%',
        width: scale(width) || '100%',
        alignSelf: 'center',
        // tintColor: "red",
        resizeMode: resizeMode || "contain",
      }}
    />
  );
};

export default CustomImage;
