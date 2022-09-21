import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomModal from '../../../../components/CustomModal'
import { verticalScale } from 'react-native-size-matters'

const TagsModal = ({isVisible}) => {
  return (
      <CustomModal
      isVisible={isVisible}
      height={verticalScale(200)}
      borderRadius={moderateScale(10)}
      >

      </CustomModal>
  
  )
}

export default TagsModal

const styles = StyleSheet.create({})