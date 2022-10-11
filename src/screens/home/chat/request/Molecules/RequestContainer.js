import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import commonStyles from '../../../../../utils/CommonStyles';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import profileImages from '../../../../../../assets/Profile_images';
import CustomText from '../../../../../components/CustomText';
import {colors} from '../../../../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getSpecificeUser} from '../../../../../services/FirebaseAuth';
import Component from '../../../../../components/FastImage';
import moment from 'moment';

const RequestContainer = ({
  name,
  age,
  qualification,
  location,
  onChating,
  item,
  userId,
}) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  var a = moment();
  var b = moment(userData?.dob, 'YYYY');
  var age = a.diff(b, 'years');

  const getUser = async () => {
    // const user = await getSpecificeUser(userId);
    // console.log('UserData', user);

    getSpecificeUser(userId).then(data => {
      setUserData(data);
    });

    // if (user) {
    //   setUserData(user);
    // }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onChating}
      style={styles.mainConatiner}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imgContainer}>
        <Component
            // resizeMode="cover"

            style={{height: '100%', width: '100%'}}
            uniqueKey={Math.random()}
            source={{uri:userData?.images?.[0]}}
          />
          {/* <Image
            resizeMode="cover"
            style={commonStyles.img}
            source={profileImages.man}
          /> */}
        </View>
        <View style={styles.detailContainer}>
          <CustomText
            label={userData?.firstName}
            numberOfLines={1}
            fontFamily="ProximaNova-Bold"
            fontSize={verticalScale(10)}
            // marginLeft={verticalScale(5)}
          />
          <View style={styles.subDetail}>
            <CustomText
              label={age}
              fontFamily={'ProximaNova-Regular'}
              color={colors.halfGray}
              numberOfLines={1}
              fontSize={verticalScale(10)}
              // marginLeft={verticalScale(5)}
            />
            <View style={styles.line} />
            <CustomText
              label={userData?.location}
              fontFamily={'ProximaNova-Regular'}
              numberOfLines={1}
              color={colors.halfGray}
              fontSize={verticalScale(10)}
              // marginLeft={verticalScale(5)}
            />
            <View style={styles.line} />
            <CustomText
              label={userData?.occupation}
              fontFamily={'ProximaNova-Regular'}
              color={colors.halfGray}
              numberOfLines={1}
              fontSize={verticalScale(10)}
              // marginLeft={verticalScale(5)}
            />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', paddingTop: verticalScale(10)}}>
        <Ionicons
          name="play-circle"
          size={moderateScale(25)}
          color={colors.darkOrange}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RequestContainer;

const styles = ScaledSheet.create({
  mainConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10@s',
    paddingVertical: '20@vs',
  },
  imgContainer: {
    width: '45@vs',
    height: '45@vs',
    borderRadius: '45@s',
    overflow: 'hidden',
  },
  detailContainer: {
    justifyContent: 'space-between',
    padding: '2@s',
    paddingLeft: '15@s',
    width: '45%',
  },
  subDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 1.5,
    height: 15,
    backgroundColor: colors.halfGray,
    marginHorizontal: '5@s',
  },
});
