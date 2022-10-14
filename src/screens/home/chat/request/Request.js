import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderConatiner from './Molecules/HeaderConatiner';
import RequestContainer from './Molecules/RequestContainer';
import {getAuthId} from '../../../../services/FirebaseAuth';
import {getAuthRequest} from '../../../../services/request';
const Request = ({navigation}) => {
  const [authId, setAuthId] = useState('');
  const [requestData, setRequestData] = useState({
    request: [],
  });
  useEffect(() => {
    onAuthRequest();
  }, []);
  // get user All Request
  const onAuthRequest = async () => {
    // get authId to local storage
    await getAuthId().then(id => {
      setAuthId(id);
      getAuthRequest(id, setRequestData);
    });
  };
  const RequestDetail = ({item, index}) => {
    return (
      <View>
        {/* request container */}
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
      {/* header */}
      <HeaderConatiner label="Request" />
      <View style={{height: 300}}>
        {/* request flatlist */}
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
