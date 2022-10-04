import {View, Text, SafeAreaView, ScrollView} from 'react-native';
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

const ReportReason = ({navigation, route}) => {
  const [count, setCount] = useState(-1);
  const [reason, setReason] = useState('');
  const [writeReason, setWriteReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [AuthAllChat, setAuthAllChat] = useState(route?.params?.userAllChat);
  // const [off, setOff] = useState(false)

  // console.log('UserChatAll', route?.params?.userAllChat);
  // otherUser:route?.params?.otherData,authUser:route?.params?.authData

  // useEffect(() => {

  // }, [])

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
  const onSendReason = async () => {
    if (!reason || writeReason) {
      Toast.show('Please Select any reason');
    } else {
      try {
        setLoading(true);
        NotificationSender(
          route?.params?.otherUser?.fcmToken,
          reason ? reason : writeReason,
          route?.params?.authUser?.firstName + ' End Conversation ',
        );
        await deleteRequest(
          route?.params?.authUser.id,
          route?.params?.otherUser?.id,
        );
        if (AuthAllChat) {
          AuthAllChat.map(async item => {
            // console.log('ItemAllChatId', item._id);
            await deleteChat(item._id);

            setTimeout(() => {
              setLoading(false);
              navigation.navigate('Reported',{otherUserData:route?.params?.otherUser});
            }, 2000);
          });
        }
      } catch (error) {}
    }

    //  console.log(route?.params?.otherUser?.fcmToken,reason?reason:writeReason,route?.params?.authUser?.firstName)
  };
  return (
    <ScrollView>
      <Container>
        <SafeAreaView>
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
          <View style={{marginTop: 10}}>
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
          </View>
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
                setWriteReason(em.trim());
              }}
              // onPress={() => {
              //   setOff(true)
              // }}
            />
          </View>
          {/* 
        <View
          style={{
            shadowColor: "#171717",
            shadowOffset: { height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        > */}
          <CustomGradientButton
            marginTop={30}
            height={50}
            loading={loading}
            width={390}
            fontFamily={'ProximaNova-Bold'}
            fontSize={20}
            title={'Send'}
            // backgroundColor={colors.darkOrange}
            borderRadius={50}
            onPress={() => {
              onSendReason();
              // navigation.navigate("Reported");
            }}
          />
          {/* </View> */}
        </SafeAreaView>
      </Container>

      <Loader
        loading={loading}
        file={require('../../../../assets/loader/heartLoading.json')}
      />
    </ScrollView>
  );
};

const Container = styled(View, {
  width: '100%',
  padding: moderateScale(25),
  flex: 1,
});

export default ReportReason;
