import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../../../components/CustomText';
import { colors } from '../../../../utils/Colors';
import { Spacer } from '../../../../components/Spacer';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TwoInputModal from './TwoInputModal';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomButton from '../../../../components/CustomButton';

const IceBreakQField = ({ iceBreakerQ, setQuestionIndex, ...props }) => {




  return (
    <>
      <View>
        <CustomText
          label={'Ice Breaker Question'}
          color={colors.primary}
          fontFamily={'ProximaNova-Regular'}
          fontSize={11}
        />

        <Spacer height={15} />

        <View>
          {iceBreakerQ?.map((q, index) => (
            <View key={index}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  borderWidth: 1,
                  padding: moderateScale(15),
                  borderRadius: moderateScale(10),
                  borderStyle: q.question ? 'solid' : 'dashed',                
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderColor: q.question ? colors.black : colors.primary,
                
                  
                }}
              >
                <View style={{
                  width: '80%'
                }}>
                  <CustomText
                    fontSize={12}
                    label={q.question ? q.question : q.placeholder}
                    color={q.question ? colors.black : colors.primary} />
                  {/* The last time I cried was */}
                  {q.question ? <CustomText color={colors.gray} label={q.answer} /> : <></>}

                  {/* The Last Time I Cried My Heat Out! */}
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: q.question ? colors.white : colors.primary,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5
                  }}
                  onPress={() => {
                    props.setModalVisible(true)
                    setQuestionIndex(index+1)
                  }}>
                  {q.question ? <FontAwesome5 name="pen" color={colors.black} /> :
                    <FontAwesomeIcon name="plus" color={colors.white} />}

                </TouchableOpacity>
              </TouchableOpacity>
              <Spacer height={10} />


            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default IceBreakQField;
