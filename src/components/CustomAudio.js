import {
  StyleSheet,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Text
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from './CustomText';
import {colors} from '../utils/Colors';
import {
  verticalScale,
  scale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import Component from './FastImage';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFetchBlob from 'rn-fetch-blob';


const audioRecorderPlayer = new AudioRecorderPlayer();

const CustomAudio = ({audio, userData, message, isUser}) => {
  const [state, setState] = useState({});
  const [playing, setPlaying] = useState(false);
  let rt = audio?.[0]?.recordTime.split(':');
  rt = rt[0] + ':' + rt[1];
  // let pt = state?.playTime?.split(':')
  // pt = pt[0]+":"+pt[1];

  console.log('UserAithData', state);
  console.log('audioUrl', audio[0].audioUri);

  useEffect(() => {
    console.log('This is audio you are looking for:', audio);
    console.log(state);
    if (state.currentPositionSec / state.currentDurationSec === 1) {
      setPlaying(false);
    }
  }, [state]);

  const onStartRecord = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external storage', grants);

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
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setState({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    console.log('Local Audio', result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    // setState({
    //     recordSecs: 0,
    // });
    console.log(result);
  };

  const onStartPlay = async () => {


  
    if (!playing) {
      setPlaying(!playing);
      const msg = await audioRecorderPlayer.startPlayer(audio[0].audioUri);

      console.log('This is Inside Play', msg);
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

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };
  // console.log("mesaageAudio",message?.[0].playTime)

  //LeftAudio
  const LeftAudio = () => (
    <View style={styles.leftAudioContainer1}>
      {/* play icons */}

      {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'brown',
              flexDirection: 'row',
            }}></View> */}
      <TouchableOpacity
        style={styles.leftAudioContainer2}
        onPress={onStartPlay}>
        <FontAwesome5Icon
          name={playing ? 'pause' : 'play'}
          size={20}
          color={colors.gray}
        />
      </TouchableOpacity>

      {/* Progress.Bar */}
      <View style={styles.leftAudioContainer3}>
        {state.playTime ? (
          <Progress.Bar
            progress={state.currentPositionSec / state.currentDurationSec}
            height={2}
            color={colors.gray}
            width={moderateScale(130)}
          />
        ) : (
          <Progress.Bar
            progress={1}
            height={2}
            color={colors.gray}
            width={moderateScale(130)}
          />
        )}
        {/* <Spacer height={5} /> */}
        <View style={styles.leftAudioContainer4}>
          <CustomText
            fontSize={9}
            label={
              state?.playTime
                ? state.currentPositionSec / state.currentDurationSec == 1
                  ? rt
                  : state?.playTime
                : rt
            }
            color={colors.gray}
          />
          <View style={styles.leftAudioContainer5}>
            <CustomText
              marginRight={5}
              fontSize={9}
              label={message.createdAt}
              color={colors.gray}
            />
          </View>
        </View>
      </View>
      {/* image */}
      <View style={styles.leftAudioContainer6}>
        <Component
          // resizeMode="cover"

          style={styles.hw100}
          uniqueKey={Math.random()}
          source={{uri: userData?.images?.image1}}
        />
        {/* <Image source={{uri:userData?.images?.[0]}} resizeMode="contain" /> */}
      </View>
    </View>
  );

  //rightAudio
  const RightAudio = () => (
    <View style={styles.rightAudioContainer1}>
      {/* play icons */}

      <View style={styles.rightAudioContainer2}>
        <View style={styles.rightAudioContainer3}>
          <Component
            // resizeMode="cover"

            style={styles.hw100}
            uniqueKey={Math.random()}
            source={{uri: userData?.images?.image1}}
          />
          {/* <Image source={{uri:userData?.images?.[0]}} resizeMode="contain" /> */}
        </View>
      </View>
      <TouchableOpacity
        style={styles.rightAudioContainer4}
        onPress={onStartPlay}>
        <FontAwesome5Icon
          name={playing ? 'pause' : 'play'}
          size={20}
          color={colors.white}
        />
      </TouchableOpacity>

      {/* Progress.Bar */}
      <View style={styles.rightAudioContainer5}>
        {state.playTime ? (
          <Progress.Bar
            progress={state.currentPositionSec / state.currentDurationSec}
            height={2}
            color={colors.white}
            width={moderateScale(130)}
          />
        ) : (
          <Progress.Bar
            progress={1}
            height={2}
            color={colors.white}
            width={moderateScale(130)}
          />
        )}
        {/* <Spacer height={5} /> */}
        <View style={styles.rightAudioContainer6}>
          <CustomText
            fontSize={9}
            label={
              state?.playTime
                ? state.currentPositionSec / state.currentDurationSec == 1
                  ? rt
                  : state?.playTime
                : rt
            }
            color={colors.white}
          />
          <View style={styles.rightAudioContainer7}>
            <CustomText
              marginRight={5}
              fontSize={9}
              label={message.createdAt}
              color={colors.white}
            />
            <View>
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
        </View>
      </View>
      {/* image */}
    </View>
  );

  // Main Function
  return isUser ? <RightAudio /> : <LeftAudio />;
};

export default CustomAudio;


const styles = ScaledSheet.create({
  rightAudioContainer1: {
    padding: 5,
    height: 67,
    width: '70%',
    borderRadius: 15,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 2,
    shadowRadius: 3,
    elevation: 5,
  },
  rightAudioContainer2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //   backgroundColor:'brown'
  },
  rightAudioContainer3: {
    height: 45,
    width: 45,
    overflow: 'hidden',
    borderRadius: 20,
    marginLeft: 10,
  },
  hw100: {
    height: '100%',
    width: '100%',
  },
  rightAudioContainer4: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    marginLeft: 10,
    //   backgroundColor:'pink'
  },
  rightAudioContainer5: {
    flex: 7.5,
    paddingHorizontal: 7,
    justifyContent: 'center',
    height: '100%',
    marginTop: verticalScale(20),
    //   backgroundColor:'red'
  },
  rightAudioContainer6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: scale(5),
    marginTop: 10,
  },
  rightAudioContainer7: {flexDirection: 'row', alignItems: 'center'},
  // leftSide
  leftAudioContainer1: {
    padding: 5,
    height: 67,
    width: '90%',
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 2,
    shadowRadius: 3,
    elevation: 5,
  },
  leftAudioContainer2: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    //   backgroundColor:'pink'
  },
  leftAudioContainer3: {
    flex: 7.5,
    paddingHorizontal: 7,
    justifyContent: 'center',
    height: '100%',
    marginTop: verticalScale(20),
    //   backgroundColor:'red'
  },
  hw100: {
    height: '100%',
    width: '100%',
  },
  leftAudioContainer4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: scale(5),
    marginTop: 10,
  },
  leftAudioContainer5: {flexDirection: 'row', alignItems: 'center'},
  leftAudioContainer6: {
    height: 45,
    width: 45,
    overflow: 'hidden',
    borderRadius: 20,
    marginLeft: 10,
  },
  leftAudioContainer7: {flexDirection: 'row', alignItems: 'center'},
});

// const shadowProps = {
//   shadowColor: colors.gray,
//   shadowOffset: {width: 0, height: 1},
//   shadowOpacity: 2,
//   shadowRadius: 3,
//   elevation: 5,
// };
