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
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import profileImages from '../../assets/Profile_images';
import CustomText from './CustomText';
import {colors} from '../utils/Colors';
import {verticalScale, scale} from 'react-native-size-matters';
import {Spacer} from './Spacer';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

const CustomAudio = ({audio}) => {
  const [state, setState] = useState({recordTime: '00:00:00'});
  const [voiceProgress, setVoiceProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    console.log('This is audio you are looking for:', audio);
    console.log(state);
    if (state.currentPositionSec / state.currentDurationSec === 1) {
      setPlaying(false);
    }
  }, [state]);

  onStartRecord = async () => {
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
    const result = await audioRecorderPlayer.startRecorder(audio.audioUri);
    audioRecorderPlayer.addRecordBackListener(e => {
      setState({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    console.log(result);
  };

  onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    // setState({
    //     recordSecs: 0,
    // });
    console.log(result);
  };

  onStartPlay = async () => {
    console.log('onStartPlay');
    if (!playing) {
      setPlaying(!playing);
      const msg = await audioRecorderPlayer.startPlayer();
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

  onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };
  // console.log("mesaageAudio",message?.[0].playTime)

  // Main Function
  return (
    <View
      style={{
        padding: 10,
        height: 80,
        width: '80%',
        borderRadius: 20,
        backgroundColor: colors.placeholder,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {/* play icons */}
      <TouchableOpacity
        style={{
          flex: 1,
          padding: 10,
          alignItems: 'center',
        //   backgroundColor:'pink'
        }}
        onPress={onStartPlay}>
        <FontAwesome5Icon name={playing ? 'pause' : 'play'} size={20} />
      </TouchableOpacity>

      {/* Progress.Bar */}
      <View
        style={{
          flex: 7,
          paddingHorizontal: 10,
          justifyContent: 'center',
          marginTop: verticalScale(20),
        //   backgroundColor:'red'
        }}>
        {state.playTime ? (
          <Progress.Bar
            progress={state.currentPositionSec / state.currentDurationSec}
            height={2}
            color={colors.white}
            width={130}
          />
        ) : (
          <Progress.Bar
            progress={1}
            height={2}
            color={colors.white}
            width={130}
          />
        )}
        <Spacer height={10} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: scale(2),
          }}>
          <CustomText
            label={
              state?.recordTime
                ? state?.recordTime
                : state?.playTime
            }
            color={colors.white}
          />
          <CustomText label={'Oct-7'} color={colors.white} />
        </View>
      </View>
      {/* image */}
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        //   backgroundColor:'brown'
        }}>
        <View
          style={{height: 40, width: 40, overflow: 'hidden', borderRadius: 20}}>
          <Image source={profileImages.profile01} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

export default CustomAudio;

const styles = StyleSheet.create({});
