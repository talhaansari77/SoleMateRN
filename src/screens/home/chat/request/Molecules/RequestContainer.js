import {View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import CustomText from '../../../../../components/CustomText';
import {colors} from '../../../../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getSpecificeUser} from '../../../../../services/FirebaseAuth';
import Component from '../../../../../components/FastImage';
import moment from 'moment';

const RequestContainer = ({age, onChating, userId}) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  var a = moment();
  var b = moment(userData?.dob, 'YYYY');
  var age = a.diff(b, 'years');

  const getUser = async () => {
    getSpecificeUser(userId).then(data => {
      setUserData(data);
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onChating}
      style={styles.mainConatiner}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imgContainer}>
          <Component
            style={{height: '100%', width: '100%'}}
            uniqueKey={Math.random()}
            source={{uri: userData?.images?.image1}}
          />
        </View>
        <View style={styles.detailContainer}>
          <CustomText
            label={userData?.firstName}
            numberOfLines={1}
            fontFamily="ProximaNova-Bold"
            fontSize={verticalScale(10)}
          />
          <View style={styles.subDetail}>
            <CustomText
              label={age}
              fontFamily={'ProximaNova-Regular'}
              color={colors.halfGray}
              numberOfLines={1}
              fontSize={verticalScale(10)}
            />
            <View style={styles.line} />
            <CustomText
              label={userData?.basicInfo?.[0]?.status}
              fontFamily={'ProximaNova-Regular'}
              numberOfLines={1}
              color={colors.halfGray}
              fontSize={verticalScale(10)}
            />
            <View style={styles.line} />
            <CustomText
              label={userData?.education?.[0]?.status}
              fontFamily={'ProximaNova-Regular'}
              color={colors.halfGray}
              numberOfLines={1}
              fontSize={verticalScale(10)}
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
    width: '60%',
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
