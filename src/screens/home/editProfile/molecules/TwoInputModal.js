import {View, Modal, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomTextInput from '../../../../components/CustomTextInput';
import {Spacer} from '../../../../components/Spacer';
import CustomButton from '../../../../components/CustomButton';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import Toast from 'react-native-simple-toast';
import { useIsFocused } from '@react-navigation/native'; 

const TwoInputModal = ({
  setModalVisible,
  modalVisible,
  iceBreakerQ,
  setIceBreakerQ,
  questionIndex,
  questionFromList,
  visible,
  setVisible,
  

}) => {
  console.log("ChangeQuestion",questionFromList)
  const isFocused = useIsFocused();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const onSaveIceBreakerQ = () => {
    const newQuestionList = iceBreakerQ.filter(q => {
      if (q.id == questionIndex) {
        q.id = questionIndex;
        q.question = question;
        q.answer = answer;
        q.placeholder = 'What ice breaker question would you like to answer';
        return q;
      } else {
        return q;
      }
    });
    // console.log("newQuestionList",newQuestionList)

    if (!question) {
      Toast.show('Question is required');
    } else if (!answer) {
      Toast.show('answer is  required');
    } else {
      console.log('newQuestion', newQuestionList);
      setIceBreakerQ(newQuestionList);

      setAnswer('');
      setQuestion('');  

      setModalVisible(!modalVisible);
      setVisible(false);  
    }
  };
 
useEffect(() => { 
  setQuestion(questionFromList)
}, [questionFromList])


  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomTextInput
              withLabel={'Ice Breaker Question'}
              height={52}
              placeholder="Question"
              value={question}
              onChangeText={add => setQuestion(add)}
              onPress={() => {
                console.log(addItems, 'addItems');
              }}
            />

            <Spacer height={verticalScale(15)} />

            <CustomTextInput
              height={52}
              placeholder="Answer"
              value={answer}
              onChangeText={add => setAnswer(add)}
            />

            <Spacer height={verticalScale(20)} />

            <CustomButton onPress={() => onSaveIceBreakerQ()} title="Save" />

            <Spacer height={verticalScale(10)} />

            <CustomButton
              onPress={() => {
                setModalVisible(!modalVisible)
                setQuestion("")
              }
              }
              title="Cancel"
              color={colors.black}
              backgroundColor={colors.white}
              borderColor={colors.black}
              borderWidth={0.5}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width: '90%',
    height: '40%',
    marginTop:"40%",
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default TwoInputModal;
