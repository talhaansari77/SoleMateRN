import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  moderateScale,
  verticalScale,
  ScaledSheet,
  scale,
} from "react-native-size-matters";
import React, { useState } from "react";
import * as ImagePicker from "react-native-image-picker";
import { colors } from "../../../../utils/Colors";
import Entypo from "react-native-vector-icons/Entypo";

const PhotoContainer = ({ setImages, images, index, width, height, item,label }) => {
  const [uri, setUri] = useState(item ? item.uri : "");
  console.log("===itrm", item);
  const onClickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        aspect: [4, 3],
        quality: 0.5,
      });
      if (!result.cancelled) {
        setUri(result.uri);
        const itemIndex = images.findIndex((item) => item.index === index);
        if (itemIndex === -1) {
          setImages([
            ...images,
            {
              index,
              uri: result.uri,
            },
          ]);
        } else {
          const temp = [...images];
          temp[itemIndex] = { ...temp[itemIndex], uri: result.uri };
          setImages(temp);
        }
      } else {
        setUri("");
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <TouchableOpacity
      onPress={onClickImage}
      style={[
        styles.imgContainer,
        {
          width: width || moderateScale(95),
          height: height || verticalScale(90),
        },
      ]}
      activeOpacity={0.6}
    >
      {uri ? (
        <Image source={{ uri }} style={styles.img} />
      ) : (
        <Entypo name="plus" size={moderateScale(20)} color={colors.black} />
        // <Image source={{ uri: images ?.[0]}} style={styles.img} />
      )}
      <Text
        style={{
          position: "absolute",
          zIndex: 1,
          color: colors.primary,
          fontFamily: "bold",
          fontSize:verticalScale(12),
          top: 0,
          padding: moderateScale(5),
          left: scale(10),
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PhotoContainer;

const styles = ScaledSheet.create({
  imgContainer: {
    borderRadius: "10@s",
    borderColor: colors.primary,
    borderWidth: 1.2,
    backgroundColor: colors.inputBorder,
    alignItems: "center",
    justifyContent: "center",

    // marginRight: '8@vs',
    marginTop: "15@vs",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  imageView: {
    width: "100%",
    flexDirection: "row",
    // marginBottom: '50@vs',
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
