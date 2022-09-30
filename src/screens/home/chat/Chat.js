import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ProfileNav from '../profile/molecules/ProfileNav';
import commonStyles from '../../../utils/CommonStyles';
import {styles} from './styles';
import CustomText from '../../../components/CustomText';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {colors} from '../../../utils/Colors';
import HeaderConatiner from './request/Molecules/HeaderConatiner';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Divider} from 'react-native-elements';
import {ChatBody} from '../../../components/ChatBody';
import CustomButton from '../../../components/CustomButton';
import {sendMessage} from '../../../services/chats';
import {updateLastMessage} from '../../../services/request';

const Chat = ({navigation, route}) => {
  const [textMessage, setTextMessage] = useState([]);
  const [settingModal, setSettingModal] = useState(false);

  console.log('RoutesData', route?.params);

  const onSend = async messages => {
    const messageData = await sendMessage(
      route.params?.authId,
      route?.params?.otherUserId,
      messages,
    );

    updateLastMessage(
      route.params?.authId,
      route?.params?.otherUserId,
      messageData,
    );

    setTextMessage('');
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

        <View style={styles.Padding}>
          {/* <ProfileNav
            RightSide={() => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={{ alignItems: "flex-end", width: "100%" }}
              >
                <Feather
                  name="plus"
                  size={moderateScale(25)}
                  color={colors.black}
                />
              </TouchableOpacity>
            )}
          />
          <CustomText
            label="Chandler"
            fontFamily="bold"
            fontSize={verticalScale(15)}
            marginLeft={verticalScale(5)}
          /> */}
        </View>
        <Spacer height={verticalScale(8)} />
        <View style={styles.innerMainContainer}>
          <ChatBody
            authId={route.params?.authId}
            otherId={route?.params?.otherUserId}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.addContainer}>
            <TouchableOpacity activeOpacity={0.6}>
              <Feather
                name="plus"
                size={moderateScale(18)}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: verticalScale(20)}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.textInputContainer1}>
              <TextInput
                placeholder="message"
                placeholderTextColor="#667085"
                style={{
                  fontSize: verticalScale(12),
                  width: '90%',
                  color: colors.black,
                  paddingHorizontal: verticalScale(10),
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
            <View style={{width: verticalScale(5)}} />
            {textMessage ? (
              <TouchableOpacity
                onPress={() => {
                  onSend(textMessage);
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
              <View style={{width: '100%', alignItems: 'center'}}>
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
    </SafeAreaView>
  );
};

export default Chat;
