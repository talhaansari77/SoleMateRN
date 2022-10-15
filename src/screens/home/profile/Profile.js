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
import {fromNow} from '../../../services/FirebaseAuth';
import InfoTag from './molecules/InfoTag';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import InfoRender from './molecules/InfoRender';

// user basic info

const religiousnessIcons = [icons.moonStar, icons.bookOpen, icons.expandArrow];
const educationIcons = [icons.work, icons.education];
const basicInfoIcons = [
  icons.location,
  icons.featherFlag,
  icons.resizeHeight,
  icons.language,
];
const expectationIcons = [
  icons.heartBeatBlack,
  icons.heartBlack,
  icons.babayCarriage,
  icons.baby,
  icons.location,
  icons.smoking,
  icons.work,
  icons.drink,
];

const Profile = ({navigation, route, actions = true, getApp = false}) => {
  const [authID, setAuthID] = useState('');
  const [authData, setAuthData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState('');
  const isFocused = useIsFocused();

  const [linkStatus, setLinkStatus] = useState(false);

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
    getAuthData().then(() => {});
  }, [isFocused, requestId == null]);

  // get auth data function

  const getAuthData = async () => {
    let otherViewProfile = await AsyncStorage?.getItem('otherViewProfile');
    let requestProfile = await AsyncStorage?.getItem('requestId');
    let linkDate = await AsyncStorage?.getItem('linkDate');

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
        var newDate = new Date();

        var currentDate = moment(newDate).format('YYYY-MM-DD');

        if (moment(linkDate).diff(moment(currentDate), 'days') <= 0) {
          alert('Link is Expired');

          RemoveLinkData();

          getSpecificeUser(id).then(data => {
            setAuthData(data);
            setLoading(false);
          });
        } else {
          setLinkStatus(true);
          getSpecificeUser(requestProfile).then(data => {
            setAuthData(data);
            setLoading(false);
          });
        }
      } else {
        console.log('authUserId');
        getSpecificeUser(id).then(data => {
          setAuthData(data);
          setLoading(false);
        });
      }
    });
  };

  const RemoveLinkData = async () => {
    await AsyncStorage.removeItem('requestId');
    await AsyncStorage.removeItem('linkDate');
  };

  // cancel request
  const onCancel = async () => {
    setLoading(true);
    try {
      // remove request in storage
      await AsyncStorage.removeItem('requestId');
      await AsyncStorage.removeItem('linkDate');

      Toast.show('request Cancel');

      navigation.reset({
        index: 0,
        routes: [{name: 'MessagingStack'}],
      });

      setLoading(false);
    } catch (error) {}
  };

  // accept request via link

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
        await AsyncStorage.removeItem('linkDate');

        navigation.reset({
          index: 0,
          routes: [{name: 'MessagingStack'}],
        });
      } else {
        alert('You already in contact with');
        Toast.show('You already in contact with');
        await AsyncStorage.removeItem('requestId');
        await AsyncStorage.removeItem('linkDate');

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
        {linkStatus ? (
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

          
          <InfoRender
            title={'Basic Info'}
            dataList={authData?.basicInfo}
            icons={basicInfoIcons}
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

          <InfoRender
            title={'Education and Career'}
            dataList={authData?.education}
            icons={educationIcons}
          />
          {/* ProfileImage */}
          <ProfileImage
            src={{uri: authData?.images?.image4}}
            loading={loading}
          />

          {/* Religiousness */}
          <Spacer height={20} />
          <InfoRender
            title={'Religiousness'}
            dataList={authData?.religiousness}
            icons={religiousnessIcons}
          />
          <Divider />
          <Spacer height={30} />
          {/* Partner Expectation */}
          <InfoRender
            title={'Partner Expectation'}
            dataList={authData?.partnerExpectations}
            icons={expectationIcons}
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
