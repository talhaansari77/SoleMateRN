import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  moderateScale,
  verticalScale,
  ScaledSheet,
  scale,
} from 'react-native-size-matters';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors} from '../../../../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import profileImages from '../../../../../assets/Profile_images';

const PhotoContainer = ({
  setImages,
  images,
  index,
  width,
  height,
  item,
  itemUri,
  isEditPhoto ,
  label,
}) => {
  const [uri, setUri] = useState(item ? item.uri : '');
  // console.log('===item',  item.uri);
  const onClickImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
      });
      if (!result.cancelled) {
        console.log('ImagesDetail✌', result.assets[0].uri);
        // setUri(result);
        setUri(result.assets[0].uri);
        let itemIndex = -1;
        if(isEditPhoto){
          itemIndex = images.findIndex((item) => item.index === label);
          console.log("====itemIndex",itemIndex)
        }else{
           itemIndex= images.findIndex((item) => item.index === index);
        }
        if (itemIndex === -1) {
          setImages([
            ...images,
            {
              index,
         uri: result.assets[0].uri,
      },
          ]);
        } else {
          const temp = [...images];
         temp[itemIndex] = {...temp[itemIndex], uri: result.assets[0].uri};
        setImages(temp);
        }
        // const itemIndex = images.findIndex(item => item.index === index);
        // if (itemIndex === -1) {
        //   setImages([
        //     ...images,
        //     {
        //       index,
        //       uri: result.assets[0].uri,
        //     },
        //   ]);
        // } else {
        //   const temp = [...images];
        //   temp[itemIndex] = {...temp[itemIndex], uri: result.assets[0].uri};
        //   setImages(temp);
        // }
      } else {
        setUri('');
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };
  return (
    <TouchableOpacity
      onPress={onClickImage}
      style={[
        styles.imgContainer,
        {
          width: width || moderateScale(95),
          height: height || verticalScale(90),
        },
      ]}
      activeOpacity={0.6}>
      {uri || images[index]?.uri? (
        <Image source={{uri:images[index]?.uri||uri}} style={styles.img} /> 
      ) : (
        <Entypo name="plus" size={moderateScale(20)} color={colors.black} />
        // <Image source={{ uri: images ?.[0]}} style={styles.img} />
      )}
      <Text
        style={{
          position: 'absolute',
          zIndex: 1,
          color: colors.primary,
          fontFamily: 'ProximaNova-Bold',
          fontSize: verticalScale(12),
          top: 0,
          padding: moderateScale(5),
          left: scale(10),
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PhotoContainer;

const styles = ScaledSheet.create({
  imgContainer: {
    borderRadius: '10@s',
    borderColor: colors.primary,
    borderWidth: 1.2,
    backgroundColor: colors.inputBorder,
    alignItems: 'center',
    justifyContent: 'center',

    // marginRight: '8@vs',
    marginTop: '15@vs',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imageView: {
    width: '100%',
    flexDirection: 'row',
    // marginBottom: '50@vs',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
