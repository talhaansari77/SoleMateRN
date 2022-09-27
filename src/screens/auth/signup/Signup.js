import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import commonStyles from '../../../utils/CommonStyles';
import SignupWithCon from './SignupWithCon';
import CustomTextInput from '../../../components/CustomTextInput';
import {Spacer} from '../../../components/Spacer';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';
import ConditionPassCon from './molecules/ConditionPassCon';
import CustomButton from '../../../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../../utils/Colors';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {
  validateEmail,
  checkCharPassword,
  checkNum,
  checkSymbol,
} from '../../../utils/Email_Password_Validation';
import {ValidateInput} from './UseSignup';
import {styles} from './styles';
import {color} from 'react-native-elements/dist/helpers';
// import {SignupEmailPassword} from '../../../services/FirebaseAuth';
import auth from '@react-native-firebase/auth';
const Signup = ({navigation}) => {
  const [eyeClick, setEyeClick] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');
  const [submitError, setSubmitError] = useState({
    emailError: '',
    passwordError: '',
    confPasswordError: '',
  });

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '682224677218-t6h1gn5l5qrehd7ujphg47jjslibenlq.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId:
        '682224677218-3vlood3onne18e4mqv6230o0a18qv1gi.apps.googleusercontent.com',
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);

  // password.search(/[!/><"#$%&()¥|?>|=']/)==-1
  console.log('conPas', password);
  const passData = [
    {
      id: 1,
      txt1: '+ 8 characters ',
      txt2: '+ 1 symbols',
      color: !password
        ? colors.gray
        : !checkCharPassword(password)
        ? colors.red
        : colors.gray,
      color2: !password
        ? colors.gray
        : password.search(/[!/>@<"#$%&()¥|?>|='+*:~^;]/) == -1
        ? colors.red
        : colors.gray,
    },
    {
      id: 2,
      txt1: '+ 1 number',
      txt2: '* get our password',
      color2: colors.gray,
      color: !password
        ? colors.gray
        : !checkNum(password)
        ? colors.red
        : colors.gray,
      onGetPassword: () => {
        getPassword();
      },
    },
  ];
  const getPassword = () => {
    var chars =
      'abcd@234@#$#$%^&*()=-{}/|-efghi234@#$jklm1234@#$%^&*()=-{}/|-567890,nopq234@#$rstu1234@#$%^&*()=-{}/|-567890,vwxyzABCDEFGHI@#$%^&*()=-{}/|-234567890,JKLMNOPQ@#$%^&*()=-{}/|-RSTUV@#$%^&*()=-{}/|-WXYZ1234567890,.!@#$%^&*()=-{}/|-';
    var passwordLength = 15;
    var password = '';

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    if (password) {
      setPassword(password);
    }
  };
  const onHandleSubmit = async () => {
    const response = ValidateInput(
      email,
      password,
      confirmPass,
      submitError,
      setSubmitError,
    );
    if (response) {
      setLoading(true);

      try {
        const userCredentials = await auth().createUserWithEmailAndPassword(
          email.trim(),
          password.trim(),
        );
        // const res = await SignupEmailPassword(email, password);
        if (userCredentials.user.uid) {
          AsyncStorage.setItem('userAuth', userCredentials.user.uid);
          setLoading(false);
          navigation.reset({
            index: 0,
            routes: [{name: 'EditProfile'}],
          });
        }
      } catch (error) {
        console.log('onSubmitRegister error', error);
        setSubmitError({
          ...submitError,
          emailError: 'The email address is already in use by another account',
        });
        setLoading(false);
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', JSON.stringify(userInfo));
      // setUserInfo(userInfo);
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }

    // setGettingLoginStatus(false);
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const userInfo = await GoogleSignin.signIn();
    //   console.log('UserInfo', userInfo);
    //   // this.setState({userInfo});
    // } catch (error) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     // user cancelled the login flow
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     // operation (e.g. sign in) is in progress already
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     // play services not available or outdated
    //   } else {
    //     // some other error happened
    //   }
    // }
  };
  return (
    // <></>
    <View
      style={[
        commonStyles.commonMain,
        {
          padding: 25,
        },
      ]}>
      <Spacer height={verticalScale(20)} />
      <CustomText
        label="Sign up"
        fontFamily="ProximaNova-Bold"
        // color={colors.facebookBlue}
        fontSize={verticalScale(15)}
      />
      <Spacer height={verticalScale(15)} />
      <SignupWithCon
        onGoogle={() => {
          handleGoogleSignup();
        }}
      />
      <Spacer height={verticalScale(20)} />
      <CustomTextInput
        value={email}
        withLabel="Email adress"
        placeholder={'example@gmail.com'}
        error={submitError.emailError}
        onChangeText={em => {
          setEmail(em.trim());
          setSubmitError({...submitError, emailError: ''});
        }}
      />
      <Spacer height={verticalScale(15)} />
      <CustomTextInput
        withLabel="Password"
        value={password}
        error={submitError.passwordError}
        onChangeText={pass => {
          setPassword(pass);
          setSubmitError({...submitError, passwordError: ''});
        }}
        password
        secureTextEntry={eyeClick}
        eyeClick={eyeClick}
        setEyeClick={setEyeClick}
        placeholder={'password'}
      />
      <Spacer height={verticalScale(15)} />
      <CustomTextInput
        withLabel="Confirm Password"
        value={confirmPass}
        error={submitError.confPasswordError}
        onChangeText={conpass => {
          setConfirmPass(conpass);
          setSubmitError({...submitError, confPasswordError: ''});
        }}
        password
        secureTextEntry={eyeClick}
        eyeClick={eyeClick}
        setEyeClick={setEyeClick}
        placeholder={'Confirm password'}
      />
      <Spacer height={verticalScale(20)} />
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}>
        {passData?.map(item => {
          return (
            // <></>
            // todo: Bug Here
            <ConditionPassCon
              txt1={item.txt1}
              color={item.color}
              color2={item.color2}
              onGetPassword={item.onGetPassword}
              txt2={item.txt2}
            />
          );
        })}
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
          flex: 1,
          justifyContent: 'center',
        }}>
        <CustomButton
          title="Continue"
          // width="90%"
          opacity={0.4}
          loading={loading}
          color={colors.white}
          backgroundColor={colors.primary}
          height={verticalScale(45)}
          borderRadius={moderateScale(15)}
          onPress={() => {
            // navigation.navigate("MainStack")
            onHandleSubmit();

            // onHandleSumbit();
          }}
        />
        <View style={styles.bottomConatiner}>
          <CustomText
            label="Already have an account?"
            fontFamily="ProximaNova-Regular"
            fontSize={verticalScale(11)}
            color={colors.gray}
          />
          <CustomText
            label="Login"
            fontFamily="ProximaNova-Bold"
            color={colors.black}
            marginLeft={verticalScale(5)}
            fontSize={verticalScale(11)}
            onPress={
              () => navigation.navigate('Login')
              // onHandleSubmit()
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Signup;
