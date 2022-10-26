import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../../../components/CustomText';
import styled from 'react-native-styled-components';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import CustomButton from '../../../components/CustomButton';
import ReportItem from './ReportItem';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomGradientButton from '../../../components/CustomGradientButton';
import {NotificationSender} from '../../../services/SendNotification';
import Toast from 'react-native-simple-toast';
import Loader from '../../../utils/Loader';
import {deleteRequest} from '../../../services/request';
import {deleteChat} from '../../../services/chats';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {deleteFile} from '../../../services/FirebaseAuth';

const ReportReason = ({navigation, route}) => {
  const [count, setCount] = useState(-1);
  const [reason, setReason] = useState('');
  const [writeReason, setWriteReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [reasonStatus, setReasonStatus] = useState(false);
  const [AuthAllChat, setAuthAllChat] = useState(route?.params?.userAllChat);

  // reason array

  console.log('AllChat', AuthAllChat);
  const ReportListArray = [
    {
      id: 1,
      name: 'no longer share the same interests',
    },
    {
      id: 2,
      name: 'have different goals',
    },
    {
      id: 3,
      name: 'someone does not want to change or grow',
    },
    {
      id: 4,
      name: 'want to be alone',
    },
    {
      id: 5,
      name: 'no longer feel connected',
    },
    {
      id: 6,
      name: 'don’t share the same values',
    },
    {
      id: 7,
      name: 'difficulty compromising',
    },
    {
      id: 8,
      name: 'they’ve become different people',
    },
  ];

  useEffect(() => {
    setAuthAllChat(route?.params?.userAllChat);
  }, []);

  // delete all chart user click the reason and send the  reason to this person via notification
  const onSendReason = async () => {
    try {
      setLoading(true);
      // send reason  via notification
      NotificationSender(
        route?.params?.otherUser?.fcmToken,
        writeReason ? writeReason : 'has decided to end the conversation',
        route?.params?.authUser?.firstName,
      );
      // delete  user  specific request
      await deleteRequest(
        route?.params?.authUser.id,
        route?.params?.otherUser?.id,
      );
      if (AuthAllChat) {
        AuthAllChat.map(async item => {
          // delete user all cat
          await deleteChat(item._id);
          // audioFiles
          if(item.audio.length> 0)
            await deleteFile(
              'audioFiles/' +
                item.audio[0]?.audioUri?.split('?')[0]?.split('%')?.pop().slice(2)
            );
         
          
          if(item.file.length> 0)
            await deleteFile(
              'allFiles/' + item.file[0]?.fielUrl?.split('?')[0]?.split('%')?.pop().slice(2)
            );
         

          setTimeout(() => {
            setLoading(false);
            navigation.navigate('Reported', {
              otherUserData: route?.params?.otherUser,
            });
          }, 2000);
        });
      }
    } catch (error) {}
  };
  return (
    <>
      <Container>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Request');
          }}
          style={{width: 40, height: 40, marginTop: 20}}>
          <Ionicons
            name="ios-chevron-back-outline"
            size={moderateScale(22)}
            color={colors.primary}
          />
        </TouchableOpacity>
        <SafeAreaView style={{flex: 1}}>
          <View>
            <CustomText
              marginTop={10}
              fontFamily={'ProximaNova-Bold'}
              fontSize={18}
              textAlign={'center'}
              alignSelf={'center'}
              color={colors.primary}>
              Let {route?.params?.otherUser?.firstName} know your reason for
              ending the conversation?
            </CustomText>
          </View>
          {/* <View style={{marginTop: 10}}>
            {ReportListArray.map((reportlist, index) => (
              <ReportItem
                name={reportlist.name}
                setCount={setCount}
                count={count}
                setReason={setReason}
                hideColor={() => setOff(false)}
                index={index}
                key={index}
              />
            ))}
          </View> */}
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {reasonStatus ? (
              <View style={{marginTop: 10}}>
                <CustomTextInput
                  borderColor={colors.black}
                  height={45}
                  placeholder={'Write your own reason......'}
                  paddingHorizontal={8}
                  textColor={colors.black}
                  textFamily={'ProximaNova-Regular'}
                  value={writeReason}
                  onChangeText={em => {
                    // set user reason
                    setWriteReason(em.trim());
                  }}
                />
              </View>
            ) : (
              <></>
            )}

            <CustomGradientButton
              marginTop={30}
              height={50}
              loading={loading}
              width={390}
              fontFamily={'ProximaNova-Bold'}
              fontSize={20}
              title={'Add Reason'}
              borderRadius={50}
              onPress={() => {
                setReasonStatus(true);
              }}
            />

            <CustomGradientButton
              marginTop={30}
              height={50}
              loading={loading}
              width={390}
              fontFamily={'ProximaNova-Bold'}
              fontSize={20}
              title={'Send'}
              borderRadius={50}
              onPress={() => {
                onSendReason();
              }}
            />
          </View>
        </SafeAreaView>
      </Container>
      <Loader
        loading={loading}
        file={require('../../../../assets/loader/heartLoading.json')}
      />
    </>
  );
};

const Container = styled(View, {
  width: '100%',
  padding: moderateScale(25),
  flex: 1,
});

export default ReportReason;
