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
import { getSpecificeUser } from '../../../services/FirebaseAuth';

const genders = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' },
];

const EditProfile = ({ navigation }) => {
  const [authData, setAuthData] = useState({});
  const [isSelect, setIsSelect] = useState(-1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [familyOrigin, setfamilyOrigin] = useState('');
  const [language, setLanguage] = useState('');
  const [employment, setEmployment] = useState('');
  const [occupation, setOccupation] = useState('');
  const [religion, setReligion] = useState('');
  const [religiousity, setReligiousity] = useState('');
  const [prayerLevel, setPrayerLevel] = useState('');
  const [sector, setSector] = useState('');
  const [martialHistory, setMartialHistory] = useState('');
  const [martialTimming, setMartialTimming] = useState('');
  const [loading, setLoading] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [feetHeight, setFeetHeight] = useState('');
  const [inchesHeight, setInchesHeight] = useState('');
  const [whatKids, setWhatKids] = useState('');
  const [hasKids, setHasKids] = useState('');
  const [willRelocate, setWillRelocate] = useState('');
  const [jobStatus, setJobStatus] = useState('');
  const [drinking, setDrinking] = useState('');
  const [smoking, setSmoking] = useState('');
  const [addMore, setAddMore] = useState('');
  const [personality, setPersonality] = useState([]);
  const [characteristics, setcharacteristics] = useState([]);
  const [characterModal, setCharacterModal] = useState(false);
  const [images, setImages] = useState([]);
  const [personalityModal, setPersonalityModal] = useState(false);
  const [editLocation, setEditLocation] = useState('');
  const [fcmToken, setFcmToken] = useState('');
  const [authID, setAuthID] = useState('');

  console.log('imagesUri', firstName);
  console.log('imagesUri', birthday);

  const questions = [
    { id: 1, question: 'Want Kids', onValue: setWhatKids, state: whatKids },
    { id: 2, question: 'Has Kids', onValue: setHasKids, state: hasKids },
    { id: 3, question: 'Willing Relocate', onValue: setWillRelocate, state: willRelocate },
    { id: 4, question: 'Job Status', onValue: setJobStatus, state: jobStatus },
    { id: 5, question: 'Drinking', onValue: setDrinking, state: drinking },
    { id: 6, question: 'Smoking', onValue: setSmoking, state: smoking },
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
    setLoading(true);
    const id = await getAuthId();
    try {
      getSpecificeUser(id).then(data => {
        const pTags = [];
        data?.personality.map(item => pTags.push({ personality: item }))
        const cTags = [];
        data?.characteristics.map(item => cTags.push({ characteristics: item }))
        const furls = [];
        data?.images.map(item => furls.push({ uri: item }))
        console.log("furls",furls)
        // console.log('UserData:', data);
        setImages(furls);
        setFirstName(data?.firstName);
        setLastName(data?.lastName);
        setAboutMe(data?.aboutMe);
        setfamilyOrigin(data?.familyOrigin);
        setLanguage(data?.language);
        setEmployment(data?.employment);
        setOccupation(data?.occupation);
        setReligion(data?.religion);
        setReligiousity(data?.religiousity);
        setPrayerLevel(data?.prayerLevel);
        setSector(data?.sector);
        setMartialHistory(data?.martialHistory);
        setMartialTimming(data?.martialTimming);
        setBirthday(data?.dob);
        setGender(data?.gender);
        setFeetHeight(data?.feetHeight);
        // setInchesHeigh(data?.inchesHeight);
        setWhatKids(data?.whatKids);
        setHasKids(data?.hasKids);
        setWillRelocate(data?.willRelocate);
        setJobStatus(data?.jobStatus);
        setDrinking(data?.drinking);
        setSmoking(data?.smoking);
        setEditLocation(data?.location);
        setFeetHeight(data?.height.split(" ")[0])
        setInchesHeight(data?.height.split(" ")[1])        
        // setBirthday()   
        setPersonality(pTags)
        setcharacteristics(cTags)
        setIceBreakerQ(data?.iceBreakerQ)



        setAuthData(data);
        setLoading(false);
      });
    } catch (error) { setLoading(false); }
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
      height: feetHeight + " " + inchesHeight,
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
      iceBreakerQ: iceBreakerQ
    };
    const response = EditValidate(data, submitError, setSubmitError);
    if (response) {
      console.log('data');
      setLoading(true);
      try {
        let imageLink = [];
        for (let index = 0; index < data.images.length; index++) {
          const element = data.images[index];
          console.log('ElementIndex', element);
          const link = await uploadImage(element, authID);
          imageLink.push(link);
        }
        data.images = imageLink;
        setLoading(false);

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
    {
      id: 1,
      question: '',
      answer: '',
      placeholder: 'What ice breaker question would you like to answer',
    },
    {
      id: 2,
      question: '',
      answer: '',
      placeholder: 'What ice breaker question would you like to answer',
    },
    {
      id: 3,
      question: '',
      answer: '',
      placeholder: 'What ice breaker question would you like to answer',
    },
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
              <CustomText label="Personality" color={colors.primary} />
              <View
              >
                <View style={{
                  marginTop: 8
                }}>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center', flexWrap: 'wrap'
                    }}>

                    {/* Personality */}
                    {personality.map(item => {
                      console.log("personality", personality)
                      return (
                        <TagsField
                          label={item.personality}
                        //  addItems.={addItems}
                        />
                      );
                    })}

                    <View >
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
                      alignItems: 'center', flexWrap: 'wrap'
                    }}>
                    {characteristics.map(item => {
                      return (
                        <TagsField
                          label={item.characteristics}
                        />
                      );
                    })}

                    <View >
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
                        value={employment}
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
                        value={occupation}

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
                        value={religion}
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
                        value={religiousity}
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
                        value={prayerLevel}
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
                        value={sector}
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
                        value={martialHistory}
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
                        value={martialTimming}
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
                      state={q.state}
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
