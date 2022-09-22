import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
// import { Ionicons } from "@expo/vector-icons";
import {
  ScaledSheet,
  verticalScale,
  scale,
  moderateScale,
} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

// import { ActivityIndicator } from "react-native-paper";
import {colors} from '../utils/Colors';
function CustomGradientButton({
  loading,
  title,
  onPress,
  icon,
  color,
  width,
  height,
  borderColor,
  borderRadius,
  marginTop,
  alignItems,
  justifyContent,
  borderWidth,
  backgroundColor,
  fontFamily,
  marginBottom,
  marginHorizontal,
  opacity,
  fontSize,
  alignSelf,
  paddingHorizontal,
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.6}
      style={[
        {
          //       backgroundColor: backgroundColor || <LinearGradient
          //       colors={["#8E59E2", "#f3f3f3"]}
          //   ></LinearGradient>,
          // backgroundColor: <LinearGradient colors={["#8E59E2", "#f3f3f3"]} />,
          width: width || '100%',
          height: height || verticalScale(40),
          borderColor: borderColor,
          borderRadius: borderRadius || 8,
          borderWidth: borderWidth,
          opacity: opacity,
          alignItems: alignItems || 'center',
          alignSelf: alignSelf || 'center',
          justifyContent: justifyContent || 'center',
          marginTop,
          marginBottom: marginBottom,
          marginHorizontal: marginHorizontal,
          paddingHorizontal: paddingHorizontal,
        },
      ]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.white} size={moderateScale(26)} />
      ) : (
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <LinearGradient
              colors={['#8E59E2', '#C9A9FD']}
              style={{
                height: '100%',
                alignItems: 'center',
                borderRadius: borderRadius || 10,
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  {
                    color: color || colors.white,
                    fontSize: fontSize || verticalScale(15),
                    fontFamily: fontFamily || 'ProximaNova-Bold',
                    alignSelf: alignSelf || 'center',
                    // marginTop: marginTop
                    // textAlign: textAlign
                  },
                ]}>
                {title}
              </Text>
            </LinearGradient>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default CustomGradientButton;
