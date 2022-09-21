import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { colors } from '../../../utils/Colors'
import CustomText from '../../../components/CustomText'
import { verticalScale } from 'react-native-size-matters'
import commonStyles from '../../../utils/CommonStyles'
import profileImages from '../../../../assets/Profile_images'
const SignupWithCon = () => {

 
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.childContainer}>
        <CustomText
            label="FACEBOOK"
            fontFamily="bold"
            color={colors.facebookBlue}
            fontSize={verticalScale(12)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.childContainer}>
          <Image style={commonStyles.img} resizeMode="cover" source={profileImages.google}/>

          <View style={{position:"absolute"}}>
             <CustomText
            label="GOOGEL"
            fontFamily="bold"
            color={colors.googleGreen}
            fontSize={verticalScale(12)}
          />
          </View>
       
        </TouchableOpacity>
    </View>
  )
}
export default SignupWithCon
const styles = ScaledSheet.create({
    mainContainer:{
        width:"100%",
        height:"55@vs",
        backgroundColor:colors.white,
        borderRadius:"10@s",
        borderWidth:1.2,
        borderColor:colors.lightGray,
        flexDirection:"row",
        shadowColor: colors.lightGray,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 5,
        

    },
    childContainer:{
        width:"50%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",

    }

})