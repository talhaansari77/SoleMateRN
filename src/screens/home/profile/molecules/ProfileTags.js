import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";

const ProfileTags = ({title,data}) => {
  console.log("cjbdjcd",data)
  return (
    <>
      {/* Personality */}
      <Spacer height={10} />
      <View
        style={{
          width: "100%",
          padding: moderateScale(25),
        //   paddingRight: scale(5),
        }}
      >
        <CustomText fontSize={14} color={colors.primary} fontFamily={"regular"}>
          {title}
        </CustomText>
        <Spacer height={10} />
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {
            data?.map((item,index)=>{

              return(
                <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                style={{
                  paddingVertical: verticalScale(6),
                  paddingHorizontal: scale(10),
                  backgroundColor: colors.primary,
                  borderRadius: moderateScale(20),
                  margin: moderateScale(5),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText color={colors.white}>{item}</CustomText>
              </TouchableOpacity>
                

              )

            })
          }
          {/* {tagsList.map((person) => (
            return(

              <TouchableOpacity
              activeOpacity={0.9}
              style={{
                paddingVertical: verticalScale(6),
                paddingHorizontal: scale(10),
                backgroundColor: colors.primary,
                borderRadius: moderateScale(20),
                margin: moderateScale(5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomText color={colors.white}>Gamer</CustomText>
            </TouchableOpacity>

            )
          
          ))} */}
        </View>
      </View>
    </>
  );
};

export default ProfileTags;
