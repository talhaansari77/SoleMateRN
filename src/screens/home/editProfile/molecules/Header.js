import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Spacer } from '../../../../components/Spacer'
import ProfileNav from '../../profile/molecules/ProfileNav'
import { colors } from '../../../../utils/Colors'
import CustomText from '../../../../components/CustomText'

const Header = () => {
  return (
    <>
    <Spacer height={15} />
      <ProfileNav
        title={"Edit Profile"}
        RightSide={() => (
          <TouchableOpacity activeOpacity={0.6}>
            <CustomText fontSize={13} color={colors.black} fontFamily={"bold"}>
              Cancel
            </CustomText>
          </TouchableOpacity>
        )}
        LeftSide={() => (
          <TouchableOpacity activeOpacity={0.6}>
            <CustomText fontSize={13} color={colors.black} fontFamily={"bold"}>
              Save
            </CustomText>
          </TouchableOpacity>
        )}
        Center={() => (
          <CustomText fontSize={16} color={colors.black} fontFamily={"bold"}>
            Edit Profile
          </CustomText>
        )}
      />
      <Spacer height={10} /></>
  )
}

export default Header