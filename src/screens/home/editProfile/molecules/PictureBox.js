import {View, Image, TouchableOpacity, Text} from 'react-native';
import styled from 'react-native-styled-components';
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import profileImages from '../../../../../assets/Profile_images';
import {colors} from '../../../../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {Spacer} from '../../../../components/Spacer';
import {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PictureBox = ({images, setImages}) => {
  console.log('Imagesdata', images);

  return (
    <View style={{height: verticalScale(300)}}>
      <FirstRow>
        <View style={BigFlex_2X}>
          <ImageContainer
            activeOpacity={0.6}
            onPress={() =>
              onClickImage().then(img => {
                setImages({...images, image1: img});
                // console.log("This is Array Object",Object.values((images)))
              })
            }>
            <Text
              style={[
                styles.textImage,
                {
                  color: images.image1 ? colors.white : colors.lightBlack,
                },
              ]}>
              1
            </Text>
            {/* <ImageLabel>1</ImageLabel> */}
            {images.image1 ? (
              <Image source={{uri: images.image1}} style={hw100} />
            ) : (
              <Entypo
                name="plus"
                size={moderateScale(20)}
                color={colors.black}
              />
            )}
          </ImageContainer>
        </View>
        <Spacer width={5} />
        <View style={BigFlex_1X}>
          <ImageContainer
            activeOpacity={0.6}
            onPress={() =>
              onClickImage().then(img => setImages({...images, image2: img}))
            }>
            <Text
              style={[
                styles.textImage,
                {
                  color: images.image2 ? colors.white : colors.lightBlack,
                },
              ]}>
              2
            </Text>
            {/* <ImageLabel>2</ImageLabel> */}
            {images.image2 ? (
              <Image source={{uri: images.image2}} style={hw100} />
            ) : (
              <Entypo
                name="plus"
                size={moderateScale(20)}
                color={colors.black}
              />
            )}
          </ImageContainer>
          <Spacer height={5} />
          <ImageContainer
            activeOpacity={0.6}
            onPress={() =>
              onClickImage().then(img => setImages({...images, image3: img}))
            }>
            <Text
              style={[
                styles.textImage,
                {
                  color: images.image3 ? colors.white : colors.lightBlack,
                },
              ]}>
              3
            </Text>
            {images.image3 ? (
              <Image source={{uri: images.image3}} style={hw100} />
            ) : (
              <Entypo
                name="plus"
                size={moderateScale(20)}
                color={colors.black}
              />
            )}
          </ImageContainer>
        </View>
      </FirstRow>
      {/* 2nd Row */}
      <SecondRow>
        <ImageContainer2
          activeOpacity={0.6}
          onPress={() =>
            onClickImage().then(img => setImages({...images, image4: img}))
          }>
          <Text
            style={[
              styles.textImage,
              {
                color: images.image4 ? colors.white : colors.lightBlack,
              },
            ]}>
            4
          </Text>
          {images.image4 ? (
            <Image source={{uri: images.image4}} style={hw100} />
          ) : (
            <Entypo name="plus" size={moderateScale(20)} color={colors.black} />
          )}
        </ImageContainer2>
        <Spacer width={5} />
        <ImageContainer2
          activeOpacity={0.6}
          onPress={() =>
            onClickImage().then(img => setImages({...images, image5: img}))
          }>
          <Text
            style={[
              styles.textImage,
              {
                color: images.image5 ? colors.white : colors.lightBlack,
              },
            ]}>
            5
          </Text>
          {images.image5 ? (
            <Image source={{uri: images.image5}} style={hw100} />
          ) : (
            <Entypo name="plus" size={moderateScale(20)} color={colors.black} />
          )}
        </ImageContainer2>
        <Spacer width={5} />
        <ImageContainer2
          activeOpacity={0.6}
          onPress={() =>
            onClickImage().then(img => setImages({...images, image6: img}))
          }>
          <Text
            style={[
              styles.textImage,
              {
                color: images.image6 ? colors.white : colors.lightBlack,
              },
            ]}>
            6
          </Text>
          {images.image6 ? (
            <Image source={{uri: images.image6}} style={hw100} />
          ) : (
            <Entypo name="plus" size={moderateScale(20)} color={colors.black} />
          )}
        </ImageContainer2>
      </SecondRow>
    </View>
  );
};

export default PictureBox;

// ImageLibrary

const onClickImage = async () => {
  let uri = '';
  try {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });
    if (!result.cancelled) {
      console.log('ImagesDetail✌', result.assets[0].uri);
      // setUri(result);
      // setUri(result.assets[0].uri);
      uri = result.assets[0].uri;
    } else {
      // setUri('');
      uri = '';
    }
  } catch (error) {
    console.log('Error reading an image', error);
  }

  return uri;
};
// ImageLibrary

const VerticalPadding = styled(View, {
  paddingVertical: 20,
});
const FirstRow = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 3.33 * 2,
});
const SecondRow = styled(View, {
  paddingTop: verticalScale(5),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 3.33,
});
const ImageContainer = styled(TouchableOpacity, props => ({
  ...ImageContainerStyle,
  // paddingTop: verticalScale(props.paddingTop) || 0,
}));
const ImageContainer2 = styled(TouchableOpacity, props => ({
  ...ImageContainerStyle,
  height: '100%',
  width: '100%',
  // paddingTop: verticalScale(props.paddingTop) || 0,
}));

const ImageLabel = styled(Text, {
  position: 'absolute',
  zIndex: 1,
  color: colors.primary,
  fontFamily: 'ProximaNova-Bold',
  fontSize: verticalScale(12),
  top: 0,
  padding: moderateScale(5),
  left: scale(10),
});

const BigFlex_2X = {
  flex: 3.33 * 2,
};
const BigFlex_1X = {
  height: verticalScale(200),
  // paddingLeft: scale(5),
  paddingVertical: verticalScale(3),
  flex: 3.33,
};
const hw100 = {
  height: '100%',
  width: '100%',
};
const ImageContainerStyle = {
  flex: 1,
  borderRadius: 10,
  borderColor: colors.lightBlack,
  borderWidth: 1.2,
  backgroundColor: colors.inputBorder,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

const styles = ScaledSheet.create({
  textImage: {
    position: 'absolute',
    zIndex: 1,
    fontFamily: 'ProximaNova-Bold',
    fontSize: verticalScale(12),
    top: 0,
    padding: moderateScale(5),
    left: scale(10),
  },
});
