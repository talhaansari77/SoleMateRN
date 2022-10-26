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
import {launchImageLibrary} from 'react-native-image-picker';

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
                if (
                  images.image1 &&
                  images.image1.includes('https://firebase')
                ) {
                  let temp = images.image1.split('?')[0].split('/').pop();
                  // console.log("Old Image Path",temp);
                  setImages({...images, image1: img, temp1: temp});
                }
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
              onClickImage().then(img => {
                if (
                  images.image2 &&
                  images.image2.includes('https://firebase')
                ) {
                  let temp = images.image2.split('?')[0].split('/').pop();
                  // console.log("Old Image Path",temp);
                  setImages({...images, image2: img, temp2: temp});
                }
              })
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
              onClickImage().then(img => {
                if (
                  images.image3 &&
                  images.image3.includes('https://firebase')
                ) {
                  let temp = images.image3.split('?')[0].split('/').pop();
                  // console.log("Old Image Path",temp);
                  setImages({...images, image3: img, temp3: temp});
                }
              })
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
      <SecondRow>
        <ImageContainer2
          activeOpacity={0.6}
          onPress={() =>
            onClickImage().then(img => {
              if (images.image4 && images.image4.includes('https://firebase')) {
                let temp = images.image4.split('?')[0].split('/').pop();
                // console.log("Old Image Path",temp);
                setImages({...images, image4: img, temp4: temp});
              }
            })
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
            onClickImage().then(img => {
              if (images.image5 && images.image5.includes('https://firebase')) {
                let temp = images.image5.split('?')[0].split('/').pop();
                // console.log("Old Image Path",temp);
                setImages({...images, image5: img, temp5: temp});
              }
            })
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
            onClickImage().then(img => {
              if (images.image6 && images.image6.includes('https://firebase')) {
                let temp = images.image6.split('?')[0].split('/').pop();
                // console.log("Old Image Path",temp);
                setImages({...images, image6: img, temp6: temp});
              }
            })
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

const onClickImage = async () => {
  let uri = '';
  try {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });
    if (!result.cancelled) {
      console.log('ImagesDetail✌', result.assets[0].uri);

      uri = result.assets[0].uri;
    } else {
      uri = '';
    }
  } catch (error) {
    console.log('Error reading an image', error);
  }

  return uri;
};

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
}));
const ImageContainer2 = styled(TouchableOpacity, props => ({
  ...ImageContainerStyle,
  height: '100%',
  width: '100%',
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
