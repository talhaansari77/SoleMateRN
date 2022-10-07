import {
  StyleSheet,
  Image,
  Platform,
  useWindowDimensions,
  PermissionsAndroid,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import RNFetchBlob from 'rn-fetch-blob';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../utils/Colors';
import SupportCard from './SupportCard';


const audioRecorderPlayer = new AudioRecorderPlayer();

const CustomVoiceMessage = () => {
  const screenWidth = useWindowDimensions().width;

  const dirs = RNFetchBlob.fs.dirs;
  const path = Platform.select({
    ios: 'solMateRecording.m4a',
    android: `${dirs.CacheDir}/solMateRecording.mp3`,
  });
  const [state, setState] = useState({
    recordSecs: 0,
    recordTime: '00:00:00',
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00:00',
    duration: '00:00:00',
    recorderState: 'init',
  });

  let playWidth =
    (state.currentPositionSec / state.currentDurationSec) * (screenWidth - 56);

  if (!playWidth) {
    playWidth = 0;
  }

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

    console.log(`uri: ${uri}`);
  };
  const onPauseRecord = async () => {
    try {
      setState({...state, recorder: 'pause'});
      const r = await audioRecorderPlayer.pauseRecorder();
      console.log('onPauseRecord try', r);
    } catch (err) {
      console.log('onPauseRecord catch', err);
    }
  };
  const onResumeRecord = async () => {
    try {
      const r = await audioRecorderPlayer.resumeRecorder();
      console.log('onResumeRecord try', r);
      setState({...state, recorder: 'play'});
    } catch (error) {
      console.log('onResumeRecord catch', error);
    }
  };
  const onStopRecord = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      console.log('onStopRecord try', result);

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
  const onStartPlay = async () => {
    const msg = await audioRecorderPlayer.startPlayer();
    const volume = await audioRecorderPlayer.setVolume(1.0);
    console.log(`file: ${msg}`, `volume: ${volume}`);
    audioRecorderPlayer.addPlayBackListener(e => {
      setState({
        ...state,
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        recorderState: 'startPlayer',
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };
  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setState({...state, recorderState: 'stopPlayer'});
  };

  useEffect(() => {
    if (state.duration == state.playTime && state.recorderState != 'init') {
      onStopPlay();
    }
  }, [state.playTime]);

  return (
    <>
       <SupportCard
        style={{ marginBottom: 5, elevation: 2 }}
        onPress={onStartRecord}
        title={"Add your voice note"}
        left={
          <MaterialCommunityIcons
          name="microphone-outline"
          size={moderateScale(30)}
          color={colors.primary}
        />
         
        }
      />


      {/* <TouchableOpacity onPress={onStartRecord} activeOpacity={0.6}>
        <MaterialCommunityIcons
          name="microphone-outline"
          size={moderateScale(30)}
          color={colors.primary}
        />
      </TouchableOpacity> */}
      {state.recorderState === 'recordStart' && (
        <View>
          <Text> Recording {state?.recordTime}</Text>
          <Button
            onPress={onStopRecord}
            containerStyle={{marginTop: 10, marginBottom: 10}}
            text={'Stop'}
            title={'Stop'}
          />
        </View>
      )}
      {console.log('-----StateRecorded', state.recorderState)}
      {state.recorderState == 'recordStop' ||
      state.recorderState == 'stopPlayer' ? (
        <>
            <SupportCard
            style={{ marginBottom: 5, elevation: 2 }}
            onPress={onStartPlay}
            title={"Play Recorded Audio"}
            left={
              <MaterialCommunityIcons
              name="microphone-outline"
              size={moderateScale(30)}
              color={colors.primary}
            />
            }
            />
          
          {/* <TouchableOpacity onPress={onStartPlay} activeOpacity={0.6}>
            <MaterialCommunityIcons
              name="microphone-outline"
              size={moderateScale(30)}
              color={colors.primary}
            />
          </TouchableOpacity> */}
        </>
      ) : (
        <View />
      )}

      {state.recorderState === 'startPlayer' && (
        <>
          <Text style={{alignSelf: 'center', marginBottom: 5}}>
            {state.playTime}
          </Text>


          <SupportCard
            style={{ marginBottom: 5, elevation: 2 }}
            onPress={onStopPlay}
            title={"Stop Recorded Audio"}
            left={
              <MaterialCommunityIcons
              name="microphone-outline"
              size={moderateScale(30)}
              color={colors.primary}
            />
            }
          />

          {/* <TouchableOpacity onPress={onStartPlay} activeOpacity={0.6}>
            <MaterialCommunityIcons
              name="microphone-outline"
              size={moderateScale(30)}
              color={colors.primary}
            />
          </TouchableOpacity> */}

       
        </>
      )}
    </>
  );
};
export default CustomVoiceMessage;

const styles = StyleSheet.create({});