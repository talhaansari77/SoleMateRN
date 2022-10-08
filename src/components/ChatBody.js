import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
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
import RNFetchBlob from 'rn-fetch-blob';
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
import {useIsFocused} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import profileImages from '../../../../assets/Profile_images';

import moment from 'moment';
import CustomAudio from './CustomAudio';
import ReceiverVoiceMessage from './ReceiverVoiceMessage';

const audioRecorderPlayer = new AudioRecorderPlayer();

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
  setGetAllChat,
  otherUserData,
  playing,
  setPlaying,
  getAuthData,
  navigation,
}) => {
  const [messages, setMessages] = useState([]);
  const isFocused = useIsFocused();

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // console.log('statusMessage', messages);
  console.log('messageSubscriber', messages?.date);

  useEffect(() => {
    const messageSubscriber = getMessages(
      otherId,
      authId,
      setMessages,
      setGetAllChat,
    );

    return () => messageSubscriber();
  }, [authId, otherId]);

  useEffect(() => {
    if (isFocused) {
      changeMessageStatus();
    }
  }, [authId, otherId, isFocused, messages]);

  //   useEffect(() => {

  //     messages.map(item=>{
  //       if (item.currentPositionSec / item.currentDurationSec === 1) {
  //         setPlaying(false)
  //     }

  //     })

  // }, [state]);

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

  const downloadFile = file => {
    console.log('FileName', file);
    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = file;
    console.log('FILEURL', file);
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);
    file_ext = '.' + file_ext[0];
    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      });
  };

  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };
  const checkPermission = async file => {
    console.log('CheckFile', file);

    if (Platform.OS === 'ios') {
      downloadFile(file);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile(file);
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log('++++' + err);
      }
    }
  };

  // const [state, setState] = useState({ recordTime: '00:00:00' });
  // useEffect(() => {
  //   console.log('Voice Data::',state);
  //   if (state.currentPositionSec / state.currentDurationSec === 1) {
  //       setPlaying(false)
  //   }
  // }, [state]);
  const onStartPlay = async item => {
    console.log('onStartPlay', item[0]?.audioUri);
    //     if (!playing) {
    //         setPlaying(!playing)
    //         const dirs = RNFetchBlob.fs.dirs;
    // // const path = Platform.select({
    // //   ios: item[0]?.audioUri,
    // //   android: `${dirs.CacheDir}/${item[0]?.audioUri} `,
    // // });

    // const uri = await audioRecorderPlayer.startPlay(item[0]?.audioUri);

    //         // const msg = await audioRecorderPlayer.startPlayer(item[0]?.audioUri);
    //         console.log(uri);
    //       ;
    //     } else {
    //         setPlaying(!playing)
    //         onStopPlay()
    //     }
    console.log('onStartPlay');
    if (!playing) {
      setPlaying(!playing);
      const msg = await audioRecorderPlayer.startPlayer();
      console.log(msg);
      audioRecorderPlayer.addPlayBackListener(e => {
        setState({
          currentPositionSec: e.currentPosition,
          currentDurationSec: e.duration,
          playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
          duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        });
        return;
      });
    } else {
      setPlaying(!playing);
      onStopPlay();
    }
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };
  const renderMessages = ({item: message, index}) => {
    const isUser = message?.from == authId;

    console.log('MessageDays', message.days);
    let chatDate;
    if (index == 0) {
      chatDate = messages[index].days;
    } else {
      if (index < messages.length - 1) {
        if (messages[index].days !== messages[index - 1].days) {
          chatDate = messages[index].days;
        } else {
          chatDate = '';
        }
      }
    }
    return (
      <View
        style={{
          padding: 7,
          flex: 1,
        }}>
        <View style={{paddingBottom: verticalScale(15)}}>
          <CustomText label={chatDate} textStyle={styles.timerText} />
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
                  // paddingBottom:10
                  height: verticalScale(185),
                }}>
                <View />
                <View
                  style={{
                    width: 200,
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginTop: 10,
                  }}>
                  <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                    <Text
                      style={[
                        styles.timerText1,
                        {
                          alignSelf: 'flex-end',
                          marginBottom: verticalScale(10),
                        },
                      ]}>
                      {message.createdAt}
                    </Text>

                    <View style={{marginBottom: 10}}>
                      <Ionicons
                        name={
                          message.status == true
                            ? 'ios-checkmark-done-outline'
                            : 'ios-checkmark'
                        }
                        size={moderateScale(15)}
                        color={colors.primary}
                      />
                    </View>
                  </View>

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
                    {/* <View style={{position:"absolute",bottom:0,alignSelf:"flex-end",marginRight:30,marginBottom:10,padding:5}}>

                            <Ionicons
                              name={
                                message.status == true
                                  ? 'ios-checkmark-done-outline'
                                  : 'ios-checkmark'
                              }
                              size={moderateScale(20)}
                              color={colors.primary}
                            />

                    </View> */}
                  </TouchableOpacity>

                  {message.reaction ? (
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 100,
                        // marginTop: -15,
                        width: 25,
                        height: 25,
                        // top:0,
                        // bottom: 0,
                        alignSelf: 'flex-end',
                        // marginRight: 40,
                        alignItems: 'center',
                        justifyContent: 'center',

                        shadowColor: colors.gray,
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 5,
                        shadowRadius: 3,
                        elevation: 5,
                        marginBottom: 10,
                        // marginRight: 100,
                        marginLeft: verticalScale(-40),
                      }}>
                      <Text>{message.reaction}</Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            )}

            {message.file == undefined || message?.file?.length == 0 ? (
              <></>
            ) : (
              <View>
                {message.file.map(item => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('viewFile', {
                          fileData: message.file,
                        });
                      }}
                      activeOpacity={0.6}
                      style={styles.senderFile}>
                      <View
                        style={{
                          width: '100%',
                          height: '70%',
                          backgroundColor: 'red',
                          justifyContent: 'center',
                          padding: 7,
                          backgroundColor: '#6c757d',

                          borderRadius: 5,
                        }}>
                        <CustomText
                          label={item.fileName}
                          color={colors.white}
                          numberOfLines={1}
                          fontSize={12}
                          textAlign={'justify'}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 5,
                          alignItems: 'center',
                        }}>
                        <CustomText
                          label={item.type}
                          color={colors.white}
                          numberOfLines={1}
                          fontSize={9}
                          textAlign={'justify'}
                        />
                        <TouchableOpacity
                          onPress={() => {
                            // console.log("itemFile",item.fielUrl)
                            // checkPermission(item.fielUrl)
                          }}
                          style={{
                            alignSelf: 'flex-end',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <CustomText
                            label={message.createdAt}
                            textStyle={{
                              ...styles.timerText1,
                              color: colors.white,
                            }}
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
                        </TouchableOpacity>
                      </View>
                      {/* <Text>{item.fileName}</Text> */}
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}

            {message.audio == undefined || message?.audio?.length == 0 ? (
              <></>
            ) : (
              <View style={{alignSelf: 'flex-end'}}>
                <CustomAudio
                  message={message}
                  userData={getAuthData}
                  // startPlay={()=>{
                  //   onStartPlay(message.audio)

                  // }}
                  // playing={playing}
                  audio={message.audio}
                />
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
                {/* otherUserData */}
                <Component
                  // resizeMode="cover"

                  style={{height: '100%', width: '100%'}}
                  uniqueKey={Math.random()}
                  source={{uri: otherUserData?.images?.[0]}}
                />
                {/* <Image
                  source={profileImages.profile01}
                  resizeMode="cover"
                  style={commonStyles.img}
                /> */}
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
                  <TouchableOpacity
                    activeOpacity={1}
                    onLongPress={() => {
                      setReactionObject(message);
                      setReactionModal(true);
                    }}
                    style={styles.message2}>
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
                      {/* <Text>jjjjjjjjjj</Text> */}

                      <CustomText
                        label={message.createdAt}
                        textStyle={styles.timerText1}
                      />
                    </View>
                  </TouchableOpacity>
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
                    // flexDirection: 'row',
                    width: '100%',
                    height: verticalScale(180),
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
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onLongPress={() => {
                        setReactionObject(message);
                        setReactionModal(true);
                      }}
                      style={styles.imgReciver}>
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
                          marginTop: verticalScale(157),
                          width: 25,

                          height: 25,
                          alignItems: 'center',
                          justifyContent: 'center',
                          // alignSelf:"flex-end",
                          position: 'absolute',
                          // bottom:0,

                          shadowColor: colors.gray,
                          shadowOffset: {width: 0, height: 2},
                          shadowOpacity: 5,
                          shadowRadius: 3,
                          elevation: 5,
                          marginRight: 5,
                          marginLeft: 20,
                        }}>
                        <Text>{message.reaction}</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                    {/* <View style={{justifyContent: 'space-between'}} />

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
                    </View> */}

                    <Text
                      style={[
                        styles.timerText1,
                        {
                          alignSelf: 'flex-end',
                          marginLeft: 10,
                        },
                      ]}>
                      {message.createdAt}
                    </Text>
                  </View>
                </View>
              )}

              {message.file == undefined || message?.file?.length == 0 ? (
                <></>
              ) : (
                <View>
                  {message.file.map(item => {
                    return (
                      <View style={styles.receiverFile}>
                        <View style={styles.receiverCon}>
                          <CustomText
                            label={item.fileName}
                            color={colors.white}
                            numberOfLines={1}
                            fontSize={12}
                            textAlign={'justify'}
                          />
                        </View>
                        {/* <CustomText
                          label={item.fileName}
                          color={colors.black}
                          numberOfLines={1}
                          fontSize={12}
                          textAlign={'justify'}
                        /> */}
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                            alignItems: 'center',
                          }}>
                          <CustomText
                            label={item.type}
                            color={colors.black}
                            numberOfLines={1}
                            fontSize={10}
                            textAlign={'justify'}
                          />
                          <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                              checkPermission(item.fielUrl);
                            }}
                            style={{
                              width: moderateScale(30),
                              // height:verticalScale(30),
                              // backgroundColor:"red",
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Image
                              // resizeMode="contain"
                              source={icons.download}
                              style={{width: 20, height: 20}}
                            />
                          </TouchableOpacity>
                        </View>
                        {/* <Text>{item.fileName}</Text> */}
                      </View>
                    );
                  })}
                </View>
              )}

              {message.audio == undefined || message?.audio?.length == 0 ? (
                <></>
              ) : (
                <View style={{alignSelf: 'flex-end', width: '100%'}}>
                  <ReceiverVoiceMessage
                    message={message}
                    userData={otherUserData}
                    // startPlay={()=>{
                    //   onStartPlay(message.audio)

                    // }}
                    // playing={playing}
                    audio={message.audio}
                  />
                </View>
              )}
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

    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 5,
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
    paddingHorizontal: verticalScale(15),
    // paddingTop: verticalScale(10),
    // paddingBottom: verticalScale(5),
    paddingVertical: verticalScale(10),
    paddingLeft: 15,
    marginLeft: scale(5),
    borderTopRightRadius: verticalScale(22),
    borderBottomLeftRadius: verticalScale(2),
    borderTopLeftRadius: verticalScale(15),
    borderBottomRightRadius: verticalScale(22),

    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 5,

    maxWidth: '85%',
    minWidth: '37%',
    minHeight: 60,
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
  senderFile: {
    // alignSelf:"flex-end",
    // backgroundColor:"red",
    width: '70%',
    height: verticalScale(55),

    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    padding: moderateScale(10),

    borderRadius: 15,
    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 10,
    shadowRadius: 3,
    elevation: 5,
  },
  receiverFile: {
    width: '100%',
    height: verticalScale(60),

    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    padding: moderateScale(10),

    borderRadius: 15,
    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 10,
    shadowRadius: 3,
    elevation: 5,
  },
  receiverCon: {
    width: '100%',
    height: '70%',
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: '#6c757d',

    borderRadius: 5,
  },
});

{
  /* <View
style={{
    padding: 10,
    height: 80,
    width: '80%',
    borderRadius: 20,
    backgroundColor: colors.placeholder,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
}}> */
}
{
  /* <TouchableOpacity style={{
    flex: 1, padding: 10,
    alignItems: 'center',
}}
 onPress={()=>{
  onStartPlay(message.audio)

 }}>
    <FontAwesome5Icon name={playing ? 'pause' : 'play'} size={20} />
</TouchableOpacity> */
}

{
  /* <View style={{
    flex: 7, paddingHorizontal: 10,
    justifyContent: 'center',
    marginTop: verticalScale(10)
}}>
    <Progress.Bar
        progress={message.playTime ? (message?.currentPositionSec / message?.currentDurationSec) : (1)}
        height={3}
        color={colors.white}
        width={scale(155)}
    />
    <Spacer height={10} />
    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: scale(2) }}>
        <CustomText label={message.recordTime ? message.recordTime : message.playTime} color={colors.white} />
        <CustomText label={'Oct-7'} color={colors.white} />
    </View>
</View>
<View style={{
    flex: 2, justifyContent: 'center',
    alignItems: 'center',
}}>
    <View style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 25 }}>
        <Image source={profileImages.profile01} resizeMode="contain" />
    </View>
</View> */
}
// </View>
