import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import { colors } from '../../../../utils/Colors';
import { Spacer } from '../../../../components/Spacer';
import { moderateScale, } from 'react-native-size-matters';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
                  {q.question ? <CustomText color={colors.gray} label={q.answer} /> : <></>}

                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: q.question ? colors.white : colors.primary,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    shadowColor:"#ced4da",
                    alignItems: 'center',
                    elevation: 5,
                    shadowOpacity:5,
                    shadowOffset: {width: 1, height: 1},


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
