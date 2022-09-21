import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'
import { ScaledSheet, verticalScale } from 'react-native-size-matters'

const ConditionPassCon = ({txt1,txt2}) => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.childContainer}>
        <CustomText
        label={txt1}
        fontFamily="regular"
        color={colors.gray}
        fontSize={verticalScale(10)}
      />

        </View>
        <View style={{alignSelf:"center",width:"40%"}}>
        <CustomText
        label={txt2}
        alignSelf="flex-start"
        fontFamily="regular"
        color={colors.gray}
        fontSize={verticalScale(10)}
      />

        </View>
       
      
    </View>
  )
}

export default ConditionPassCon

const styles = ScaledSheet.create({
    mainContainer:{
        flexDirection:"row",
        width:"100%",
        marginVertical:"5@vs",
        justifyContent:"space-around",
        alignItems:"center",

    },
    childContainer:{
        alignSelf:"center",width:"40%",
        marginLeft:"30@s"
    }
})