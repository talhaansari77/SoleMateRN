import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Infos = ({title, icon,label,name,icon1,label1,name1}) => {
  return (
    <>
      {/* BasicINFO */}
      <View
        style={{
          width: "100%",
          padding: moderateScale(25),
          // paddingRight: scale(5),
        }}
      >
        <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
          {title}
        </CustomText>
        <Spacer height={10} />

        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
            <View
              style={{
                // alignItems: "center",
                width: Dimensions.get("window").width / 2.5,
              }}
            >
              <View style={{ flexDirection: "row",alignItems:"center" }}>
                <Image source={icon} resizeMode={'contain'}/>
                <CustomText color={colors.primary} marginLeft={3} >{label}</CustomText>
              </View>
              <CustomText marginTop={5} marginLeft={15}>
                {name}
              </CustomText>
              <Spacer height={20} />
            </View>

            <View
              style={{
                // alignItems: "center",
                width: Dimensions.get("window").width / 2.5,
              }}
            >
              <View style={{ flexDirection: "row",alignItems:"center" }}>
                <Image source={icon1} resizeMode={'contain'}/>
                <CustomText color={colors.primary} marginLeft={3} >{label1}</CustomText>
              </View>
              <CustomText marginTop={5} marginLeft={15}>
                {name1}
              </CustomText>
              <Spacer height={20} />
            </View>
        </View>
      </View>
    </>
  );
};

export default Infos;
