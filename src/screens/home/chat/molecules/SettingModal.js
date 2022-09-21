import { StyleSheet, Text, View } from 'react-native'
import CustomModal from '../../../../components/CustomModal'
import React from 'react'
import { verticalScale,moderateScale } from 'react-native-size-matters'

const SettingModal = ({settingModal,setSettingModal}) => {
  return (
    <CustomModal
    isVisible={settingModal}
    height={verticalScale(300)}
    marginBottom={verticalScale(250)}
    onDisable={() => {
      setSettingModal(false);

    
    }}
    //   height={verticalScale(180)}
  >
   
  </CustomModal>
  )
}

export default SettingModal

const styles = StyleSheet.create({})