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
import moment from 'moment';
import CustomAudio from './CustomAudio';

// Audio Recorder
const audioRecorderPlayer = new AudioRecorderPlayer();

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

  // on Start Load Messages
  useEffect(() => {
    const messageSubscriber = getMessages(
      otherId,
      authId,
      setMessages,
      setGetAllChat,
    );

    return () => messageSubscriber();
  }, [authId, otherId]);

  // Changing Msg Status
  useEffect(() => {
    if (isFocused) {
      changeMessageStatus();
    }
  }, [authId, otherId, isFocused, messages]);

  // MessageStatus changer
  const changeMessageStatus = async () => {
    const id = await getAuthId();

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

  // File Downloader
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

  // getFileExtention
  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };
  // checking Permission
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
  // onStart Audio Play
  const onStartPlay = async item => {
    console.log('onStartPlay', item[0]?.audioUri);

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

  // audio Stopper
  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };
  // renderMessages
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

    // Main Function
    return (
      <View style={styles.container}>
       {chatDate?<View style={styles.pb15}>
          <CustomText label={chatDate} textStyle={styles.timerText} />
        </View>:<></>}
        

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
                  <View style={styles.goToRight}>
                    <CustomText
                      label={message.createdAt}
                      textStyle={{...styles.timerText1, color: colors.white}}
                    />

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
                  <View style={styles.reactionContainer}>
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
              <View style={styles.rightImageContainer}>
                <View />
                <View style={styles.insideRightImage1}>
                  <View style={styles.insideRightImage2}>
                    <Text style={[styles.timerText1, styles.insideRightImage2]}>
                      {message.createdAt}
                    </Text>

                    <View style={{marginBottom: verticalScale(1)}}>
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
                    <View style={styles.reactionContainer2}>
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
                      <View style={styles.fileContainer}>
                        <CustomText
                          label={item.fileName}
                          color={colors.white}
                          numberOfLines={1}
                          fontSize={12}
                          textAlign={'justify'}
                        />
                      </View>

                      <View style={styles.fileContainer2}>
                        <CustomText
                          label={item.type}
                          color={colors.white}
                          numberOfLines={1}
                          fontSize={9}
                          textAlign={'justify'}
                        />
                        <TouchableOpacity
                          onPress={() => {}}
                          style={styles.fileContainer3}>
                          <CustomText
                            label={message.createdAt}
                            textStyle={{
                              ...styles.timerText1,
                              color: colors.white,
                            }}
                          />

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
                  audio={message.audio}
                  isUser={isUser}
                />
              </View>
            )}
          </View>
        ) : (
          <View style={styles.left1}>
            <View style={styles.left2}>
              <View style={styles.left3}>
                {/* otherUserData */}
                <Component
                  // resizeMode="cover"

                  style={styles.hw100}
                  uniqueKey={Math.random()}
                  source={{uri: otherUserData?.images?.image1}}
                />
              </View>
            </View>

            <View style={styles.leftMsgContainer}>
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
                      <CustomText
                        label={message.createdAt}
                        textStyle={styles.timerText1}
                      />
                    </View>
                  </TouchableOpacity>
                  {message.reaction ? (
                    <View style={styles.reactionContainerLeft1}>
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
                <View style={styles.leftImageContainer1}>
                  <View style={styles.leftImageContainer2}>
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
                      <View style={styles.reactionContainerLeft2}>
                        <Text>{message.reaction}</Text>
                      </View>
                    ) : (
                      <></>
                    )}

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

                        <View style={styles.fileContainerLeft1}>
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
                            style={styles.fileContainerLeft2}>
                            <Image
                              // resizeMode="contain"
                              source={icons.download}
                              style={{width: 20, height: 20}}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </View>
              )}

              {message.audio == undefined || message?.audio?.length == 0 ? (
                <></>
              ) : (
                <View style={styles.audioContainer1}>
                  <CustomAudio
                    message={message}
                    userData={otherUserData}
                    audio={message.audio}
                    isUser={false}
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
    <View style={styles.mainContainer}>
      <FlatList
        data={messages}
        renderItem={renderMessages}
        style={styles.chat}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        inverted
        contentContainerStyle={{flexDirection: 'column-reverse'}}
      />
    </View>
  );
};

// AllStyles

const styles = ScaledSheet.create({
  mainContainer: {flex: 1, paddingBottom: 60},
  container: {
    padding: 7,
    flex: 1,
  },
  pb15: {
    paddingBottom: verticalScale(15),
  },
  goToRight: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionContainer: {
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
  },
  reactionContainer2: {
    backgroundColor: 'white',
    borderRadius: 100,
    marginTop: 10,
    width: 25,
    height: 25,
    top: '100%',
    // bottom: 0,
    // alignSelf: 'flex-end',
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
  },
  rightImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 10,
    height: verticalScale(190),
  },
  fileContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: '#6c757d',

    borderRadius: 5,
  },
  fileContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  fileContainer3: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left1: {
    flexDirection: 'row',
    alignItems: 'center',
    // flexWrap:"wrap",
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  left2: {
    flex: 0.2,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
  },
  left3: {
    width: '100%',
    height: 60,

    borderRadius: 20,
    overflow: 'hidden',
    marginRight: scale(10),
  },
  leftMsgContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
  },
  hw100: {height: '100%', width: '100%'},
  reactionContainerLeft1: {
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
  },
  leftImageContainer1: {
    // flexDirection: 'row',
    width: '100%',
    height: verticalScale(180),
  },
  leftImageContainer2: {
    width: 200,
    flexDirection: 'row',

    shadowColor: '#e9ecef',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 5,
  },
  reactionContainerLeft2: {
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
  },
  fileContainerLeft1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  fileContainerLeft2: {
    width: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioContainer1: {alignSelf: 'flex-end', width: '100%'},
  insideRightImage1: {
    width: 200,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },
  insideRightImage2: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  insideRightImage3: {
    alignSelf: 'flex-end',
    marginBottom: verticalScale(10),
  },
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
