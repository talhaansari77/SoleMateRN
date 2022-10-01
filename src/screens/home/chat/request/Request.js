import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderConatiner from './Molecules/HeaderConatiner';
import RequestContainer from './Molecules/RequestContainer';
import {verticalScale} from 'react-native-size-matters';
import {getAuthId} from '../../../../services/FirebaseAuth';
import {getAuthRequest} from '../../../../services/request';
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
    onAuthRequest();
  }, []);

  const onAuthRequest = async () => {
    await getAuthId().then(id => {
      setAuthId(id);
      getAuthRequest(id, setRequestData);
    });
  };
  const RequestDetail = ({item, index}) => {
    console.log('Itemdata', item.from);
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
      <View>
        <FlatList
          data={requestData?.request}
          keyExtractor={item => item.id}
          renderItem={RequestDetail}
        />
      </View>
    </SafeAreaView>
  );
};

export default Request;

const styles = StyleSheet.create({});
