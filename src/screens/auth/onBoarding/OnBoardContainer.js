import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import welcomeImages from '../../../../assets/welocme_images'
import { ScaledSheet } from 'react-native-size-matters'

const OnBoardContainer = () => {
  return (
    <View>
        <View style={styles.imgContainer}>

            <Image source={welcomeImages.friends}
            resizeMode="cover"
            
        
            style={styles.img}
            />

        </View>
        <View>

            
        </View>
    </View>
  )
}

export default OnBoardContainer

const styles = ScaledSheet.create({
    imgContainer:{

        width:"100%",
        height:"74%",
        // marginLeft:20
        // paddingLeft:20
        // backgroundColor:"red"

    },
    img:{
        width:"100%",
        height:"100%"

    }

})