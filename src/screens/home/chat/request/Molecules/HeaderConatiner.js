import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText'
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters'
import { colors } from '../../../../../utils/Colors'

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HeaderConatiner = ({label,back,setting}) => {
  return (
    <SafeAreaView style={[styles.mainContainer,{
      justifyContent:back && setting? "space-between":"center",
      paddingHorizontal:back && setting?scale(10):0



    }]}>
      {back?(
         <TouchableOpacity
           activeOpacity={0.6}
           onPress={back}
         >
         <MaterialIcons name="arrow-back" size={24} color="black" />
           
   
         </TouchableOpacity>

      ):<></>
    }

    
     
          <CustomText
            label={label}
            fontFamily="bold"
            fontSize={verticalScale(15)}
            // marginLeft={verticalScale(5)}
          />
          {setting?(
              <TouchableOpacity
              // activeOpacity={0.6}
              onPress={setting}
              >
              <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
    
    
              </TouchableOpacity>

          ):<>
          </>
        }
        
    </SafeAreaView>
  )
}

export default HeaderConatiner

const styles = ScaledSheet.create({
    mainContainer:{

        shadowColor: colors.gray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 3,
        elevation: 5,
        flexDirection:"row",
        backgroundColor:colors.white,
        height:"35@vs",
        width:"100%",
        alignItems:"center",
        width:"100%",
    }


})