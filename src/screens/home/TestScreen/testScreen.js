import {View, Text,StyleSheet,TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import TrackPlayer from 'react-native-track-player';
import songs from '../../../utils/songs';
import { useIsFocused } from '@react-navigation/native';

const TestScreen = () => {
  const tracks = [
    {
      id: 1,
      url: songs.song,
      title: 'New Song',
    },
    {
      id: 2,
      url: songs.song,
      title: 'Well Song',
    },
    
  ];
  TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],
  });

  const setupTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
    } catch (error) {
      console.log(error);
    }
  };
const isFocused=useIsFocused();
  useEffect(() => {
    setupTrackPlayer();
    // return () => TrackPlayer.destroy();
  }, [isFocused]);  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'}  /> 
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => TrackPlayer.pause()}>
        <Text style={styles.text}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.play()}>
        <Text style={styles.text}>Play</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.row}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => TrackPlayer.skipToPrevious()}>
        <Text style={styles.text}>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => TrackPlayer.skipToNext()}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  btn: {
    backgroundColor: '#ff0044',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 160,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
export default TestScreen;

// // import { View, Text, Pressable, PermissionsAndroid, Image, TouchableOpacity } from 'react-native';
// // import React, { useEffect, useState } from 'react';
// // import { colors } from '../../../utils/Colors';
// // import AudioRecorderPlayer, {
// //     AVEncoderAudioQualityIOSType,
// //     AVEncodingOption,
// //     AudioEncoderAndroidType,
// //     AudioSet,
// //     AudioSourceAndroidType,
// //     PlayBackType,
// //     RecordBackType,
// // } from 'react-native-audio-recorder-player';
// // import * as Progress from 'react-native-progress';
// // import { color } from 'react-native-elements/dist/helpers';
// // import profileImages from '../../../../assets/Profile_images';
// // import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// // import CustomText from '../../../components/CustomText';
// // import { Spacer } from '../../../components/Spacer';
// // import { scale, verticalScale } from 'react-native-size-matters';

// // const audioRecorderPlayer = new AudioRecorderPlayer();
// // const RudioRecoder = () => {
// //     const [state, setState] = useState({ recordTime: '00:00:00' });
// //     const [voiceProgress, setVoiceProgress] = useState(0);
// //     const [playing, setPlaying] = useState(false);

// //     useEffect(() => {
// //         console.log(state);
// //         if (state.currentPositionSec / state.currentDurationSec === 1) {
// //             setPlaying(false)
// //         }
// //     }, [state]);

// //     onStartRecord = async () => {
// //         if (Platform.OS === 'android') {
// //             try {
// //                 const grants = await PermissionsAndroid.requestMultiple([
// //                     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
// //                     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
// //                     PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
// //                 ]);

// //                 console.log('write external stroage', grants);

// //                 if (
// //                     grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
// //                     PermissionsAndroid.RESULTS.GRANTED &&
// //                     grants['android.permission.READ_EXTERNAL_STORAGE'] ===
// //                     PermissionsAndroid.RESULTS.GRANTED &&
// //                     grants['android.permission.RECORD_AUDIO'] ===
// //                     PermissionsAndroid.RESULTS.GRANTED
// //                 ) {
// //                     console.log('permissions granted');
// //                 } else {
// //                     console.log('All required permissions not granted');
// //                     return;
// //                 }
// //             } catch (err) {
// //                 console.warn(err);
// //                 return;
// //             }
// //         }
// //         const result = await audioRecorderPlayer.startRecorder();
// //         audioRecorderPlayer.addRecordBackListener(e => {
// //             setState({
// //                 recordSecs: e.currentPosition,
// //                 recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
// //             });
// //             return;
// //         });
// //         console.log(result);
// //     };

// //     onStopRecord = async () => {
// //         const result = await audioRecorderPlayer.stopRecorder();
// //         audioRecorderPlayer.removeRecordBackListener();
// //         // setState({
// //         //     recordSecs: 0,
// //         // });
// //         console.log(result);
// //     };

// //     onStartPlay = async () => {
// //         console.log('onStartPlay');
// //         if (!playing) {
// //             setPlaying(!playing)
// //             const msg = await audioRecorderPlayer.startPlayer();
// //             console.log(msg);
// //             audioRecorderPlayer.addPlayBackListener(e => {
// //                 setState({
// //                     currentPositionSec: e.currentPosition,
// //                     currentDurationSec: e.duration,
// //                     playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
// //                     duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
// //                 });
// //                 return;
// //             });
// //         } else {
// //             setPlaying(!playing)
// //             onStopPlay()
// //         }
// //     };

// //     onPausePlay = async () => {
// //         await audioRecorderPlayer.pausePlayer();
// //     };

// //     onStopPlay = async () => {
// //         console.log('onStopPlay');
// //         audioRecorderPlayer.stopPlayer();
// //         audioRecorderPlayer.removePlayBackListener();
// //     };

// //     // Main Function
// //     // Main Function
// //     return (
// //         <View
// //             style={{
// //                 flex: 1,
// //                 backgroundColor: colors.gray,
// //                 justifyContent: 'center',
// //                 alignItems: 'center',
// //             }}>
// //             <View
// //                 style={{
// //                     paddingVertical: 15,
// //                     justifyContent: 'center',
// //                     alignItems: 'center',
// //                 }}>
// //                 <Text style={{ fontSize: 22, fontWeight: 'bold', paddingVertical: 10 }}>
// //                     {state.recordTime ? state.recordTime : state.playTime}
// //                 </Text>
// //                 {state.playTime ? (
// //                     <Progress.Bar
// //                         progress={state.currentPositionSec / state.currentDurationSec}
// //                         height={2}
// //                         color={colors.white}
// //                         width={200}
// //                     />
// //                 ) : (
// //                     <></>
// //                 )}
// //             </View>

// //             <View
// //                 style={{
// //                     flexDirection: 'row',
// //                     justifyContent: 'space-evenly',
// //                     width: '100%',
// //                 }}>
// //                 <MyBtn title={'Record'} onPress={onStartRecord} />
// //                 {/* <MyBtn title={"Resume"} /> */}
// //                 <MyBtn title={'Stop'} onPress={onStopRecord} />
// //                 {/* <MyBtn title={"Pause"} /> */}
// //                 <MyBtn title={'Play'} onPress={onStartPlay} />
// //             </View>

// //             <Spacer height={100} />

// //             {/* Voice Chat Components */}
// //             <View
// //                 style={{
// //                     padding: 10,
// //                     height: 80,
// //                     width: '80%',
// //                     borderRadius: 20,
// //                     backgroundColor: colors.placeholder,
// //                     justifyContent: 'center',
// //                     alignItems: 'center',
// //                     flexDirection: 'row'
// //                 }}>
// //                 {/* play icons */}
// //                 <TouchableOpacity style={{
// //                     flex: 1, padding: 10,
// //                     alignItems: 'center',
// //                 }} onPress={onStartPlay} >
// //                     <FontAwesome5Icon name={playing ? 'pause' : 'play'} size={20} />
// //                 </TouchableOpacity>

// //                 {/* Progress.Bar */}
// //                 <View style={{
// //                     flex: 7, paddingHorizontal: 10,
// //                     justifyContent: 'center',
// //                     marginTop: verticalScale(10)
// //                 }}>
// //                     <Progress.Bar
// //                         progress={state.playTime ? (state?.currentPositionSec / state?.currentDurationSec) : (1)}
// //                         height={3}
// //                         color={colors.white}
// //                         width={scale(155)}
// //                     />
// //                     <Spacer height={10} />
// //                     <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: scale(2) }}>
// //                         <CustomText label={state.recordTime ? state.recordTime : state.playTime} color={colors.white} />
// //                         <CustomText label={'Oct-7'} color={colors.white} />
// //                     </View>
// //                 </View>
// //                 {/* image */}
// //                 <View style={{
// //                     flex: 2, justifyContent: 'center',
// //                     alignItems: 'center',
// //                 }}>
// //                     <View style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 25 }}>
// //                         <Image source={profileImages.profile01} resizeMode="contain" />
// //                     </View>
// //                 </View>
// //             </View>
// //         </View>
// //     );
// // };

// // export default RudioRecoder;

// // const MyBtn = ({ title, onPress }) => (
// //     <Pressable
// //         style={({ pressed }) => [
// //             {
// //                 backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
// //             },
// //             {
// //                 padding: 10,
// //                 maxWidth: 100,
// //                 height: 50,
// //                 justifyContent: 'center',
// //             },
// //         ]}
// //         onPress={onPress}>
// //         <Text style={{ color: colors.black }}>{title}</Text>
// //     </Pressable>
// // );

// import {View, Text, Button} from 'react-native';
// import React, { useEffect } from 'react';
// import profileImages from '../../../../assets/Profile_images';
// // import TrackPlayer from 'react-native-track-player';

// import songs from '../../../utils/songs';

// const RudioRecoder = () => {
//   const start = async () => {
//     // Set up the player
//     // await TrackPlayer.setupPlayer();
//     // Add a track to the queue
//     // await TrackPlayer.add({
//     //     id: 'trackId',
//     //     url: 'https://firebasestorage.googleapis.com/v0/b/solemate-94d90.appspot.com/o/audioFiles%2F7c73fe97-a05a-4cd5-9d32-3939e08a0240?alt=media&token=6d722650-ac9c-4d57-b90f-c8c841336780',
//     //     title: 'Track Title',
//     //     artist: 'Track Artist',
//     //     artwork: profileImages.prettyFace,
//     // });
//     // Start playing it
//     // await TrackPlayer.play();
//   };
//   try {
//     // play the file tone.mp3
//     // SoundPlayer.playSoundFile('song', 'mp3');
//     // or play from url
//     SoundPlayer.playUrl(songs.song);
//   } catch (e) {
//     console.log(`cannot play the sound file`, e);
//   }
// //   useEffect(() => {
// //   }, []);

//   return (
//     <View>
//       <Button title="Play" onPress={start} />
//     </View>
//   );
// };

// export default RudioRecoder;
