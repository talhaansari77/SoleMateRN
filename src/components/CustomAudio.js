import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    PermissionsAndroid,
    Platform,
  } from 'react-native';import React from 'react'
  import * as Progress from 'react-native-progress';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import profileImages from '../../assets/Profile_images';
import CustomText from './CustomText';
import { colors } from '../utils/Colors';
import { verticalScale,scale } from 'react-native-size-matters';
import { Spacer } from './Spacer';

const CustomAudio = ({startPlay,message,playing}) => {

    console.log("mesaageAudio",message?.[0].playTime)
  return (

    <View
    style={{
        padding: 10,
        height: 80,
        width: '80%',
        borderRadius: 20,
        backgroundColor: colors.placeholder,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }}>
    {/* play icons */}
    <TouchableOpacity style={{
        flex: 1, padding: 10,
        alignItems: 'center',
    }}
     onPress={startPlay}>
        <FontAwesome5Icon name={playing ? 'pause' : 'play'} size={20} />
    </TouchableOpacity>

    {/* Progress.Bar */}
    <View style={{
        flex: 7, paddingHorizontal: 10,
        justifyContent: 'center',
        marginTop: verticalScale(10)
    }}>
        <Progress.Bar
            // progress={message?.[0].playTime ? (message?.[0]?.currentPositionSec / message?.[0]?.currentDurationSec) : (1)}
            height={3}
            color={colors.white}
            width={scale(155)}
        />
        <Spacer height={10} />
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: scale(2) }}>
            <CustomText label={message?.[0].recordTime ? message?.[0].recordTime : message?.[0].playTime} color={colors.white} />
            <CustomText label={'Oct-7'} color={colors.white} />
        </View>
    </View>
    {/* image */}
    <View style={{
        flex: 2, justifyContent: 'center',
        alignItems: 'center',
    }}>
        <View style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 25 }}>
            <Image source={profileImages.profile01} resizeMode="contain" />
        </View>
    </View>
</View>
   
  )
}

export default CustomAudio

const styles = StyleSheet.create({})