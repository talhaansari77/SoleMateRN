import { View, Text, Image, Dimensions, ActivityIndicator } from "react-native";
import React from "react";
import profileImages from "../../../../../assets/Profile_images";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { moderateScale } from "react-native-size-matters";
import FastImage from "../../../../components/FastImage";

const ProfileImage = ({ src, loading,name,age,location,showName }) => {
  return (
    <>
      {/* ProfileImage */}
      <View
        style={{
          height: Dimensions.get("window").height / 2.3,
          justifyContent: loading ? "center" : null,
          alignItems: loading ? "center" : null,
        }}
      >
        {loading ? (
          <ActivityIndicator color={colors.primary} size="large" />
        ) : (
          <FastImage
            // resizeMode="cover"

            style={{ height: "100%", width: "100%" }}
            uniqueKey={Math.random()}
            source={src}
          />
        )}

        {/* <Image
          resizeMode="cover"
          source={src}
          style={{ height: "100%", width: "100%" }}
          {}
        /> */}
        {
          showName?(
            <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: moderateScale(25),
              width:"100%"
            }}
          >
            <View style={{flexDirection:"row",alignItems:"center",width:"70%",}}>
            <CustomText  label={name}  numberOfLineschildren={1}  children={name? " - ":null} color={colors.white} fontFamily={"bold"} fontSize={14}/>
            <CustomText  label={age}  color={colors.white} fontFamily={"bold"} fontSize={14}/>

            

            </View>
          
          
            <CustomText color={colors.white} numberOfLines={1} fontFamily={"bold"} fontSize={14}>
              {location}
            </CustomText>
          </View>

          ):<></>
        }
        
       
      </View>
    </>
  );
};

export default ProfileImage;
