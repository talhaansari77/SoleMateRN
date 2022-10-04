import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {
  moderateScale,
  ms,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import CustomText from './CustomText';
// import CustomText from "../CustomText";
// import CustomText from "./CustomText";
// import moment from "moment";

import {colors} from '../utils/Colors';
import profileImages from '../../assets/Profile_images';
import commonStyles from '../utils/CommonStyles';
import icons from '../../assets/icons';
import CustomImage from './CustomImage';
import {Spacer} from './Spacer';
import {getMessages, updateMessage} from '../services/chats';
import Component from './FastImage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getUserID} from 'react-native-fbsdk/lib/commonjs/FBAppEventsLogger';
import {getAuthId} from '../services/FirebaseAuth';
// import colors from "../../Utils/colors";
// import { getMessages } from "../Services/chats";
export const ChatBody = ({
  userId,
  relatedUserId,
  messageText,
  authId,
  otherId,
  reactionModal,
  setReactionModal,
  setReactionObject,
  setGetAllChat
}) => {
  const [messages, setMessages] = useState([]);

  // console.log('statusMessage', messages);

  useEffect(() => {
    const messageSubscriber = getMessages(otherId, authId, setMessages,setGetAllChat);

    console.log("messageSubscriber",messageSubscriber)

    return () => messageSubscriber();
  }, [authId, otherId]);

  useEffect(() => {
    changeMessageStatus();
  }, [authId, otherId]);

  const changeMessageStatus = async () => {
    const id = await getAuthId();

    // item.to == authId ? item.from : item.to

    // console.log("MessageId"
    if (messages)
      messages.map(async item => {
        const isUser = item.from == authId;
        if (!isUser) {
          await updateMessage(item._id, {
            status: true,
          });
        }
      });

    console.log('messageStatusUpdate');
  };

  const renderMessages = ({item: message}) => {
    const isUser = message?.from == authId;
    return (
      <View
        style={{
          padding: 7,
          flex: 1,
        }}>
        <View style={{paddingBottom: verticalScale(15)}}>
          <CustomText label="January, 21" textStyle={styles.timerText} />
        </View>

        {isUser ? (
          <View>
            {message.text == '' ? (
              <></>
            ) : (
              <View>
                <TouchableOpacity
                  activeOpacity={1}
                  onLongPress={() => {
                    setReactionObject(message);
                    setReactionModal(true);
                  }}
                  style={styles.message1}>
                  <View>
                    <CustomText
                      label={message.text}
                      textStyle={{...styles.messageText, color: colors.white}}
                      textAlign={'justify'}
                    />
                  </View>
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CustomText
                      label={message.createdAt}
                      textStyle={{...styles.timerText1, color: colors.white}}
                    />

                    {/* <Text style={{alignSelf:"center"}}>c</Text> */}

                    {/* <Ionicons
                  name="ios-checkmark"
                  size={moderateScale(20)}
                  color={colors.primary}
                /> */}
                    <View style={{marginLeft: 5}}>
                      <Ionicons
                        name={
                          message.status == true
                            ? 'ios-checkmark-done-outline'
                            : 'ios-checkmark'
                        }
                        size={moderateScale(15)}
                        color={colors.white}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                {message.reaction ? (
                  <View
                    style={{
                      backgroundColor: 'white',
                      alignSelf: 'flex-end',
                      borderRadius: 100,
                      marginTop: -10,
                      width: 25,
                      height: 25,
                      alignItems: 'center',
                      justifyContent: 'center',

                      shadowColor: colors.gray,
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 5,
                      shadowRadius: 3,
                      elevation: 5,
                      marginRight: 5,
                    }}>
                    <Text>{message.reaction}</Text>
                  </View>
                ) : (
                  <></>
                )}
              </View>
            )}

            {message.image == '' ? (
              <></>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View />
                <View style={{width: 200, flexDirection: 'row'}}>
                  <Text
                    style={[
                      styles.timerText1,
                      {
                        alignSelf: 'flex-end',
                      },
                    ]}>
                    {message.createdAt}
                  </Text>

                  {/* <CustomText
                    label={message.createdAt}
                    alignSelf="flex-end"
                    textStyle={{...styles.timerText1, color: colors.gr}}
                  /> */}
                  <TouchableOpacity 
                  activeOpacity={0.8}

                  onLongPress={() => {
                    setReactionObject(message);
                    setReactionModal(true);
                  }}

                  style={styles.imgGallery}>
                    <Component
                      uri={Math.random()}
                      style={styles.imConatiner}
                      source={{uri: message?.image}}
                    />


                  </TouchableOpacity>


{message.reaction ? (
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 100,
                        marginTop: -15,
                        width: 25,
                        height: 25,
                        // top:0,
                        bottom:0,
                        alignSelf:"flex-end",
                        marginRight:40,
                        alignItems: 'center',
                        justifyContent: 'center',

                        shadowColor: colors.gray,
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 5,
                        shadowRadius: 3,
                        elevation: 5,
                        // marginRight: 5,
                        // marginLeft: 10,
                      }}>
                      <Text>{message.reaction}</Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            )}
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // flexWrap:"wrap",
              display: 'flex',
              flex: 1,
              width: '100%',
            }}>
            <View
              style={{
                flex: 0.2,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 4,
              }}>
              <View
                style={{
                  width: '100%',
                  height: 60,

                  borderRadius: 20,
                  overflow: 'hidden',
                  marginRight: scale(10),
                }}>
                <Image
                  source={profileImages.profile01}
                  resizeMode="cover"
                  style={commonStyles.img}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                height: '100%',
                flexDirection: 'row',
              }}>
              {message.text == '' ? (
                <></>
              ) : (
                <View>
                  <View style={styles.message2}>
                    {/* <CustomText label={item.mess} textStyle={styles.messageText} timer={'10:50'} /> */}

                    {/* Testing Extra */}
                    <View>
                      <CustomText
                        label={message.text}
                        textStyle={styles.messageText}
                        textAlign={'justify'}
                      />
                    </View>
                    <View
                      style={{
                        alignSelf: 'flex-end',
                      }}>
                      <CustomText
                        label={message.createdAt}
                        textStyle={styles.timerText1}
                      />
                    </View>
                  </View>
                  {message.reaction ? (
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 100,
                        marginTop: -15,
                        width: 25,
                        height: 25,
                        alignItems: 'center',
                        justifyContent: 'center',

                        shadowColor: colors.gray,
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 5,
                        shadowRadius: 3,
                        elevation: 5,
                        marginRight: 5,
                        marginLeft: 10,
                      }}>
                      <Text>{message.reaction}</Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              )}

              {message?.image == '' ? (
                <></>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      width: 200,
                      flexDirection: 'row',

                      shadowColor: '#e9ecef',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 5,
                      shadowRadius: 3,
                      elevation: 5,
                    }}>
                    <View style={styles.imgReciver}>
                      <Component
                        uri={Math.random()}
                        style={styles.imConatiner}
                        source={{uri: message?.image}}
                      />
                    </View>
                    <View style={{justifyContent: 'space-between'}} />

                    <View
                      style={{
                        justifyContent: 'center',
                        marginLeft: scale(10),
                        height: '80%',
                      }}>
                      <CustomImage
                        resizeMode={'contain'}
                        src={icons.orangeTickReadIcon}
                        height={15}
                        width={15}
                      />
                    </View>

                    <Text
                      style={[
                        styles.timerText1,
                        {
                          alignSelf: 'flex-end',
                          marginLeft: -20,
                        },
                      ]}>
                      {message.createdAt}
                    </Text>
                  </View>
                </View>
              )}

              {/* <View style={{justifyContent: 'center', marginLeft: scale(10)}}>
                <CustomImage
                  src={icons.orangeTickReadIcon}
                  height={15}
                  width={15}
                />
                <Ionicons
                  name="ios-checkmark"
                  size={moderateScale(20)}
                  color={colors.primary}
                />
                <Ionicons
                  name="ios-checkmark-done-outline"
                  size={moderateScale(20)}
                  color={colors.orange}
                />
              </View> */}
            </View>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={{flex: 1, paddingBottom: 60}}>
      <FlatList
        data={messages}
        renderItem={renderMessages}
        style={styles.chat}
        // initialScrollIndex={messages.length - 1}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   chat: {
//     padding: 15,
//     height: "75%",
//   },

//   message: {
//     backgroundColor: "#F3F3F3",
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     padding: 20,
//     minHeight: 100,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   messageSpoil: {
//     height: 30,
//     width: 30,
//     alignSelf: "flex-end",
//     top: -30,
//     right: -15,
//   },
//   message1: {
//     backgroundColor: colors.primary,
//     alignSelf: "flex-end",
//     paddingHorizontal: verticalScale(15),
//     paddingVertical: verticalScale(5),
//     borderBottomLeftRadius: verticalScale(5),
//     borderBottomRightRadius: verticalScale(5),
//     borderTopLeftRadius: verticalScale(5),
//   },
//   timerText: {
//     fontSize: verticalScale(9),
//     color: colors.lightGray,
//     alignSelf: "flex-end",
//     marginTop: verticalScale(10),
//   },
//   timerText1: {
//     fontSize: verticalScale(10),
//     color: colors.lightGray,
//     alignSelf: "flex-start",
//     marginTop: verticalScale(10),
//   },
//   message2: {
//     backgroundColor:colors.inputBorder,
//     alignSelf: "flex-start",
//     paddingHorizontal: verticalScale(15),
//     paddingVertical: verticalScale(5),
//     borderBottomLeftRadius: verticalScale(5),
//     borderBottomRightRadius: verticalScale(5),
//     borderTopLeftRadius: verticalScale(5),

//   },
//   messageText: {
//     fontSize: verticalScale(10),
//     color: colors.lightBlack,
//   },
// });

const styles = ScaledSheet.create({
  chat: {
    padding: 0,
    height: '75%',
  },

  message: {
    backgroundColor: '#F3F3F3',
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    padding: 20,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageSpoil: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
    top: -30,
    right: -15,
  },
  message1: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(10),
    color: colors.white,
    borderBottomLeftRadius: verticalScale(20),
    // borderBottomRightRadius: verticalScale(10),
    borderTopLeftRadius: verticalScale(20),
    borderTopRightRadius: verticalScale(20),
  },
  timerText: {
    fontSize: verticalScale(11),
    color: colors.gray,
    alignSelf: 'center',
    marginTop: verticalScale(10),
    fontFamily: 'ProximaNova-Regular',
  },
  timerText1: {
    fontSize: verticalScale(10),
    color: colors.gray,

    // marginTop: verticalScale(15),
    fontFamily: 'ProximaNova-Regular',
    // marginRight: "5@s",

    // marginLeft: "10@s",
  },
  message2: {
    backgroundColor: colors.white,
    // width: 'auto',
    //  alignSelf: "flex-start",
    paddingHorizontal: verticalScale(7),
    // paddingTop: verticalScale(10),
    // paddingBottom: verticalScale(5),
    paddingVertical: verticalScale(5),
    paddingLeft: 15,
    marginLeft: scale(5),
    borderTopRightRadius: verticalScale(22),
    borderBottomLeftRadius: verticalScale(2),
    borderTopLeftRadius: verticalScale(15),
    borderBottomRightRadius: verticalScale(22),

    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 5,

    maxWidth: '85%',
    // flexWrap:"wrap"
  },
  messageText: {
    fontSize: verticalScale(12),
    color: colors.black,
    fontFamily: 'ProximaNova-Regular',
  },
  imgGallery: {
    width: '70%',
    height: verticalScale(170),
    backgroundColor: colors.primary,
    overflow: 'hidden',
    padding: 5,

    borderRadius: 30,

    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 10,
    shadowRadius: 3,
    elevation: 5,
    // backgroundColor: "red",
    // display:"flex",
    // flexWrap: "wrap",

    // width:"100%"
  },
  imConatiner: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  imgText: {
    alignSelf: 'flex-end',
    width: '100%',
  },
  imgReciver: {
    width: '70%',
    height: verticalScale(170),
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 5,

    borderRadius: 30,
  },
});
