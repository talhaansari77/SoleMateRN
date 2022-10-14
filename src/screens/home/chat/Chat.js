import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Keyboard,
  FlatList,
  ScrollView,
  Pressable,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProfileNav from '../profile/molecules/ProfileNav';
import commonStyles from '../../../utils/CommonStyles';
import {styles} from './styles';
import CustomText from '../../../components/CustomText';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {colors} from '../../../utils/Colors';
import HeaderConatiner from './request/Molecules/HeaderConatiner';
import moment from 'moment';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Divider} from 'react-native-elements';
import {ChatBody} from '../../../components/ChatBody';
import CustomGradientButton from '../../../components/CustomGradientButton';
import CustomButton from '../../../components/CustomButton';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import {
  sendMessage,
  sendMessageWithImage,
  updateMessage,
} from '../../../services/chats';
import {
  updateLastMessage,
  updateLastMessagewithImage,
} from '../../../services/request';
import AddDocuments from './molecules/AddDocuments';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Emoji from '../../../components/Emoji';
// import EmojisTab from '../../../components/EmojisTab';
// import EmojiContext from '../../../utils/context';
// import emojis from '../../../utils/emojis.json';
import {emojjisData} from '../../../utils/Data';
import AddReaction from './molecules/AddReaction';
import {getSpecificeUser} from '../../../services/FirebaseAuth';

const Tab = createMaterialTopTabNavigator();
import {uploadImage} from '../../../services/FirebaseAuth';
import axios from 'axios';
import {getCurrentFCMToken} from '../../../utils/PushNotification';

import {NotificationSender} from '../../../services/SendNotification';
import RNFetchBlob from 'rn-fetch-blob';

const audioRecorderPlayer = new AudioRecorderPlayer();

const Chat = ({navigation, route}) => {
  const [textMessage, setTextMessage] = useState('');
  const [showEndConversion, setShowEndConversion] = useState(false);
  const [documentsModal, setDocumentsModal] = useState(false);
  const [image, setImage] = useState('');
  const [status, setStatus] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [reaction, setReaction] = useState('');
  const [reactionModal, setReactionModal] = useState(false);
  const [reactionObject, setReactionObject] = useState({});
  const [otherUserData, setOtherUserData] = useState({});
  const [getAuthData, setGetAuthData] = useState({});
  const [getAllChat, setGetAllChat] = useState([]);
  const [playing, setPlaying] = useState(false);

  const [state, setState] = useState({
    recordSecs: 0,
    recordTime: '00:00:00',
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00:00',
    duration: '00:00:00',
    recorderState: 'init',
  });
  useEffect(() => {
    getUserFcm();
  }, []);

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setState({...state, recorderState: 'stopPlayer'});
  };

  // useEffect(() => {
  //   if (state.duration == state.playTime && state.recorderState != 'init') {
  //     onStopPlay();
  //   }
  // }, [state.playTime]);

  console.log('TextMessage', textMessage);

  const getUserFcm = async () => {
    getSpecificeUser(route?.params?.otherUserId).then(data => {
      setOtherUserData(data);
      // console.log('ReactionObject', data);
    });

    getSpecificeUser(route?.params?.authId).then(data => {
      setGetAuthData(data);
      // console.log('ReactionObject', data);
    });
  };

  // console.log('ReactionObject', );

  const onSend = async (result, file, audioUri) => {
    console.log('fileData', file, result, audioUri);
    let imgResponse = '';
    const tempAudio = [];
    const tempFile = [];
    if (result == 0 || file == 0) {
      console.log('audio');

      tempAudio.push({
        recordSecs: state.recordSecs,
        recordTime: state.recordTime,
        currentPositionSec: state.currentPositionSec,
        currentDurationSec: state.currentDurationSec,
        playTime: state.playTime,
        duration: state.duration,
        recorderState: state.recorderState,
        audioUri: audioUri,
      });
    } else if (file) {
      console.log('fileData');

      tempFile.push({
        fileName: file.name,
        type: file.type,
        fileSize: file.size,
        fielUrl: result,
      });
    } else if (result) {
      console.log('imageData');

      imgResponse = await uploadImage(result.uri, route.params?.authId);
    }

    const messageData = await sendMessage(
      route.params?.authId,
      route?.params?.otherUserId,
      textMessage ? textMessage : '',
      imgResponse ? imgResponse : '',
      status,
      reaction ? reaction : '',
      tempFile ? tempFile : '',
      tempAudio ? tempAudio : '',
    );
    updateLastMessage(
      route.params?.authId,
      route?.params?.otherUserId,
      messageData,
    );

    // fcmToken,message,title
    NotificationSender(
      otherUserData?.fcmToken,
      textMessage
        ? textMessage
        : file
        ? file.name
        : result != 0
        ? 'Photo'
        : audioUri
        ? 'Voice message'
        : null,
      getAuthData?.firstName,
    );
    setTextMessage('');
    setImage('');
    // Sending Notifications
    // console.log('Sending Notifications');

    // let newDate=new Date()

    // let orginalDate=moment(newDate).format("YYYY-MM-DD")
    // console.log('Resimage', result);
  };

  const onStartRecord = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const uri = await audioRecorderPlayer.startRecorder(undefined, audioSet);
    audioRecorderPlayer.addRecordBackListener(e => {
      setState({
        ...state,
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        recorderState: 'recordStart',
      });
    });

    console.log(`audio uri: ${uri}`);
    // ChooseFile(uri)
  };

  const ChooseFile = async uri => {
    // pick the single file

    try {
      const path = NormalizedPath(uri);
      console.log('PathData', path);

      // const result = await RNFetchBlob.fs.readFile(path, 'base64');
      // UploadFileToFirebaseStorage(result, uri);
      // const response = await readFile(path, "base64");

      console.log('PathDataResult', result);
    } catch (error) {
      console.log('error', error);
    }
  };

  const NormalizedPath = path => {
    if (Platform.OS == 'ios' || Platform.OS == 'android') {
      const filePrefix = 'file://';

      if (path.startsWith(filePrefix)) {
        path = path.substring(filePrefix.length);

        try {
          path = decodeURI(path);
        } catch (error) {}
      }
    }
    return path;
  };

  const UploadFileToFirebaseStorage = async (result, file) => {
    const resData = 0;
    const fileData = 0;

    const uploadFile = storage()
      .ref(`audioFiles/${uuid.v4()}`)
      .putString(result, 'base64');
    uploadFile.on(
      'state_changed',
      snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      error => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadFile.snapshot.ref.getDownloadURL().then(downloadURL => {
          // console.log('File available at', downloadURL);
          setDocumentsModal(false);
          console.log('DowloadUrl', downloadURL);
          onSend(resData, fileData, downloadURL);
        });
      },
    );
  };

  const onStopRecord = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      console.log('onStopRecord try', result);
      ChooseFile(result);
      audioRecorderPlayer.removeRecordBackListener();
      setState({
        ...state,
        recordSecs: 0,
        recorderState: 'recordStop',
      });
    } catch (error) {
      console.log('onStopRecord catch', error);
    }
  };

  const saveReaction = async reaction => {
    // console.log("reactionObject",reactionObject._id)
    // reactionObject

    // uniqueId,from, to, image,date,reaction

    // await UpdateUser(authId, {
    //   wishlist: firebase.firestore.FieldValue.arrayUnion({
    //     wishlist_id: id,
    //     createdAt: firebase.firestore.Timestamp.now(),
    //   }),

    await updateMessage(reactionObject._id, {
      reaction: reaction,
    });
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setShowEmojis(!showEmojis);
          setTextMessage(...item.char);
        }}
        style={{padding: 15}}>
        <Text style={{fontSize: 14}}>{item.char}</Text>
      </TouchableOpacity>
    );
  };

  return (
    // <EmojiContext.Provider value={{emoji, setEmoji}}>
    <SafeAreaView style={commonStyles.commonMain}>
      <View style={styles.mainContainer}>
        <HeaderConatiner
          label={otherUserData?.firstName}
          back={() => {
            navigation.goBack();
          }}
          setting={() => {
            setShowEndConversion(!showEndConversion);
          }}
        />

        <Spacer height={verticalScale(1)} />
        <View style={styles.innerMainContainer}>
          <ChatBody
            setReactionObject={setReactionObject}
            reactionModal={reactionModal}
            otherUserData={otherUserData}
            getAuthData={getAuthData}
            playing={playing}
            setPlaying={setPlaying}
            navigation={navigation}
            setReactionModal={setReactionModal}
            authId={route.params?.authId}
            otherId={route?.params?.otherUserId}
            setGetAllChat={setGetAllChat}
          />
        </View>
        <View style={styles.textInputContainer}>
          {state.recorderState === 'recordStart' ? (
            <View>
              <Text>Recording {state?.recordTime}</Text>
            </View>
          ) : (
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
          )}
          <View style={{width: verticalScale(20)}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {state.recorderState === 'recordStart' ? (
              <View style={{width: '66%', backgroundColor: 'red'}}></View>
            ) : (
              <View style={styles.textInputContainer1}>
                <TextInput
                  placeholder="message"
                  multiline={true}
                  placeholderTextColor="#667085"
                  style={{
                    fontSize: verticalScale(12),
                    width: '90%',
                    color: colors.black,
                    paddingLeft: 10,
                  }}
                  value={textMessage}
                  onChangeText={value => setTextMessage(value)}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShowEmojis(!showEmojis);
                  }}
                  activeOpacity={0.6}>
                  <SimpleLineIcons
                    name="emotsmile"
                    size={moderateScale(25)}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              </View>
            )}
            <View style={{width: verticalScale(5)}} />
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
              <Pressable
                onLongPress={onStartRecord}
                onPressOut={onStopRecord} // activeOpacity={0.6}
              >
                <MaterialCommunityIcons
                  name="microphone-outline"
                  size={moderateScale(30)}
                  color={colors.primary}
                />
              </Pressable>
            )}
          </View>
        </View>
        {showEndConversion ? (
          <View style={styles.endConversion}>
            <View style={styles.endHeader}>
              <View style={{width: '100%', alignItems: 'center'}}>
                <CustomButton
                  title={"View Samer's Profile"}
                  fontSize={verticalScale(18)}
                  borderRadius={25}
                  marginTop={20}
                  onPress={async () => {
                    await AsyncStorage.setItem(
                      'otherViewProfile',
                      route.params?.otherUserId,
                    );
                    setShowEndConversion(false);
                    navigation.navigate('Profile', {
                      otherViewProfile: route?.params?.otherUserId,
                    });
                  }}
                  borderWidth={1.9}
                  color={colors.primary}
                  borderColor={colors.darkOrange}
                  backgroundColor={colors.white}
                  width="90%"
                  fontFamily="ProximaNova-Bold"
                />

                <CustomGradientButton
                  marginTop={40}
                  height={50}
                  width={390}
                  fontFamily={'ProximaNova-Bold'}
                  fontSize={20}
                  title={'End Conversation'}
                  backgroundColor={colors.primary}
                  borderRadius={50}
                  onPress={() => {
                    setShowEndConversion(false);

                    navigation.navigate('Report', {
                      authData: getAuthData,
                      otherData: otherUserData,
                      allChat: getAllChat,
                    });
                  }}
                />
              </View>
            </View>

            <View style={styles.endBottom}></View>
          </View>
        ) : (
          <></>
        )}

        {/* {settingModal ? (
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
        )} */}

        {/* <SettingModal  settingModal={settingModal}setSettingModal={setSettingModal}/> */}
      </View>

      {showEmojis && (
        <View
          style={{
            height: 200,
            width: '100%',
            backgroundColor: '#e5e5e5',
          }}>
          <FlatList
            data={emojjisData}
            keyExtractor={item => item.char}
            numColumns={8}
            renderItem={renderItem}
          />
        </View>
      )}

      <AddDocuments
        image={image}
        setImage={setImage}
        onSend={onSend}
        documentsModal={documentsModal}
        setDocumentsModal={setDocumentsModal}
      />
      <AddReaction
        setReaction={setReaction}
        reactionModal={reactionModal}
        saveReaction={saveReaction}
        setReactionModal={setReactionModal}
      />
    </SafeAreaView>
    // </EmojiContext.Provider>
  );
};
export default Chat;