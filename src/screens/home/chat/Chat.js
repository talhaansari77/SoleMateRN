import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import ProfileNav from '../profile/molecules/ProfileNav';
import commonStyles from '../../../utils/CommonStyles';
import { styles } from './styles';
import CustomText from '../../../components/CustomText';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { Spacer } from '../../../components/Spacer';
import { colors } from '../../../utils/Colors';
import HeaderConatiner from './request/Molecules/HeaderConatiner';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';
import { ChatBody } from '../../../components/ChatBody';
import CustomButton from '../../../components/CustomButton';
import { sendMessage, sendMessageWithImage } from '../../../services/chats';
import {
  updateLastMessage,
  updateLastMessagewithImage,
} from '../../../services/request';
import AddDocuments from './molecules/AddDocuments';
import { uploadImage } from '../../../services/FirebaseAuth';
import axios from "axios";
import { getCurrentFCMToken } from '../../../utils/PushNotification';


const Chat = ({ navigation, route }) => {
  const [textMessage, setTextMessage] = useState([]);
  const [settingModal, setSettingModal] = useState(false);
  const [documentsModal, setDocumentsModal] = useState(false);
  const [image, setImage] = useState('');
  const [status, setStatus] = useState(false);
  // Send Notifications to YourSelf
  const myAppToken = 'key='+getCurrentFCMToken();
  // NotificationData
  const NotificationData = {
    method: 'POST',
    url: 'https://fcm.googleapis.com/fcm/send',
    headers: {
      Authorization: 'key=AAAAntfCcWI:APA91bGvB4v_-ERQEr5c9uAUbgB4OO5eqzGklQtRDSy0nuBCl488yFVTM0VqfjJKVfg21ABmip856AK_R9x8rYqvTq3AMowRdEqdYj9wrCDajnNUEkpeN0lpVo-lEptGSZ3WAqyIPLV_',
      'Content-Type': 'application/json'
    },
    data: {
      registration_ids: [
        'fvFIGkPqQPiWgI-VT-CJjv:APA91bHbN0ZnAvdI0cN8vlZxd-q44UPoGOU2j2ILyFaYN73a2Bv2cc9-bE2oz6VAm4PnbopQOcOZImoQ4gfe6PnPbuVEu5Pv482j5ncmH-8uRMHtDugqC-Wzi7hMqM-zjMo3d76IeEJO'
      ],
      notification: { body: 'This is an FCM notification message!', title: 'FCM Message' }
    }
  };

  console.log('RoutesData', image);

  // const UploadImageData = async image => {
  //   console.log('Resdata', res);
  // };

  const onSend = async result => {
    console.log('Resimage', result);
    let imgResponse = '';
    if (result) {
      imgResponse = await uploadImage(result.uri, route.params?.authId);
      console.log('imageRes', imgResponse);
    }

    const messageData = await sendMessage(
      route.params?.authId,
      route?.params?.otherUserId,
      textMessage ? textMessage : '',
      imgResponse ? imgResponse : '',
      route?.params?.SeenStatus ? !status : status,
    );

    updateLastMessage(
      route.params?.authId,
      route?.params?.otherUserId,
      messageData,
    );

    setTextMessage('');
    setImage('');
    // Sending Notifications
    console.log("Sending Notifications");
    axios.request(NotificationData).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <View style={styles.mainContainer}>
        <HeaderConatiner
          label="Samer"
          back={() => {
            navigation.goBack();
          }}
          setting={() => {
            setSettingModal(!settingModal);
          }}
        />

        <Spacer height={verticalScale(1)} />
        <View style={styles.innerMainContainer}>
          <ChatBody
            authId={route.params?.authId}
            otherId={route?.params?.otherUserId}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setDocumentsModal(true);
            }}
            style={styles.addContainer}>
            <Feather
              name="plus"
              size={moderateScale(18)}
              color={colors.white}
            />
          </TouchableOpacity>
          <View style={{ width: verticalScale(20) }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.textInputContainer1}>
              <TextInput
                placeholder="message"
                multiline={true}
                placeholderTextColor="#667085"
                style={{
                  fontSize: verticalScale(12),
                  width: '90%',
                  color: colors.black,
                }}
                value={textMessage}
                onChangeText={value => setTextMessage(value)}
              />
              <TouchableOpacity activeOpacity={0.6}>
                <SimpleLineIcons
                  name="emotsmile"
                  size={moderateScale(25)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: verticalScale(5) }} />
            {textMessage ? (
              <TouchableOpacity
                onPress={() => {
                  onSend();
                }}
                activeOpacity={0.6}>
                <Feather
                  name="send"
                  size={moderateScale(25)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.6}>
                <MaterialCommunityIcons
                  name="microphone-outline"
                  size={moderateScale(30)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {settingModal ? (
          <View>
            <View
              style={{
                width: '100%',
                height: verticalScale(150),
                backgroundColor: colors.white,
                top: verticalScale(-78),
                alignItems: 'center',
              }}>
              <View
                style={{
                  paddingVertical: 30,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <CustomButton
                  title={"View Samer's Profile"}
                  fontSize={verticalScale(18)}
                  borderRadius={25}
                  backgroundColor={colors.primary}
                  width="90%"
                  fontFamily="ProximaNova-Bold"
                />
              </View>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <CustomButton
                  backgroundColor={colors.darkOrange}
                  borderRadius={25}
                  fontSize={verticalScale(18)}
                  fontFamily="ProximaNova-Bold"
                  onPress={() => {
                    navigation.navigate('Report');

                    // Report
                  }}
                  width="90%"
                  title={'End Conversation'}
                />
              </View>
            </View>
            <View
              style={{
                // height: "70%",
                backgroundColor: 'rgba(0,0,0,0.7)',

                opacity: 0.5,
                marginTop: verticalScale(-80),
              }}
            />
          </View>
        ) : (
          <></>
        )}

        {/* <SettingModal  settingModal={settingModal}setSettingModal={setSettingModal}/> */}
      </View>

      <AddDocuments
        image={image}
        setImage={setImage}
        onSend={onSend}
        documentsModal={documentsModal}
        setDocumentsModal={setDocumentsModal}
      />
    </SafeAreaView>
  );
};

export default Chat;
