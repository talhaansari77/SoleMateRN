import {View, Dimensions, ActivityIndicator} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import FastImage from '../../../../components/FastImage';

const ProfileImage = ({
  src,
  loading,
  name,
  age,
  location,
  showName,
  uniqueKey,
}) => {
  return (
    <>
      {/* ProfileImage */}
      <View
        style={{
          height: Dimensions.get('window').height / 2.3,
          justifyContent: loading ? 'center' : null,
          alignItems: loading ? 'center' : null,
        }}>
        {loading ? (
          <ActivityIndicator color={colors.primary} size="large" />
        ) : (
          <FastImage
            // resizeMode="cover"

            style={{height: '100%', width: '100%'}}
            uniqueKey={uniqueKey}
            source={src}
          />
        )}
        {showName ? (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              padding: moderateScale(25),
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '70%',
              }}>
              <CustomText
                label={name}
                numberOfLineschildren={1}
                children={name ? ' - ' : null}
                color={colors.white}
                fontFamily={'ProximaNova-Bold'}
                fontSize={18}
              />
              <CustomText
                label={age}
                color={colors.white}
                fontFamily={'ProximaNova-Bold'}
                fontSize={18}
              />
            </View>

            <CustomText
              color={colors.white}
              numberOfLines={1}
              fontFamily={'ProximaNova-Bold'}
              fontSize={18}>
              {location}
            </CustomText>
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default ProfileImage;
