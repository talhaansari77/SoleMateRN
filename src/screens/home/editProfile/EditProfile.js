import {View, ScrollView, StyleSheet, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Spacer} from '../../../components/Spacer';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
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
import {EditValidate} from './UseEditProfile';
import PersonalityModal from './molecules/PersonalityModal';
import AddMoreContainer from './molecules/AddMoreContainer';
import {
  deleteFile,
  getAuthId,
  saveUser,
  uploadImage,
} from '../../../services/FirebaseAuth';
import PictureBox from './molecules/PictureBox';
import Loader from '../../../utils/Loader';
import TwoInputModal from './molecules/TwoInputModal';
import {getSpecificeUser} from '../../../services/FirebaseAuth';
import {getNewFcmToken} from '../../../services/SendNotification';
import uuid from 'react-native-uuid';
import {loaders} from '../../../../assets/loader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {languagesList} from '../../../utils/languagesList';
import {
  empSuggList,
  iceBreakerQList,
  imageTemplate,
  religionSuggList,
  religiousitySuggList,
  sectorsList,
} from '../../../utils/Data';
import ShowError from './molecules/ShowError';

const genders = [
  {id: 1, name: 'Male'},
  {id: 2, name: 'Female'},
];

const EditProfile = ({navigation}) => {
  const [images, setImages] = useState(imageTemplate);
  const [authData, setAuthData] = useState({});
  const [isSelect, setIsSelect] = useState(-1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [familyOrigin, setfamilyOrigin] = useState('');
  const [language, setLanguage] = useState([]);
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
  // const [jobStatus, setJobStatus] = useState('');
  const [drinking, setDrinking] = useState('');
  const [smoking, setSmoking] = useState('');
  const [addMore, setAddMore] = useState('');
  const [personality, setPersonality] = useState([]);
  const [characteristics, setcharacteristics] = useState([]);
  const [characterModal, setCharacterModal] = useState(false);
  const [personalityModal, setPersonalityModal] = useState(false);
  const [editLocation, setEditLocation] = useState('');
  const [fcmToken, setFcmToken] = useState('');
  const [authID, setAuthID] = useState('');
  const [selected, setSelected] = useState('');
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [questionFromList, setQuestionFromList] = useState(-1);
  const [visible, setVisible] = useState(false);
  // If they select none, make it not appear on the user end when people view his profile.
  const [openEmpSugg, setOpenEmpSugg] = useState(false);
  const [empValue, setEmpValue] = useState(null);
  const [empSugg, setEmpSugg] = useState(empSuggList);

  // - List: Islam, Christianity, Judaism, Hinduism, Athiest, Agnostic
  const [openReligionSugg, setOpenReligionSugg] = useState(false);
  const [religionValue, setReligionValue] = useState(null);
  const [religionSugg, setReligionSugg] = useState(religionSuggList);
  // - Religiousity: Heavily Practicing, Somewhat Practicing, Not Practicing
  const [openReligiousitySugg, setOpenReligiousitySugg] = useState(false);
  const [religiousityValue, setReligiousityValue] = useState(null);
  const [religiousitySugg, setReligiousitySugg] =
    useState(religiousitySuggList);

  const [openSectors, setOpenSectors] = useState(false);
  const [sectorsValue, setSectorsValue] = useState(null);
  const [sectors, setSectors] = useState(sectorsList);

  const [modalVisible, setModalVisible] = useState(false);

  // iceBreaker array

  const [iceBreakerQ, setIceBreakerQ] = useState(iceBreakerQList);

  console.log('IceBreaker', iceBreakerQ?.[0]?.question);

  // last container kids conatiner

  const questions = [
    {id: 1, question: 'Want Kids', onValue: setWhatKids, state: whatKids},
    {id: 2, question: 'Has Kids', onValue: setHasKids, state: hasKids},
    {
      id: 3,
      question: 'Willing Relocate',
      onValue: setWillRelocate,
      state: willRelocate,
    },
    // {id: 4, question: 'Job Status', onValue: setJobStatus, state: jobStatus},
    {id: 4, question: 'Drinking', onValue: setDrinking, state: drinking},
    {id: 5, question: 'Smoking', onValue: setSmoking, state: smoking},
  ];

  const [data] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    // get current  auth id
    getCurrentID();
    // get fcmToken
    getCurrentToken();
  }, []);
  useEffect(() => {
    // get user data if exist
    getAuthData();
  }, []);

  const getAuthData = async () => {
    setLoading(true);
    const id = await getAuthId();
    try {
      // get specific user in firebase
      getSpecificeUser(id).then(data => {
        if (data) {
          const pTags = [];
          data?.personality.map(item => pTags.push({personality: item}));
          // const cTags = [];
          // data?.characteristics.map(item =>
          //   cTags.push({characteristics: item}),
          // );
          // set all user data in state
          setFirstName(data?.firstName);
          setLastName(data?.lastName);
          setAboutMe(data?.aboutMe);
          setEditLocation(data?.basicInfo[0].status);
          setfamilyOrigin(data?.basicInfo[1].status);
          setFeetHeight(data?.basicInfo[2].status.split(' ')[0]);
          setInchesHeight(data?.basicInfo[2].status.split(' ')[1]);
          setLanguage(data?.basicInfo[3].status);
          setOccupation(data?.education[0].status);
          setEmployment(data?.education[1].status);
          setReligion(data?.religiousness[0].status);
          setReligiousity(data?.religiousness[1].status);
          setSector(data?.religiousness[2].status);
          setMartialTimming(data?.partnerExpectations[0].status);
          setMartialHistory(data?.partnerExpectations[1].status);
          setWhatKids(data?.partnerExpectations[2].status);
          setHasKids(data?.partnerExpectations[3].status);
          setDrinking(data?.partnerExpectations[4].status);
          setSmoking(data?.partnerExpectations[5].status);
          setWillRelocate(data?.partnerExpectations[6].status);
          setBirthday(data?.dob);
          setGender(data?.gender);
          setPersonality(pTags);
          // setcharacteristics(cTags);
          setIceBreakerQ(data?.iceBreakerQ);
        }

        setLoading(false);
        setImages({
          image1: data?.images?.image1,
          image2: data?.images?.image2,
          image3: data?.images?.image3,
          image4: data?.images?.image4,
          image5: data?.images?.image5,
          image6: data?.images?.image6,
        });

        setAuthData(data);
      });
    } catch (error) {
      setLoading(false);
    }
  };

  // get  modeile fcm token
  const getCurrentToken = async () => {
    await getNewFcmToken(setFcmToken);
  };
  // get auth id function
  const getCurrentID = async () => {
    await getAuthId().then(id => {
      setAuthID(id);
    });
  };

  useEffect(() => {
    console.log('religion===>>', religion);

    if (religion === 'Islam') {
      let data = sectorsList.filter(
        s => s.parent === 'Islam' || s.label === 'Islam',
      );
      setSectors(data);
    } else if (religion === 'Christianity') {
      let data = sectorsList.filter(
        s => s.parent === 'Christianity' || s.label === 'Christianity',
      );
      setSectors(data);
    }
  }, [religion]);

  // error state
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
    sectorError: '',
    martialHistoryError: '',
    martialTimmingError: '',
    addPersonalityError: '',
    characterError: '',
  });

  const onHandleSubmit = async () => {
    let temp2 = {};
    console.log('I Am Submit ✌');
    console.log('This is temp Image array', Object.keys(images).slice(6));

    console.log('I Am temp2 ✌1', temp2);

    // user object
    const data = {
      id: authID,
      fcmToken: fcmToken,
      firstName: firstName,
      lastName: lastName,
      aboutMe: aboutMe,
      gender: gender,
      iceBreakerQ: iceBreakerQ,
      dob: birthday,
      personality: personality.map(item => item.personality),
      iceBreakerQ: iceBreakerQ,

      basicInfo: [
        {label: 'Current Location', status: editLocation},
        {label: 'Family Origin', status: familyOrigin},
        {
          label: 'Height',
          status: feetHeight + ' ' + inchesHeight,
          feet: feetHeight,
          inches: inchesHeight,
        },
        {label: 'Language', status: language},
      ],
      education: [
        {label: 'Occupation', status: occupation},
        {label: 'Employment', status: employment},
      ],

      religiousness: [
        {
          label: 'Religion',
          status: religion,
          hasDetail:
            religion === 'Athiest' || religion === 'Agnostic' ? false : true,
        },
        {
          label: 'Religiousity',
          status: religiousity,
          hasDetail:
            religion === 'Athiest' || religion == 'Agnostic' ? false : true,
        },
        {
          label: 'Sector',
          status: sector,
          hasDetail:
            religion === 'Athiest' || religion === 'Agnostic' ? false : true,
        },
      ],
      partnerExpectations: [
        {label: 'Martial Timming', status: martialTimming},
        {label: 'Martial History', status: martialHistory},
        {label: 'WhatKids', status: whatKids},
        {label: 'HasKids', status: hasKids},
        {label: 'Drinking', status: drinking},
        {label: 'Smoking', status: smoking},
        {label: 'WillRelocate', status: willRelocate},
      ],
    };

    // handle all vlaidation
    const response = EditValidate(data, submitError, setSubmitError, images);
    console.log('step 1');
    if (response) {
      console.log('data');
      setLoading(true);
      try {
        console.log('step 3');
        // images object
        temp2 = {
          image1: images.image1
            ? !images.image1.includes('https://firebase')
              ? await uploadImage(images.image1, authID)
              : images.image1
            : '',
          image2: images.image2
            ? !images.image2.includes('https://firebase')
              ? await uploadImage(images.image2, authID)
              : images.image2
            : '',
          image3: images.image3
            ? !images.image3.includes('https://firebase')
              ? await uploadImage(images.image3, authID)
              : images.image3
            : '',
          image4: images.image4
            ? !images.image4.includes('https://firebase')
              ? await uploadImage(images.image4, authID)
              : images.image4
            : '',
          image5: images.image5
            ? !images.image5.includes('https://firebase')
              ? await uploadImage(images.image5, authID)
              : images.image5
            : '',
          image6: images.image6
            ? !images.image6.includes('https://firebase')
              ? await uploadImage(images.image6, authID)
              : images.image6
            : '',
        };

        // save user in firebase
        if (authID) {
          await saveUser(authID, {...data, images: temp2});

          setTimeout(() => {
            setLoading(false);
          }, 500);
// delete old images
          Object.values(images)
            .slice(6)
            .map(img => {
              deleteFile(img);
              console.log("==>",img);
            });
          console.log('dataSave');
          navigation.reset({
            index: 0,
            routes: [{name: 'MainStack'}],
          });
        }
      } catch (error) {
        setLoading(false);
        console.log('onSubmit Registeration', error);
      }
    }
  };

  // save user character in array
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
      setSubmitError({...submitError, characterError: ''});
      setCharacterModal(false);
    }
  };

  // save user personality in array
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
      setSubmitError({...submitError, addPersonalityError: ''});
      setPersonalityModal(false);
    }
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState(languagesList);

  return (
    <View style={{flex: 1}}>
      {/* ice breake modal */}
      <TwoInputModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        iceBreakerQ={iceBreakerQ}
        questionIndex={questionIndex}
        setIceBreakerQ={setIceBreakerQ}
        questionFromList={questionFromList}
        visible={visible}
        setVisible={setVisible}
      />
      <Header
        handleSubmit={onHandleSubmit}
        handleCancel={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'MainStack'}],
          });
        }}
        navigation={navigation}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: verticalScale(15),
          }}>
          {/* image container */}
          <PictureBox
            images={images}
            setImages={setImages}
            width={moderateScale(100)}
            height={verticalScale(95)}
          />
          <View style={{padding: moderateScale(5)}}>
            <CustomText
              label={'Bio'}
              color={colors.darkOrange}
              fontSize={16}
              fontFamily={'ProximaNova-Bold'}
              marginTop={verticalScale(5)}
            />
            <View style={{padding: moderateScale(5)}}>
              {/* First Name */}
              <InputField
                label={'First Name'}
                arrow={false}
                value={firstName}
                onChangeText={nam => {
                  setFirstName(nam),
                    setSubmitError({...submitError, firstNameError: ''});
                }}
                error={submitError.firstNameError}
              />
              <Spacer height={10} />
              {/* Last Name */}
              <InputField
                label={'Last Name'}
                arrow={false}
                value={lastName}
                onChangeText={last => {
                  setLastName(last),
                    setSubmitError({...submitError, lastNameError: ''});
                }}
                error={submitError.lastNameError}
              />

              <Spacer height={20} />

              {/* About Me */}

              <TextArea
                label={'About Me'}
                value={aboutMe}
                onChangeText={about => {
                  setAboutMe(about),
                    setSubmitError({...submitError, aboutError: ''});
                }}
                error={submitError.aboutError}
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
              <Spacer height={15} />
              {/* Gender */}
              <Spacer height={10} />
              {/* <PH10> */}
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
                  justifyContent: 'space-evenly',
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
                    {/* <Spacer width={10} /> */}
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
              {/* </PH10> */}
              <Spacer height={15} />
              {/* Ice Breaker Question */}
              <IceBreakQField
                setModalVisible={setModalVisible}
                iceBreakerQ={iceBreakerQ}
                setQuestionIndex={setQuestionIndex}
                setQuestionFromList={setQuestionFromList}
                visible={visible}
                setVisible={setVisible}
              />
              {/* Personality */}
              <Spacer height={10} />
              <CustomText label="Personality" color={colors.primary} />
              <View>
                <View
                  style={{
                    marginTop: 8,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}>
                    {/* Personality */}
                    {personality.map(item => {
                      console.log('personality', personality);
                      return <TagsField label={item.personality} />;
                    })}

                    <View>
                      {/* add personality modal */}
                      <AddMoreContainer
                        onAddMore={() => {
                          setPersonalityModal(true);
                        }}
                      />
                    </View>
                  </View>

                  {/* Modal For Add More */}
                  <PersonalityModal
                    label={"Add Personality'"}
                    setModelVisible={setPersonalityModal}
                    modalVisible={personalityModal}
                    setValue={setAddMore}
                    value={addMore}
                    onChange={add => {
                      setAddMore(add);
                      setSubmitError({...submitError, addPersonalityError: ''});
                    }}
                    error={submitError.addPersonalityError}
                    onSaveData={() => {
                      onSavePersonality();
                    }}
                  />

                  {/* Demographics */}

                  <Spacer height={30} />
                  <View>
                    <CustomText
                      label={' Demographics'}
                      color={colors.primary}
                      fontFamily={'ProximaNova-Regular'}
                      fontSize={12}
                      // marginLeft={-5}
                    />
                    {/* Family Origin */}
                    <Spacer height={10} />
                    <PH10>
                      <InputField
                        label={'Ethnicity'}
                        value={familyOrigin}
                        onChangeText={family => {
                          setfamilyOrigin(family),
                            setSubmitError({...submitError, familyError: ''});
                        }}
                        error={submitError.familyError}
                      />
                    </PH10>
                    {/* Language */}
                    <Spacer height={10} />
                    <PH10>
                      {/* <InputField
                        label={'Language(s)'}
                        value={language}
                        onChangeText={lang => {
                          setLanguage(lang),
                            setSubmitError({...submitError, languageError: ''});
                        }}
                        error={submitError.languageError}
                      /> */}
                      <CustomText
                        label={'Language(s)'}
                        color={colors.primary}
                        fontFamily={'ProximaNova-Regular'}
                        fontSize={12}
                      />
                      <DropDownPicker
                        open={open}
                        value={language}
                        items={items}
                        setOpen={setOpen}
                        setValue={v => {
                          setLanguage(v);
                          setSubmitError({...submitError, languageError: ''});
                        }}
                        setItems={setItems}
                        placeholder={'Select Your Lanuage'}
                        placeholderStyle={{color: colors.placeholder}}
                        multiple={true}
                        mode="BADGE"
                        badgeDotColors={['#e76f51']}
                        badgeColors={[colors.primary]}
                        style={{borderWidth: 0}}
                        flatListProps={{
                          nestedScrollEnabled: true,
                          showsVerticalScrollIndicator: true,
                        }}
                        containerProps={{
                          height: open === true ? 230 : null,
                        }}
                      />
                      <Divider color={colors.black} width={1} />
                      <ShowError error={submitError.languageError} />
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
                      <CustomText
                        label={'Employment'}
                        color={colors.primary}
                        fontFamily={'ProximaNova-Regular'}
                        fontSize={12}
                      />
                      {/* <Spacer height={10} /> */}
                      <DropDownPicker
                        open={openEmpSugg}
                        value={employment}
                        items={empSugg}
                        setOpen={setOpenEmpSugg}
                        setValue={v => {
                          setEmployment(v);
                          setSubmitError({...submitError, employmentError: ''});
                        }}
                        setItems={setEmpSugg}
                        placeholder={'Your Employment'}
                        placeholderStyle={{color: colors.placeholder}}
                        style={{borderWidth: 0}}
                        flatListProps={{
                          nestedScrollEnabled: true,
                          showsVerticalScrollIndicator: true,
                        }}
                        containerProps={{
                          height: openEmpSugg === true ? 230 : null,
                        }}
                      />

                      <Divider color={colors.black} width={1} />
                      <ShowError error={submitError.employmentError} />
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
                      {/* <InputField
                        label={'Religion'}
                        value={religion}
                        onChangeText={rel => {
                          setReligion(rel),
                            setSubmitError({...submitError, religionError: ''});
                        }}
                        error={submitError.religionError}
                      /> */}
                      <CustomText
                        label={'Religion'}
                        color={colors.primary}
                        fontFamily={'ProximaNova-Regular'}
                        fontSize={12}
                      />
                      <DropDownPicker
                        open={openReligionSugg}
                        value={religion}
                        items={religionSugg}
                        setOpen={setOpenReligionSugg}
                        setValue={v => {
                          setSector('');
                          setReligion(v);
                          setSubmitError({...submitError, religionError: ''});
                        }}
                        setItems={setReligionSugg}
                        placeholder={'Select Your Religion'}
                        placeholderStyle={{color: colors.placeholder}}
                        style={{borderWidth: 0}}
                        flatListProps={{
                          nestedScrollEnabled: true,
                          showsVerticalScrollIndicator: true,
                        }}
                        containerProps={{
                          height: openReligionSugg === true ? 230 : null,
                        }}
                      />

                      <Divider color={colors.black} width={1} />
                      <ShowError error={submitError.religionError} />
                    </PH10>
                    {/* Sector */}
                    {religion === 'Islam' || religion === 'Christianity' ? (
                      <>
                        <Spacer height={15} />
                        <PH10>
                          {/* <InputField
                        label={'Sector'}
                        value={sector}
                        onChangeText={sec => { 
                          setSector(sec),
                            setSubmitError({...submitError, sectorError: ''});
                        }}
                        error={submitError.sectorError}
                      /> */}
                          <CustomText
                            label={'Sector'}
                            color={colors.primary}
                            fontFamily={'ProximaNova-Regular'}
                            fontSize={12}
                          />
                          {/* <Spacer height={10} /> */}
                          <DropDownPicker
                            open={openSectors}
                            value={sector}
                            items={sectors}
                            setOpen={setOpenSectors}
                            setValue={v => {
                              setSector(v);
                              setSubmitError({...submitError, sectorError: ''});
                            }}
                            setItems={setSectors}
                            placeholder={'Which Sector Do You Belong'}
                            placeholderStyle={{color: colors.placeholder}}
                            style={{borderWidth: 0}}
                            flatListProps={{
                              nestedScrollEnabled: true,
                              showsVerticalScrollIndicator: true,
                            }}
                            containerProps={{
                              height: openSectors === true ? 160 : null,
                            }}
                          />
                          <Divider color={colors.black} width={1} />
                          <ShowError error={submitError.sectorError} />
                        </PH10>
                      </>
                    ) : (
                      <></>
                    )}
                    {/* Religiousity */}
                    <Spacer height={15} />
                    <PH10>
                      {/* <InputField
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
                      /> */}
                      <CustomText
                        label={'Religiousity'}
                        color={colors.primary}
                        fontFamily={'ProximaNova-Regular'}
                        fontSize={12}
                      />
                      {/* <Spacer height={10} /> */}
                      <DropDownPicker
                        open={openReligiousitySugg}
                        value={religiousity}
                        items={religiousitySugg}
                        setOpen={setOpenReligiousitySugg}
                        setValue={v => {
                          setReligiousity(v);
                          setSubmitError({
                            ...submitError,
                            religiousityError: '',
                          });
                        }}
                        setItems={setReligiousitySugg}
                        placeholder={'How Religious Are You'}
                        placeholderStyle={{color: colors.placeholder}}
                        style={{borderWidth: 0}}
                        flatListProps={{
                          nestedScrollEnabled: true,
                          showsVerticalScrollIndicator: true,
                        }}
                        containerProps={{
                          height: openReligiousitySugg === true ? 160 : null,
                        }}
                      />

                      <Divider color={colors.black} width={1} />
                      <ShowError error={submitError.religiousityError} />
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
      <Loader loading={loading} file={loaders.heart} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default EditProfile;

const PH10 = styled(View, {
  paddingHorizontal: scale(7),
});
