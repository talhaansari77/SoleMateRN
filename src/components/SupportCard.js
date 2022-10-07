import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react'
import { colors } from '../utils/Colors';

const SupportCard =props => {
    const {title, left, bottom, onPress, style} = props;
  return (
    <TouchableOpacity
    onPress={onPress}
    // style={[styles.wrapper, style]}
    activeOpacity={0.7}>
    <View style={styles.container}>
      {/* <ResponsiveText style={styles.title}>{title}</ResponsiveText> */}
      <Text>{title}</Text>
  
      {left}
    </View>
    {bottom}
  </TouchableOpacity>
  )
}

export default SupportCard

const styles = {
    wrapper: {
      backgroundColor: 'white',
  
      marginBottom: 15,
      borderRadius: 14,
      paddingHorizontal: 5,
    },
    container: {
      height:15,
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: 'white',
      borderRadius: 14,
      // elevation: 2,
      justifyContent: 'space-between',
    },
    title: {
      letterSpacing: 1,
      fontSize: 4.5,
      color: '#77838F',
    },
    value: {
      letterSpacing: 1,
      fontSize: 4.5,
      color: colors.black,
    },
  };