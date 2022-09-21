import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React from "react";
import commonStyles from "../../../../../utils/CommonStyles";
import { moderateScale, ScaledSheet,verticalScale } from "react-native-size-matters";
import profileImages from "../../../../../../assets/Profile_images";
import CustomText from "../../../../../components/CustomText";
import { colors } from "../../../../../utils/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const RequestContainer = ({name,age,qualification,location,onChating}) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.6}
    onPress={onChating}
    style={styles.mainConatiner}>
        <View style={{flexDirection:"row"}}>

      <View style={styles.imgContainer}>
        <Image
          resizeMode="cover"
          style={commonStyles.img}
          source={profileImages.man}
        />
      </View>
      <View style={styles.detailContainer}>
      <CustomText
            label={name}
            fontFamily="bold"
            fontSize={verticalScale(10)}
            // marginLeft={verticalScale(5)}
          />
          <View style={styles.subDetail}>
          <CustomText
            label={age}
            fontFamily="regular"
            color={colors.halfGray}
            fontSize={verticalScale(10)}
            // marginLeft={verticalScale(5)}
          />
          <View style={styles.line}></View>
          <CustomText
            label={location}
            fontFamily="regular"
            color={colors.halfGray}
            fontSize={verticalScale(10)}
            // marginLeft={verticalScale(5)}
          />
        <View style={styles.line}></View>
        <CustomText
            label={qualification}
            fontFamily="regular"
            color={colors.halfGray}
            fontSize={verticalScale(10)}
            // marginLeft={verticalScale(5)}
          />


          </View>
          

      </View>
      </View>
      <View style={{alignItems:"center",paddingTop:verticalScale(10)}}>
      <Ionicons name="play-circle" size={moderateScale(25)} color={colors.primary} />
      </View>

    </TouchableOpacity>
  );
};

export default RequestContainer;

const styles = ScaledSheet.create({
  mainConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding:"10@s",
    paddingVertical:"20@vs",
  },
  imgContainer: {
    width: "45@vs",
    height: "45@vs",
    borderRadius: "45@s",
    overflow: "hidden",
  },
  detailContainer:{
    justifyContent:"space-between",
    padding:"2@s",
    paddingLeft:"15@s"

  },
  subDetail:{
      flexDirection:"row",
      alignItems:"center"


  },
  line:{
      width:2,
      height:15,
      backgroundColor:colors.halfGray,
      marginHorizontal:"5@s"

  }


});
