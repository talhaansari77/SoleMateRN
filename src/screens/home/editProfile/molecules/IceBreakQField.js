import {
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import {moderateScale} from 'react-native-size-matters';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {questionSuggestions} from '../../../../utils/Data';

const IceBreakQField = ({
  iceBreakerQ,
  setQuestionIndex,
  setQuestionFromList,
  visible,
  setVisible,
  ...props
}) => {
  const [iconIndex, setIndex] = useState(-1);
  const ModelContent = () => (
    <View style={{flex: 1, padding: moderateScale(20)}}>
      <CustomText
        label={'Ice Breaker Questions'}
        color={colors.primary}
        fontFamily={'ProximaNova-Regular'}
        fontSize={11}
      />

      <Spacer height={15} />

      <ScrollView>
        {questionSuggestions?.map((q, index) => (
          <View key={index}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={
                q.question
                  ? () => {
                    console.log("QuestionData",q.question)
                      setQuestionFromList(q.question);
                      setIndex(index);
                      setVisible(false);
                      setTimeout(() => {
                        props.setModalVisible(true);
                      }, 1000);
                    }
                  : () => {}
              }
              style={{
                borderWidth: 1,
                padding: moderateScale(15),
                borderRadius: moderateScale(10),
                borderStyle: q.question ? 'solid' : 'dashed',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: q.question ? colors.black : colors.primary,
              }}>
              <View
                style={{
                  width: '88%',
                }}>
                <CustomText
                  fontSize={12}
                  label={q.question ? q.question : q.button}
                  color={q.question ? colors.black : colors.primary}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: q.question ? colors.white : colors.primary,
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  justifyContent: 'center',
                  shadowColor: '#ced4da',
                  alignItems: 'center',
                  elevation: 5,
                  shadowOpacity: 5,
                  shadowOffset: {width: 1, height: 1},
                }}
                onPress={
                  q.button
                    ? () => {
                        setVisible(false);
                        setTimeout(() => {}, 1000);
                        props.setModalVisible(true);
                      }
                    : () => {}
                }>
                {q.question ? (
                  iconIndex === index ? (
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: colors.gray,
                        backgroundColor: colors.googleGreen,
                      }}></View>
                  ) : (
                    <></>
                  )
                ) : (
                  <FontAwesomeIcon name="plus" color={colors.white} />
                )}
              </TouchableOpacity>
            </TouchableOpacity>
            <Spacer height={10} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
  //Main Function
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
                }}>
                <View
                  style={{
                    width: '80%',
                  }}>
                  <CustomText
                    fontSize={12}
                    label={q.question ? q.question : q.placeholder}
                    color={q.question ? colors.black : colors.primary}
                  />
                  {q.question ? (
                    <CustomText color={colors.gray} label={q.answer} />
                  ) : (
                    <></>
                  )}
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: q.question ? colors.white : colors.primary,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    shadowColor: Platform.OS === 'ios' ? '#ced4da' : '#000000',
                    alignItems: 'center',
                    elevation: 10,
                    shadowOpacity: 5,
                    shadowOffset: {width: 1, height: 1},
                  }}
                  onPress={() => {
                    // props.setModalVisible(true);
                    setVisible(!visible);
                    setQuestionIndex(index + 1);
                  }}>
                  {q.question ? (
                    <FontAwesome5 name="pen" color={colors.black} />
                  ) : (
                    <FontAwesomeIcon name="plus" color={colors.white} />
                  )}
                </TouchableOpacity>
              </TouchableOpacity>
              <Spacer height={10} />
            </View>
          ))}
        </View>
      </View>
      {/* questionsList */}
      <Modal visible={visible} onRequestClose={() => setVisible(!visible)}>
        <ModelContent modal={true} />
      </Modal>
    </>
  );
};

export default IceBreakQField;
