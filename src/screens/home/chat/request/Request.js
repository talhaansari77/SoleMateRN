import {StyleSheet, Text, View, SafeAreaView, FlatList,PermissionsAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderConatiner from './Molecules/HeaderConatiner';
import RequestContainer from './Molecules/RequestContainer';
import {verticalScale} from 'react-native-size-matters';
import {getAuthId} from '../../../../services/FirebaseAuth';
import {getAuthRequest} from '../../../../services/request';
import CustomVoiceMessage from '../../../../components/CustomVoiceMessage';
import moment from 'moment';

// name,age,qualification,location

const userRequest = [
  {
    id: 1,
    name: 'Samer',
    age: '28',
    qualification: 'QA Engineer',
    location: 'California',
  },
  {
    id: 2,
    name: 'Omar',
    age: '28',
    qualification: 'Software Engineer',
    location: 'New Jersey',
  },
];

const Request = ({navigation}) => {
  const [authId, setAuthId] = useState('');
  const [seenStatus, setSeenStatus] = useState(true);

  const [requestData, setRequestData] = useState({
    request: [],
  });

  // console.log('RequestData', requestData);

  useEffect(() => {
    const requestPermissions = async () => {
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
            console.log('Permissions granted');
          } else {
            console.log('All required permissions not granted');
            return;
          }
        } catch (err) {
          console.warn(err);
          return;
        }
      }
    };

    requestPermissions();
  }, []);

  useEffect(() => {
    onAuthRequest();
  }, []);

  const onAuthRequest = async () => {
    await getAuthId().then(id => {
      setAuthId(id);
      getAuthRequest(id, setRequestData);
    });
  };
  const RequestDetail = ({item, index}) => {
    return (
      <View>
        <RequestContainer
          item={item}
          userId={item.to == authId ? item.from : item.to}
          onChating={() => {
            navigation.navigate('Chat', {
              otherUserId: item?.from == authId ? item.to : item.from,
              authId: item?.from != authId ? item.to : item.from,
              SeenStatus: true,
            });
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderConatiner label="Request" />
      <View style={{height: 300}}>
        <FlatList
          data={requestData?.request}
          keyExtractor={item => item.id}
          renderItem={RequestDetail}
        />
      </View>
      <CustomVoiceMessage />
    </SafeAreaView>
  );
};

export default Request;

const styles = StyleSheet.create({});
