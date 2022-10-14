import React, {useEffect, useState} from 'react';
import commonStyles from '../../../utils/CommonStyles';
import CustomTextInput from '../../../components/CustomTextInput';
import {Spacer} from '../../../components/Spacer';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';
import ConditionPassCon from './molecules/ConditionPassCon';
import {View} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import {colors} from '../../../utils/Colors';
import {styles} from '../ViewPager/styles';
import LoginpWithCon from './LoginWithCon';
import {ValidateInput} from '../signup/UseSignup';
import auth from '@react-native-firebase/auth';
// import {AuthLogin} from '../../../services/FirebaseAuth';
import {ValidateLogin} from './molecules/UseLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {getFCMToken} from '../../../utils/PushNotification';
import {getNewFcmToken} from '../../../services/SendNotification';
import {saveUser} from '../../../services/FirebaseAuth';

const Login = ({navigation}) => {
  const [eyeClick, setEyeClick] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [newFcmToken, setNewFcmToken] = useState('');
  const [submitError, setSubmitError] = useState({
    emailError: '',
    passwordError: '',
  });

  useEffect(() => {
    getAuthToken();
  }, []);

  console.log('newFcmToken', newFcmToken);

  const getAuthToken = async () => {
    await getNewFcmToken(setNewFcmToken);

    // console.log("LoginFcm",token)
  };

  const onHandleSubmit = async () => {
    const response = ValidateLogin(
      email,
      password,
      submitError,
      setSubmitError,
    );

    if (response) {
      setLoading(true);

      try {
        const userCredentials = await auth().signInWithEmailAndPassword(
          email.trim(),
          password.trim(),
        );
        if (userCredentials.user.uid) {
          AsyncStorage.setItem('userAuth', userCredentials.user.uid);

          await saveUser(userCredentials.user.uid, {fcmToken: newFcmToken});

          navigation.reset({
            index: 0,
            routes: [{name: 'MainStack'}],
          });
        }
      } catch (error) {
        setLoading(false);
        console.log('cjdbjd', error);
        if (
          error.code == 'auth/wrong-password' ||
          error.code == 'auth/user-not-found'
        ) {
          return setSubmitError({
            ...submitError,
            passwordError: 'Invalid Email and Password ',
          });
        }
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
      const {idToken, user} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Checking Existing Methods
      let signInMethods = await auth().fetchSignInMethodsForEmail(user.email);

      if (signInMethods.length > 0) {
        // Sign-in the user with the credential
        auth()
          .signInWithCredential(googleCredential)
          .then(userInfo => {
            // console.log('UserInfo --->', userInfo.user);
            // if (!userInfo.additionalUserInfo.isNewUser) {
            AsyncStorage.setItem('userAuth', userInfo.user.uid);
            navigation.navigate('MainStack', {screen: 'Profile'});
            // }
          })
          .catch(e => alert('Error: ', e));
      } else {
        alert('No Such User Exist');
      }
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
  };

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

  return (
    <View
      style={[
        commonStyles.commonMain,
        {
          padding: 25,
        },
      ]}>
      <Spacer height={verticalScale(35)} />
      <CustomText
        label="Login"
        fontFamily="ProximaNova-Bold"
        // color={colors.facebookBlue}
        fontSize={verticalScale(15)}
      />
      <Spacer height={verticalScale(20)} />

      <LoginpWithCon
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
          setEmail(em);
          setSubmitError({...submitError, emailError: ''});
        }}
      />
      <Spacer height={verticalScale(20)} />
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
      <Spacer height={verticalScale(20)} />

      {/* <View style={{ flex: 1, alignItems: "center" }}> */}
      <View
        style={{
          alignSelf: 'center',
          padding: 10,
          position: 'absolute',
          bottom: verticalScale(40),
          width: '100%',
        }}>
        <CustomButton
          title="Login"
          fontFamily="ProximaNova-Bold"
          width="100%"
          loading={loading}
          backgroundColor={colors.primary}
          opacity={0.4}
          color={colors.white}
          marginTop={verticalScale(10)}
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
            fontFamily={'ProximaNova-Regular'}
            fontSize={verticalScale(12)}
          />
          <CustomText
            label="Sign up"
            fontFamily="ProximaNova-Bold"
            color={colors.black}
            marginLeft={verticalScale(5)}
            fontSize={verticalScale(12)}
            onPress={() => navigation.navigate('Signup')}
          />
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

export default Login;
