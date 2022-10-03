import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomModal from '../../../../components/CustomModal'
import { verticalScale,moderateScale } from 'react-native-size-matters'
import { reactionData } from '../../../../utils/Data'

const AddReaction = ({reactionModal,setReactionModal,saveReaction}) => {
  return (
    <CustomModal
    isVisible={reactionModal}
    width={'90%'}
    height={verticalScale(45)}
    // mainPadding={moderateScale(10)}
    borderRadius={moderateScale(100)}
    // marginBottom={verticalScale(250)}
    onDisable={() => {
        setReactionModal(false);
    }}

    //   height={verticalScale(180)}
  >
      <View style={{width:"100%",height:"100%",alignItems:"center",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10}}>
      {
          reactionData.map(item=>{
              return(
                  <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={()=>{
                      setReactionModal(false)

                    saveReaction(item)

                  }}
                   >
                      <Text>{item}</Text>

                  </TouchableOpacity>
              )

          })

      }

      </View>
     

    
  
  </CustomModal>
  
  )
}

export default AddReaction

const styles = StyleSheet.create({})