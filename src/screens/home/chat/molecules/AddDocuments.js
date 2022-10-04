import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import CustomModal from '../../../../components/CustomModal';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
// import {Feather} from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CustomText from '../../../../components/CustomText';
import icons from '../../../../../assets/icons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
// import RNFetchBlob from 'rn-fetch-blob'
import RNFetchBlob from 'rn-fetch-blob';

const AddDocuments = ({
  documentsModal,
  setDocumentsModal,
  image,
  setImage,
  onSend,
}) => {
  // choose all type of file
  const ChooseFile = async () => {
    // pick the single file

    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        'ResType',

        res.uri,
        res.type,
        res.name,
        res.size,
      );

      // const path=NormalizedPath(res.uri)
      // console.log("PathData",path)

      // const result=await RNFetchBlob.fs.readFile(path,"base64")

      // console.log("PathDataResult",result)
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
      } else {
        throw error;
      }
    }
  };

  // set prefix in ios from path
  const NormalizedPath = path => {
    if (Platform.OS == 'ios' || Platform.OS == 'android') {
      const filePrefix = 'file://';

      if (path.startsWith(filePrefix)) {
        path = path.substring(filePrefix.length);

        try {
          path = decodeURI(path);
        } catch (error) {}
      }
    }
    return path;
  };

  const takePhotoFromLibrary = async () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.8,
      };
      // setImageModal(false);
      const {
        assets: [result],
      } = await launchImageLibrary(options);
      if (result) {
        setImage(result);
        console.log('Resultr', result);
        setDocumentsModal(false);
        onSend(result);

        console.log('takePhotoFromLibrary', result);
      }
    } catch (error) {
      console.log('takePhotoFromLibrary error', error);
    }
  };

  const takePhotoFromCamera = () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.5,
      };
      setTimeout(async () => {
        const {
          assets: [result],
        } = await launchCamera(options);
        if (result) {
          setImage(result);
          setDocumentsModal(false);
          onSend(result);

          // console.log('takePhotoFromCamera',result);
        }
      }, 500);
    } catch (error) {
      console.log('takePhotoFromCamera error', error);
    }
  };
  return (
    <CustomModal
      isVisible={documentsModal}
      width={'90%'}
      marginTop={300}
      height={verticalScale(170)}
      // mainPadding={moderateScale(10)}
      borderRadius={moderateScale(10)}
      // marginBottom={verticalScale(250)}
      onDisable={() => {
        setDocumentsModal(false);
      }}
      onCancel={() => {
        setDocumentsModal(false);
      }}
      second={styles.cancelContainer}
      sexondText="Cancle"
      //   height={verticalScale(180)}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          takePhotoFromCamera();
        }}
        style={styles.cameraContainer}>
        <Feather name="camera" size={24} color={colors.primary} />
        <CustomText label="Camera" fontSize={13} marginLeft={10} />
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          takePhotoFromLibrary();
        }}
        style={styles.cameraContainer}>
        <MaterialIcons
          name="photo-camera-back"
          size={24}
          color={colors.primary}
        />
        <CustomText label="Photo Library" fontSize={13} marginLeft={10} />
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          ChooseFile();
        }}
        style={styles.cameraContainer}>
        <Image source={icons.document} style={{width: 25, height: 25}} />
        {/* <Feather name="camera" size={24} color={colors.primary} /> */}
        <CustomText label="Choose Files" fontSize={13} marginLeft={10} />
      </TouchableOpacity>
    </CustomModal>
  );
};

export default AddDocuments;

const styles = ScaledSheet.create({
  cancelContainer: {
    height: '45@vs',
    backgroundColor: colors.white,
    margin: '15@s',
    width: '90%',
    borderRadius: '10@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colors.gray,
  },
});