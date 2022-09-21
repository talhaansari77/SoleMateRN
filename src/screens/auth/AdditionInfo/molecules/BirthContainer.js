import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import { verticalScale } from 'react-native-size-matters'
import { colors } from '../../../../utils/Colors'
import CustomTextInput from '../../../../components/CustomTextInput'

const BirthContainer = ({width}) => {
  return (
    <View >
   
        <CustomTextInput width={width}
        
         />

        </View>
          
  )
}

export default BirthContainer

const styles = StyleSheet.create({
    inputContainer:{
        marginRight:10

    }


})