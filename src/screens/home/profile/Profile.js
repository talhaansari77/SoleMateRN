import {View, ScrollView, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import styled from 'react-native-styled-components';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import moment from 'moment';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';

import {Divider} from 'react-native-elements';
import Header from './molecules/Header';
import ProfileImage from './molecules/ProfileImage';
import AboutMeText from './molecules/AboutMeText';
import IceBreakQ from './molecules/IceBreakQ';
import ProfileTags from './molecules/ProfileTags';
import Infos from './molecules/Infos';
import ActionBtn from './molecules/ActionBtn';
import icons from '../../../../assets/icons';
import {getAuthId, getSpecificeUser} from '../../../services/FirebaseAuth';
import {checkUserRequest, createRequest} from '../../../services/request';
import {Spacer} from '../../../components/Spacer';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fromNow } from '../../../services/FirebaseAuth';

// user basic info

const basicInfo = [
  {
    id: 1,
    title: 'Current Location',
    label: 'California, US',
    icon: icons.location,
  },
  {id: 2, title: 'Family Origin', label: 'Us', icon: icons.featherFlag},
  {id: 3, title: 'Height', label: "5'6", icon: icons.resizeHeight},
  {id: 4, title: 'Language', label: 'English', icon: icons.language},
];

const Profile = ({navigation, route, actions = true, getApp = false}) => {
  const [authID, setAuthID] = useState('');
  const [authData, setAuthData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState('');
  const isFocused = useIsFocused();

  var a = moment();
  var b = moment(authData?.dob, 'YYYY');
  var age = a.diff(b, 'years');

  // remove user id  in storage if user click any tab

  useFocusEffect(
    React.useCallback(() => {
      return async () => {
        console.log('blur');
        await AsyncStorage.removeItem('otherViewProfile');
      };
    }, []),
  );

  useEffect(() => {
    // get auth data in firebase
    getAuthData();
  }, [isFocused, requestId == null]);

  // get auth data function

  const getAuthData = async () => {
    let otherViewProfile = await AsyncStorage?.getItem('otherViewProfile');
    let requestProfile = await AsyncStorage?.getItem('requestId');
    // let generateLinkTime = await AsyncStorage?.getItem('generateLinkTime');


    // const response = fromNow(generateLinkTime).includes("day");





    // console.log('generateLinkTime', response);

    setRequestId(requestProfile);
    // console.log('otherViewProfile', requestProfile);

    setLoading(true);
    await getAuthId().then(id => {
      setAuthID(id);

      if (otherViewProfile) {
        console.log('otherUserId');
        getSpecificeUser(otherViewProfile).then(data => {
          setAuthData(data);
          setLoading(false);
        });
      } else if (requestProfile) {
        // if(response){
        //   alert("Link is Expired")
      

        // }
        // else{
          console.log('requestId', requestProfile);
          getSpecificeUser(requestProfile).then(data => {
            setAuthData(data);
            setLoading(false);
          });
        // }
       
      } else {
        console.log('authUserId');
        getSpecificeUser(id).then(data => {
          setAuthData(data);
          setLoading(false);
        });
      }
    });
  };

  // cancel request
  const onCancel = async () => {
    setLoading(true);
    try {
      // remove request in storage
      await AsyncStorage.removeItem('requestId');
      Toast.show('request Cancel');

      navigation.reset({
        index: 0,
        routes: [{name: 'MessagingStack'}],
      });

      setLoading(false);
    } catch (error) {}
  };

  // accept request viva link

  const onAccept = async () => {
    if (requestId) {
      console.log('RequestDataIS', requestId);

      // check user request
      const notesStatus = await checkUserRequest(authID, requestId);
      // if user already accept  request  the show toast
      if (!notesStatus) {
        const requestData = {
          from: authID,
          to: requestId,
          relationStatus: 0,
          lastMessage: {},
        };
        // create user request
        await createRequest(requestData);
        Toast.show('request accept');
        await AsyncStorage.removeItem('requestId');

        navigation.reset({
          index: 0,
          routes: [{name: 'MessagingStack'}],
        });
      } else {
        alert('You already in contact with');
        Toast.show('You already in contact with');
        await AsyncStorage.removeItem('requestId');
        navigation.reset({
          index: 0,
          routes: [{name: 'MessagingStack'}],
        });
      }
    }
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingVertical: verticalScale(Platform.OS == 'ios' ? 25 : 0),
          paddingBottom: 0,
          flex: 1,
        }}>
        {/* Actions */}
        {requestId ? (
          <ActionBtn
            handleCancle={() => {
              onCancel();
            }}
            handleAccept={() => {
              onAccept();
            }}
          />
        ) : (
          <></>
        )}

        {/* Get The App */}

        {/* <GetAppBtn getApp={requestId} /> */}

        <Header navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileImage
            showName
            name={authData?.firstName}
            age={age}
            uniqueKey={Math.random()}
            location={authData?.location}
            src={{uri: authData?.images?.image1}}
            loading={loading}
          />

          {/* About Me */}
          <AboutMeText aboutMe={authData?.aboutMe} />
          <Divider />
          {/* Ice Break Question*/}
          <IceBreakQ icebreaker={authData?.iceBreakerQ} />
          <Divider />
          <ProfileImage
            src={{uri: authData?.images?.image2}}
            loading={loading}
          />
          <ProfileTags title={'Personality'} data={authData?.personality} />
          <Divider />
          <Spacer height={20} />
          <Infos
            title={'Basic Info'}
            icon={icons.location}
            icon1={icons.featherFlag}
            label={'Current Location'}
            label1={'Family Origin'}
            name={authData?.location}
            name1={authData?.familyOrigin}
            infoList={basicInfo}
          />

          <Infos
            icon={icons.resizeHeight}
            icon1={icons.language}
            label={'Height'}
            label1={'Language'}
            name={authData?.height}
            name1={authData?.language}
            infoList={basicInfo}
          />
          {/*ProfileImage*/}
          <ProfileImage
            src={{uri: authData?.images?.image3}}
            uniqueKey={Math.random()}
            loading={loading}
          />

          {/* favorite food */}
          {/* <IceBreakQ   icebreaker={authData?.iceBreakerQ}
          /> */}
          {/* <FavFoodText   icebreaker={authData?.iceBreakerQ}
          /> */}
          <Divider />
          {/* Education and Career */}
          <Spacer height={20} />

          <Infos
            title={'Education and Career'}
            icon={icons.work}
            icon1={icons.education}
            label={'Occupation'}
            label1={'Education'}
            name={authData?.occupation}
            name1={authData?.language}
            infoList={basicInfo}
            icon1Width={12}
            icon1Height={12}
          />

          {/* ProfileImage */}
          <ProfileImage
            src={{uri: authData?.images?.image4}}
            loading={loading}
          />

          {/* Religiousness */}
          <Spacer height={20} />
          <Infos
            title={'Religiousness'}
            icon={icons.moonStar}
            icon1={icons.bookOpen}
            label={'Religion'}
            label1={'Religiousity'}
            name={authData?.religion}
            name1={authData?.religiousity}
            infoList={basicInfo}
            icon2Width={14}
            icon2Height={14}
            icon1Width={12}
            icon1Height={12}
          />

          <Infos
            icon={icons.partlySunny}
            icon1={icons.expandArrow}
            label={'Prayer level'}
            label1={'Sector'}
            name={authData?.prayerLevel}
            name1={authData?.sector}
            infoList={basicInfo}
            icon2Width={12}
            icon2Height={12}
          />

          <Divider />
          {/* Characteristics */}
          <ProfileTags
            title={'Characteristics'}
            data={authData?.characteristics}
            uniqueKey={Math.random()}
          />

          <Divider />
          <Spacer height={30} />
          {/* Partner Expectation */}

          <Infos
            title={'Partner Expectation '}
            icon={icons.heartBeatBlack}
            icon1={icons.heartBlack}
            label={'Marital History'}
            label1={'Marital Timing'}
            name={authData?.martialHistory}
            name1={authData?.martialTimming}
            infoList={basicInfo}
          />

          <Infos
            icon={icons.babayCarriage}
            icon1={icons.baby}
            label={'Want Kind?'}
            label1={'Has Children?'}
            name={authData?.whatKids}
            name1={authData?.hasKids}
            infoList={basicInfo}
          />
          <Infos
            icon={icons.locationEdit}
            icon1={icons.work}
            label={'Willing to Relocate'}
            label1={'Job Status'}
            name={authData?.willRelocate}
            name1={authData?.jobStatus}
            infoList={basicInfo}
            icon2Width={12}
            icon2Height={12}
          />

          <Infos
            icon={icons.drink}
            icon1={icons.smoking}
            label={'Drinking'}
            label1={'Smoking'}
            name={authData?.drinking}
            name1={authData?.smoking}
            infoList={basicInfo}
            icon1Width={12}
            icon1Height={12}
          />

          {/* End */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

export const Container = styled(View, {
  width: '100%',
  padding: moderateScale(20),
  paddingBottom: 0,
  flex: 1,
});
export const PaddingLeft = styled(View, {
  paddingLeft: scale(25),
});
