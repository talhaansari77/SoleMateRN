import {
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Container } from '../profile/Profile';
import { Spacer } from '../../../components/Spacer';
import CustomText from '../../../components/CustomText';
import { colors } from '../../../utils/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Divider, ListItem } from 'react-native-elements';
import GenderContainer from '../../auth/AdditionInfo/molecules/GenderContainer';
import Header from './molecules/Header';
import InputField from './molecules/InputField';
import IceBreakQField from './molecules/IceBreakQField';
import TagsField from './molecules/TagsField';
import BirthdayField from './molecules/BirthdayField';
import SelectBtn from './molecules/SelectBtn';
import HeightField from './molecules/HeightField';
import TextArea from './molecules/TextArea';
import styled from 'react-native-styled-components';
import CustomButton from '../../../components/CustomButton';
import { EditValidate } from './UseEditProfile';
import PersonalityModal from './molecules/PersonalityModal';
import AddMoreContainer from './molecules/AddMoreContainer';
import PhotoContainer from './molecules/PhotoContainer';
import { getAuthId, saveUser, uploadImage } from '../../../services/FirebaseAuth';
import PictureBox from './molecules/PictureBox';
import Loader from '../../../utils/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderConatiner from '../chat/request/Molecules/HeaderConatiner';
import { getCurrentFCMToken } from '../../../utils/PushNotification';
import TwoInputModal from './molecules/TwoInputModal';

const genders = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' },
];

const EditProfile = ({ navigation }) => {

  const [authData, setAuthData] = useState({});
  const [isSelect, setIsSelect] = useState(-1);
  const [firstName, setFirstName] = useState(authData?.firstName);
  const [lastName, setLastName] = useState(authData?.lastName);
  const [aboutMe, setAboutMe] = useState(authData?.aboutMe);
  const [familyOrigin, setfamilyOrigin] = useState(authData?.familyOrigin);
  const [language, setLanguage] = useState(authData?.language);
  const [employment, setEmployment] = useState(authData?.employment);
  const [occupation, setOccupation] = useState(authData?.occupation);
  const [religion, setReligion] = useState(authData?.religion);
  const [religiousity, setReligiousity] = useState(authData?.religiousity);
  const [prayerLevel, setPrayerLevel] = useState(authData?.prayerLevel);
  const [sector, setSector] = useState(authData?.sector);
  const [martialHistory, setMartialHistory] = useState(authData?.martialHistory);
  const [martialTimming, setMartialTimming] = useState(authData?.martialTimming);
  const [loading, setLoading] = useState(false);
  const [birthday, setBirthday] = useState(authData?.birthday);
  const [gender, setGender] = useState(authData?.gender);
  const [feetHeight, setFeetHeight] = useState(authData?.feetHeight);
  const [inchesHeight, setInchesHeight] = useState(authData?.inchesHeight);
  const [whatKids, setWhatKids] = useState(authData?.whatKids);
  const [hasKids, setHasKids] = useState(authData?.hasKids);
  const [willRelocate, setWillRelocate] = useState(authData?.willRelocate);
  const [jobStatus, setJobStatus] = useState(authData?.jobStatus);
  const [drinking, setDrinking] = useState(authData?.drinking);
  const [smoking, setSmoking] = useState(authData?.smoking);
  const [addMore, setAddMore] = useState('');
  const [personality, setPersonality] = useState([]);
  const [characteristics, setcharacteristics] = useState([]);
  const [characterModal, setCharacterModal] = useState(false);
  const [images, setImages] = useState([]);
  const [personalityModal, setPersonalityModal] = useState(false);
  const [editLocation, setEditLocation] = useState('');
  const [fcmToken, setFcmToken] = useState('');

  console.log('imagesUri', images);
  console.log('imagesUri', birthday);

  const questions = [
    { id: 1, question: 'Want Kids', onValue: setWhatKids },
    { id: 2, question: 'Has Kids', onValue: setHasKids },
    { id: 3, question: 'Willing Relocate', onValue: setWillRelocate },
    { id: 4, question: 'Job Status', onValue: setJobStatus },
    { id: 5, question: 'Drinking', onValue: setDrinking },
    { id: 6, question: 'Smoking', onValue: setSmoking },
  ];
  const [data] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    getCurrentID();
  }, []);
  useEffect(() => {
    getAuthData();
    getCurrentToken();
  }, []);

  const getAuthData = async () => {
    getSpecificeUser(authID).then(data => {
      console.log("UserData:", data);
      setAuthData(data);
    });
  };
  const getCurrentToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');

    setFcmToken(fcmToken);
  };

  const getCurrentID = async () => {
    await getAuthId().then(id => {
      setAuthID(id);
    });
  };
  const [submitError, setSubmitError] = useState({
    firstNameError: '',
    lastNameError: '',
    aboutError: '',
    birthdayError: '',
    familyError: '',
    genderError: '',
    languageError: '',
    heightError: '',
    employmentError: '',
    editlocationError: '',
    occupationError: '',
    religionError: '',
    religiousityError: '',
    prayerLevelError: '',
    sectorError: '',
    martialHistoryError: '',
    martialTimmingError: '',
    addPersonalityError: '',
    characterError: '',
  });
  const onHandleSubmit = async () => {
    console.log('I Am Submit ✌');
    const data = {
      firstName: firstName,
      lastName: lastName,
      aboutMe: aboutMe,
      dob: birthday,
      familyOrigin: familyOrigin,
      language: language,
      personality: personality.map(item => item.personality),
      characteristics: characteristics.map(item => item.characteristics),
      images: images.map(item => item.uri),
      gender: gender,
      location: editLocation,
      height: feetHeight,
      employment: employment,
      occupation: occupation,
      fcmToken: fcmToken,
      id: authID,
      religion: religion,
      religiousity: religiousity,
      prayerLevel: prayerLevel,
      sector: sector,
      whatKids: whatKids,
      hasKids: hasKids,
      willRelocate: willRelocate,
      jobStatus: jobStatus,
      drinking: drinking,
      smoking: smoking,
      martialHistory: martialHistory,
      martialTimming: martialTimming,
    };
    const response = EditValidate(data, submitError, setSubmitError);
    if (response) {
      console.log('data');
      setLoading(true);
      try {
        let imageLink = [];
        for (let index = 0; index < data.images.length; index++) {
          const element = data.images[index];
          console.log("EmelemtIndex", element)
          const link = await uploadImage(element, authID);
          imageLink.push(link);
        }
        data.images = imageLink;
        setLoading(false)

        if (authID) {
          await saveUser(authID, data);

          setTimeout(() => {
            setLoading(false);
          }, 2000);

          console.log('dataSave');
          navigation.reset({
            index: 0,
            routes: [{ name: 'MainStack' }],
          });
        }
      } catch (error) {
        setLoading(false);
        console.log('onSubmit Registeration', error);
      }
    }
  };
  const onSaveCharacter = () => {
    if (!addMore) {
      return setSubmitError({
        ...submitError,
        characterError: 'This field is required',
      });
    } else {
      let data = {
        characteristics: addMore,
      };
      characteristics.push(data);
      setAddMore('');
      setSubmitError({ ...submitError, characterError: '' });
      setCharacterModal(false);
    }
  };
  const onSavePersonality = () => {
    if (!addMore) {
      return setSubmitError({
        ...submitError,
        addPersonalityError: 'This field is required',
      });
    } else {
      let data = {
        personality: addMore,
      };
      personality.push(data);
      setAddMore('');
      setSubmitError({ ...submitError, addPersonalityError: '' });
      setPersonalityModal(false);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const [iceBreakerQ, setIceBreakerQ] = useState([
    { id: 1, question: "The Last Time I Cried Was", answer: "When I was a baby", placeholder: "What ice breaker question would you like to answer" },
    { id: 2, question: "", answer: "", placeholder: "What ice breaker question would you like to answer" },
    { id: 3, question: "", answer: "", placeholder: "What ice breaker question would you like to answer" },
  ]);

  const [questionIndex, setQuestionIndex] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <TwoInputModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        iceBreakerQ={iceBreakerQ}
        questionIndex={questionIndex}
        setIceBreakerQ={setIceBreakerQ}
      />
      <Header
        handleSubmit={onHandleSubmit}
        handleCancel={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'MainStack' }],
          });
        }}
        navigation={navigation}
      />

      {/* Header */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageView}>
          {data.map((item, index) => (
            <PhotoContainer
              key={index}
              index={index}
              label={item}
              images={images}
              setImages={setImages}
              width={moderateScale(100)}
              height={verticalScale(95)}
            />
          ))}
        </View>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>




          <View style={{ padding: moderateScale(5) }}>
            <CustomText
              label={'Bio'}
              color={colors.darkOrange}
              fontSize={16}
              fontFamily={'ProximaNova-Bold'}
              marginTop={verticalScale(5)}
            />
            <Spacer height={10} />

            <View style={{ padding: moderateScale(5) }}>
              {/* First Name */}
              <InputField
                label={'First Name'}
                arrow={false}
                value={firstName}
                onChangeText={nam => {
                  setFirstName(nam),
                    setSubmitError({ ...submitError, firstNameError: '' });
                }}
                error={submitError.firstNameError}
              />
              <Spacer height={15} />
              {/* Last Name */}
              <InputField
                label={'Last Name'}
                arrow={false}
                value={lastName}
                onChangeText={last => {
                  setLastName(last),
                    setSubmitError({ ...submitError, lastNameError: '' });
                }}
                error={submitError.lastNameError}
              />
              <Spacer height={15} />
              {/* About Me */}

              <TextArea
                label={'About Me'}
                value={aboutMe}
                onChangeText={about => {
                  setAboutMe(about),
                    setSubmitError({ ...submitError, aboutError: '' });
                }}
                error={submitError.aboutError}
              />
              <Spacer height={20} />
              {/* Ice Breaker Question */}
              <IceBreakQField
                setModalVisible={setModalVisible}
                iceBreakerQ={iceBreakerQ}
                setQuestionIndex={setQuestionIndex}
              />
              {/* Personality */}
              <Spacer height={10} />
              {/* <CustomText
            label={"Personality"}
            color={colors.darkOrange}
            fontFamily={"medium"}
            fontSize={11}
          /> */}
              <CustomText label="personality" color={colors.primary} />
              <View
                style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
                <View style={{ marginTop: 8 }}>
                  <Spacer width={5} />
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                      {personality.map(item => {
                        return (
                          <TagsField
                            label={item.personality}
                          //  addItems.={addItems}
                          />
                        );
                      })}
                    </View>
                    <View style={{ marginTop: verticalScale(15) }}>
                      <AddMoreContainer
                        onAddMore={() => {
                          setPersonalityModal(true);
                        }}
                      />
                    </View>
                  </View>

                  {/* Modal For Add More */}
                  <PersonalityModal
                    setModelVisible={setPersonalityModal}
                    modalVisible={personalityModal}
                    setValue={setAddMore}
                    value={addMore}
                    onChange={add => {
                      setAddMore(add);
                      setSubmitError({ ...submitError, addPersonalityError: '' });
                    }}
                    error={submitError.addPersonalityError}
                    onSaveData={() => {
                      onSavePersonality();
                    }}
                  />
                  {/* Characteristics */}

                  <CustomText
                    label="Characteristics"
                    color={colors.darkOrange}
                    marginTop={verticalScale(10)}
                  />

                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                      {characteristics.map(item => {
                        return (
                          <TagsField
                            label={item.characteristics}
                          //  addItems.={addItems}
                          />
                        );
                      })}
                    </View>
                    <View style={{ marginTop: verticalScale(15) }}>
                      <AddMoreContainer
                        onAddMore={() => {
                          setCharacterModal(true);
                        }}
                      />
                    </View>
                  </View>

                  {/* Modal For Add More */}
                  <PersonalityModal
                    setModelVisible={setCharacterModal}
                    modalVisible={characterModal}
                    setValue={setAddMore}
                    value={addMore}
                    onChange={add => {
                      setAddMore(add);
                      setSubmitError({ ...submitError, characterError: '' });
                    }}
                    error={submitError.characterError}
                    onSaveData={() => {
                      onSaveCharacter();
                    }}
                  />

                  <Spacer height={20} />

                  {/* Birthday */}
                  <BirthdayField
                    birthday={birthday}
                    setBirthday={setBirthday}
                    submitError={submitError}
                    setSubmitError={setSubmitError}
                    error={submitError.birthdayError}
                  />
                  {/* Demographics */}

                  <Spacer height={10} />
                  <View>
                    <CustomText
                      label={' Demographics'}
                      color={colors.primary}
                      fontFamily={'ProximaNova-Regular'}
                      fontSize={12}
                    />
                    {/* Family Origin */}
                    <Spacer height={10} />
                    <PH10>
                      <InputField
                        label={'Family Origin'}
                        value={familyOrigin}
                        onChangeText={family => {
                          setfamilyOrigin(family),
                            setSubmitError({ ...submitError, familyError: '' });
                        }}
                        error={submitError.familyError}
                      />
                    </PH10>
                    {/* Language */}
                    <Spacer height={10} />
                    <PH10>
                      <InputField
                        label={'Language'}
                        value={language}
                        onChangeText={lang => {
                          setLanguage(lang),
                            setSubmitError({ ...submitError, languageError: '' });
                        }}
                        error={submitError.languageError}
                      />
                    </PH10>
                    {/* Gender */}
                    <Spacer height={10} />
                    <PH10>
                      <CustomText
                        label={'Gender'}
                        color={colors.darkOrange}
                        fontFamily={'ProximaNova-Regular'}
                        marginTop={verticalScale(7)}
                        fontSize={11}
                      />
                      <Spacer height={10} />
                      <View
                        style={{
                          justifyContent: 'center',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        {genders.map((g, index) => (
                          <>
                            <GenderContainer
                              txt={g.name}
                              gender={gender}
                              setGender={setGender}
                              index={index}
                              setSubmitError={setSubmitError}
                              submitError={submitError}
                              error={submitError.genderError}
                              isSelect={isSelect}
                              setIsSelect={setIsSelect}
                            />
                            <Spacer width={10} />
                          </>
                        ))}
                      </View>
                      {submitError.genderError ? (
                        <CustomText
                          color={colors.red}
                          fontFamily={'ProximaNova-Regular'}
                          fontSize={11}
                          marginTop={4}>
                          * {submitError.genderError}
                        </CustomText>
                      ) : null}
                    </PH10>
                    {/* Current Location */}
                    <Spacer height={15} />
                    <PH10>
                      <InputField
                        label={'Current Location'}
                        // arrow={false}
                        value={editLocation}
                        onChangeText={nam => {
                          setEditLocation(nam),
                            setSubmitError({
                              ...submitError,
                              editlocationError: '',
                            });
                        }}
                        error={submitError.editlocationError}
                      />
                    </PH10>
                    {/* Height */}
                    <Spacer height={15} />
                    <HeightField
                      inchesHeight={inchesHeight}
                      setInchesHeight={setInchesHeight}
                      feetHeight={feetHeight}
                      submitError={submitError}
                      setSubmitError={setSubmitError}
                      setFeetHeight={setFeetHeight}
                      error={submitError.heightError}
                    />
                    {submitError.heightError ? (
                      <CustomText
                        color={colors.red}
                        fontFamily={'ProximaNova-Regular'}
                        fontSize={11}
                        marginTop={4}>
                        * {submitError.heightError}
                      </CustomText>
                    ) : null}
                  </View>
                  {/* Education & Career */}

                  <Spacer height={20} />
                  <View>
                    <CustomText
                      label={'Education and Career'}
                      color={colors.primary}
                      fontFamily={'ProximaNova-Regular'}
                      fontSize={12}
                    />
                    {/* Employment */}
                    <Spacer height={10} />
                    <PH10>
                      <InputField
                        label={'Employment'}
                        onChangeText={emp => {
                          setEmployment(emp),
                            setSubmitError({
                              ...submitError,
                              employmentError: '',
                            });
                        }}
                        error={submitError.employmentError}
                      />
                    </PH10>
                    {/* Occupation */}
                    <Spacer height={15} />
                    <PH10>
                      <InputField
                        label={'Occupation'}
                        onChangeText={occ => {
                          setOccupation(occ),
                            setSubmitError({
                              ...submitError,
                              occupationError: '',
                            });
                        }}
                        error={submitError.occupationError}
                      />
                    </PH10>
                  </View>

                  {/* Religiousness */}

                  <Spacer height={10} />
                  <View>
                    <CustomText
                      label={'Religiousness'}
                      color={colors.primary}
                      fontFamily={'ProximaNova-Regular'}
                      fontSize={12}
                    />
                    {/* Religion */}
                    <Spacer height={10} />
                    <PH10>
                      <InputField
                        label={'Religion'}
                        onChangeText={rel => {
                          setReligion(rel),
                            setSubmitError({ ...submitError, religionError: '' });
                        }}
                        error={submitError.religionError}
                      />
                    </PH10>
                    {/* Religiousity */}
                    <Spacer height={15} />
                    <PH10>
                      <InputField
                        label={'Religiousity'}
                        onChangeText={relg => {
                          setReligiousity(relg),
                            setSubmitError({
                              ...submitError,
                              religiousityError: '',
                            });
                        }}
                        error={submitError.religiousityError}
                      />
                    </PH10>
                    {/* Prayer Level */}
                    <Spacer height={15} />
                    <PH10>
                      <InputField
                        label={'Prayer Level'}
                        onChangeText={pry => {
                          setPrayerLevel(pry),
                            setSubmitError({
                              ...submitError,
                              prayerLevelError: '',
                            });
                        }}
                        error={submitError.prayerLevelError}
                      />
                    </PH10>
                    {/* Sector */}
                    <Spacer height={15} />
                    <PH10>
                      <InputField
                        label={'Sector'}
                        onChangeText={sec => {
                          setSector(sec),
                            setSubmitError({ ...submitError, sectorError: '' });
                        }}
                        error={submitError.sectorError}
                      />
                    </PH10>
                  </View>

                  {/* Partner Expectation */}

                  <Spacer height={10} />
                  <View>
                    <CustomText
                      label={'Partner Expectation'}
                      color={colors.primary}
                      fontFamily={'ProximaNova-Regular'}
                      fontSize={12}
                    />
                    {/* Marital History */}
                    <Spacer height={10} />
                    <PH10>
                      <InputField
                        label={'Marital History'}
                        onChangeText={marh => {
                          setMartialHistory(marh),
                            setSubmitError({
                              ...submitError,
                              martialHistoryError: '',
                            });
                        }}
                        error={submitError.martialHistoryError}
                      />
                    </PH10>
                    {/* Marital Timing */}
                    <Spacer height={15} />
                    <PH10>
                      <InputField
                        label={'Marital Timing'}
                        onChangeText={mart => {
                          setMartialTimming(mart),
                            setSubmitError({
                              ...submitError,
                              martialTimmingError: '',
                            });
                        }}
                        error={submitError.martialTimmingError}
                      />
                    </PH10>
                  </View>
                  <Spacer height={10} />

                  {/* Question */}
                  {questions.map((q, index) => (
                    <SelectBtn
                      key={index}
                      index={index}
                      onValue={q.onValue}
                      txt1={'Yes'}
                      txt2={'No'}
                      label={q.question}
                    />
                  ))}

                  {/* End Container */}
                  <Spacer height={40} />

                  <Spacer height={10} />
                </View>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
      {/* <View style={{marginBottom: verticalScale(10)}}>
        <CustomButton
          title="Save"
          loading={loading}
          marginTop={20}
          onPress={() => {
            onHandleSubmit();
          }}
        />
        {/* <CustomGradientButton
        title="Save"
        loading={loading}
        marginTop={20}
        onPress={() => {
          onHandleSubmit();
        }}
        // backgroundColor={colors.primary}
      /> */}
      {/* </View> */}
      <Loader
        loading={loading}
        file={require('../../../../assets/loader/heartLoading.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '90%',
    height: '35%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  imageView: {
    width: '100%',
    flexDirection: 'row',
    // marginBottom: '50@vs',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default EditProfile;

const PH10 = styled(View, {
  paddingHorizontal: scale(7),
});
