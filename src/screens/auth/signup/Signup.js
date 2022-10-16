
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
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
import {LoginManager, AccessToken} from 'react-native-fbsdk';
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
  const [showPassword, setShowPassword] = useState(true);
  const [showConPassword, setShowConPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');
  const [submitError, setSubmitError] = useState({
    emailError: '',
    passwordError: '',
    confPasswordError: '',
  });

  // signup with google configration
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

  // password array
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
      // txt2: '* get our password',
      // color2: colors.gray,
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

  // generate password
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
  // validation function
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
        // create user with email and password
        const userCredentials = await auth().createUserWithEmailAndPassword(
          email.trim(),
          password.trim(),
        );
        if (userCredentials.user.uid) {
          // save user id in  AsyncStorage
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

  async function onFacebookButtonPress() {
    // LoginManager.logInWithPermissions(["email", "public_profile", "user_friends"]).then(
    //   function(result) {
    //     if (result.isCancelled) {
    //       alert("Login cancelled");
    //     } else {
    //       alert(
    //         "Login success with permissions: " +
    //           result.grantedPermissions.toString()
    //       );
    //     }
    //   },
    //   function(error) {
    //     alert("Login fail with error: " + error);
    //     console.log("Login fail with error: " + error);
    //   }
    // );
    console.log('FacebookButtonPressed');
    // Attempt login with permissions
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
        'user_friends',
      ]);
  // async function onFacebookButtonPress() {

  //   try {
  //     const result = await LoginManager.logInWithPermissions(["public_profile", "email", "user_friends"]);

  //     if (result.isCancelled) {
  //       alert('User cancelled the login process');
  //     }

  //     // Once signed in, get the users AccesToken
  //     const data = await AccessToken.getCurrentAccessToken();

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      const userInfo = auth().signInWithCredential(facebookCredential);
      alert('FB User Info --> ', JSON.stringify(userInfo));
    } catch (error) {
      alert('Error', error);
    }
  }
  //     if (!data) {
  //       alert('Something went wrong obtaining access token');
  //     }

  //     // Create a Firebase credential with the AccessToken
  //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  //     // Sign-in the user with the credential
  //     const userInfo = auth().signInWithCredential(facebookCredential);
  //     alert('FB User Info --> ', JSON.stringify(userInfo));
  //   } catch (error) {
  //     alert('Error', error);
  //   }

  // }
  const handleGoogleSignup = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Checking Existing Methods
      let signInMethods = await auth().fetchSignInMethodsForEmail(user.email);
      // Sign-in the user with the credential
      if (signInMethods.length > 0) {
        alert('User Already Exist');
      } else {
        // Sign-in the user with the credential
        auth()
          .signInWithCredential(googleCredential)
          .then(userInfo => {
            console.log('UserInfo --->', userInfo.user);
            AsyncStorage.setItem('userAuth', userInfo.user.uid);
            navigation.navigate('EditProfile');
          })
          .catch(e => alert('Error: ', e));
      }

      // setUserInfo(userInfo);
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Signup ');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available');
      } else {
        alert(error.message);
      }
    }
  };
  return (
    // <></>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
      style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            fontSize={verticalScale(15)}
          />
          <Spacer height={verticalScale(15)} />

          {/* signup with google button */}
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
            secureTextEntry={showPassword}
            eyeClick={showPassword}
            setEyeClick={setShowPassword}
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
            secureTextEntry={showConPassword}
            eyeClick={showConPassword}
            setEyeClick={setShowConPassword}
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
                // check password  validation
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
              marginTop: verticalScale(10),
              flex: 1,
              justifyContent: 'center',
            }}>
            {/* signup button */}
            <CustomButton
              title="Continue"
              opacity={0.4}
              loading={loading}
              color={colors.white}
              backgroundColor={'#8E59E2'}
              height={verticalScale(45)}
              borderRadius={moderateScale(15)}
              onPress={() => {
                //  check input validation
                onHandleSubmit();
              }}
            />
            <View style={styles.bottomConatiner}>
              <CustomText
                label="Already have an account?"
                fontFamily="ProximaNova-Regular"
                fontSize={verticalScale(11)}
                color={colors.gray}
              />

              {/* login button */}
              <CustomText
                label="Login"
                fontFamily="ProximaNova-Bold"
                color={colors.black}
                marginLeft={verticalScale(5)}
                fontSize={verticalScale(11)}
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Login'}],
                  })
                
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
