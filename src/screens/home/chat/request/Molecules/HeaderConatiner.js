import {SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomText from '../../../../../components/CustomText';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../../../utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';
import {getAuthId, saveUser} from '../../../../../services/FirebaseAuth';
import moment from 'moment';
import {getSpecificeUser} from '../../../../../services/FirebaseAuth';


const HeaderConatiner = ({label, back, setting}) => {
  const [authData, setauthData] = useState({});

  useEffect(() => {
    // get user Data
    getAuthData();
  }, []);

  const getAuthData = async () => {
    const id = await getAuthId();
// get user all data
    getSpecificeUser(id).then(data => {
      setauthData(data);
    });
  };
  // generate link using firabase deeplinking 
  const generateLink = async () => {
    const id = await getAuthId();
    // get request time 
    // const time = moment().add(0.1 * 0.1, "hours");
    // const totalTime=time.format("YYYY-MM-DD") + "T" + time.format("HH:mm")

    // let newDate=new Date(moment().add(2, "days").format("YYYY-MM-DD"))
    var newDate = new Date();

    var totalDate=(moment(newDate).add(2,"days").format("YYYY-MM-DD"))


  //  let  letTotalDate= new Date(moment().format(newDate, "YYYY-MM-DD"))

    



    // let DateData=  moment().format(newDate, "YYYY-MM-DD")
    // let ExtendDate=moment(DateData).add(2)

    console.log("NewDataIS",totalDate)

    // let totalDate=

    


    // save user requst time ifuser  share profile the link user 
    await saveUser(id, {requestTime:  totalDate})
    try {
      var link = await dynamicLinks().buildShortLink(
        {
          link: `https://getsolemate.page.link/EwdR?screen=Profile&withApp=true&linkDate=${totalDate}&id=${id}`,
          domainUriPrefix: 'https://getsolemate.page.link',

          // generate  link in android and get  package  name in android foilder
          android: {
            packageName: 'com.Solmate',
            minimumVersion: '18',
          },
          // generate link in ios  and get bundeld in xcode
          ios: {
            appStoreId: '123456789',
            bundleId: 'com.Solmate',
            minimumVersion: '18',
          },
        },
        dynamicLinks.ShortLinkType.DEFAULT,
      );
      return link;
    } catch (error) {
      console.log('error raised', error);
    }
  };

  // save user link link whatsapp and other
  const shareUser = async () => {
// get user age
    var a = moment();
    var b = moment(authData?.dob, 'YYYY');
    var age = a.diff(b, 'years');
   // set user name and age
    const data = authData?.firstName + ' ' + authData?.lastName + ' - ' + age;
// generate  link
    const profileLink = await generateLink();
    const options = {
      url: profileLink,
      message: data,
    };
    await Share.open(options)
      .then(res => {
        console.log('Success', res);
      })
      .catch(err => {
        err && console.log('Error', err);
      });
  };
  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        {
          justifyContent: back && setting ? 'space-between' : 'center',
          paddingHorizontal: back && setting ? scale(10) : 0,
        },
      ]}>
      {back ? (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btnCon}
          onPress={back}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <CustomText
        label={label}
        fontFamily="ProximaNova-Bold"
        fontSize={verticalScale(15)}
      />
      {label === 'Request' ? (
        <TouchableOpacity onPress={shareUser} style={{position: 'absolute', right: scale(12)}}>
          <FontAwesome name="share-square-o" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <></>
      )}

      {setting ? (
        <TouchableOpacity
          style={styles.btnCon}
          activeOpacity={0.6}
          onPress={setting}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default HeaderConatiner;

const styles = ScaledSheet.create({
  mainContainer: {
    shadowColor: '#adb5bd',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 5,
    elevation: 15,
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: '35@vs',
    alignItems: 'center',
    width: '100%',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
  btnCon: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
});
