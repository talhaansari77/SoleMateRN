import { View, Text, Pressable, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../../utils/Colors';
import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType,
    PlayBackType,
    RecordBackType,
} from 'react-native-audio-recorder-player';
import * as Progress from 'react-native-progress';


const audioRecorderPlayer = new AudioRecorderPlayer();
const RudioRecoder = () => {

    const [state, setState] = useState({ recordTime: "00:00:00" })
    const [voiceProgress, setVoiceProgress] = useState(0)

    useEffect(() => {
        console.log(state)
    }, [state])


    onStartRecord = async () => {
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
        const result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
            setState({
                recordSecs: e.currentPosition,
                recordTime: audioRecorderPlayer.mmssss(
                    Math.floor(e.currentPosition),
                ),
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
        const msg = await audioRecorderPlayer.startPlayer();
        console.log(msg);
        audioRecorderPlayer.addPlayBackListener((e) => {
            setState({
                currentPositionSec: e.currentPosition,
                currentDurationSec: e.duration,
                playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
                duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
            });
            return;
        });
    };

    onPausePlay = async () => {
        await audioRecorderPlayer.pausePlayer();
    };

    onStopPlay = async () => {
        console.log('onStopPlay');
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
    };

    // Main Function
    // Main Function
    return (
        <View style={{ flex: 1, backgroundColor: colors.gray, justifyContent: "center", alignItems: "center" }}>
            <View style={{ paddingVertical: 15, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", paddingVertical: 10 }}>
                    {state.recordTime ? state.recordTime : state.playTime}
                </Text>
                {state.playTime ?

                    <Progress.Bar progress={state.currentPositionSec / state.currentDurationSec} height={2} color={colors.white} width={200} />
                    :
                    <></>
                }

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: '100%' }}>
                <MyBtn title={"Record"} onPress={onStartRecord} />
                {/* <MyBtn title={"Resume"} /> */}
                <MyBtn title={"Stop"} onPress={onStopRecord} />
                {/* <MyBtn title={"Pause"} /> */}
                <MyBtn title={"Play"} onPress={onStartPlay} />
            </View>

        </View>
    )
}

export default RudioRecoder

const MyBtn = ({ title, onPress }) => (
    <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed
                    ? 'rgb(210, 230, 255)'
                    : 'white',
            },
            {
                padding: 10,
                maxWidth: 100,
                height: 50,
                justifyContent: "center"
            }
        ]}
        onPress={onPress}

    >
        <Text style={{ color: colors.black }}>
            {title}
        </Text>
    </Pressable>
)



