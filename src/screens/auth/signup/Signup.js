import { View, Text } from "react-native";
import React, { useState } from "react";
import commonStyles from "../../../utils/CommonStyles";
import SignupWithCon from "./SignupWithCon";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import { verticalScale, moderateScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import ConditionPassCon from "./molecules/ConditionPassCon";
import CustomButton from "../../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "../../../utils/Colors";
import {
  validateEmail,
  checkCharPassword,
  checkNum,
  checkSymbol,
} from "../../../utils/Email_Password_Validation";
import { ValidateInput } from "./UseSignup";

import { styles } from "./styles";
import { color } from "react-native-elements/dist/helpers";
import { SignupEmailPassword } from "../../../services/FirebaseAuth";

const Signup = ({ navigation }) => {
  const [eyeClick, setEyeClick] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPass, setConfirmPass] = useState("")
  const [submitError, setSubmitError] = useState({
    emailError: "",
    passwordError: "",
    confPasswordError:""
  });
  // password.search(/[!/><"#$%&()¥|?>|=']/)==-1
  console.log("conPas",password)
  const passData = [
    {
      id: 1,
      txt1: "+ 8 characters ",
      txt2: "+ 1 symbols",
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
      txt1: "+ 1 number",
      txt2: "* get our password",
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
      "abcd@234@#$#$%^&*()=-{}/|-efghi234@#$jklm1234@#$%^&*()=-{}/|-567890,nopq234@#$rstu1234@#$%^&*()=-{}/|-567890,vwxyzABCDEFGHI@#$%^&*()=-{}/|-234567890,JKLMNOPQ@#$%^&*()=-{}/|-RSTUV@#$%^&*()=-{}/|-WXYZ1234567890,.!@#$%^&*()=-{}/|-";
    var passwordLength = 15;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    if (password) setPassword(password);
  };

  const onHandleSubmit = async () => {
    const response = ValidateInput(
      email,
      password,
      confirmPass,
      submitError,
      setSubmitError
    );

    if (response) {
      console.log("ok")
      setLoading(true);

      try {
        const res = await SignupEmailPassword(email, password);
        if (res.user.uid) {
         AsyncStorage.setItem("userAuth", res.user.uid);

          setLoading(false);

          navigation.reset({
            index: 0,
            routes: [{ name: "MainStack" }],
          });
        }
      } catch (error) {
        console.log("onSubmitRegister error", error);
        setSubmitError({
          ...submitError,
          emailError: "The email address is already in use by another account",
        });
        setLoading(false);
      }
    }
  };
  return (
    <View
      style={[
        commonStyles.commonMain,
        {
          padding: 25,
        },
      ]}
    >
      <Spacer height={verticalScale(20)} />
      <CustomText
        label="Sign up"
        fontFamily="bold"
        // color={colors.facebookBlue}
        fontSize={verticalScale(15)}
      />
      <Spacer height={verticalScale(15)} />
      <SignupWithCon />
      <Spacer height={verticalScale(20)} />
      <CustomTextInput
        value={email}
        withLabel="Email adress"
        placeholder={"example@gmail.com"}
        error={submitError.emailError}
        onChangeText={(em) => {
          setEmail(em);
          setSubmitError({ ...submitError, emailError: "" });
        }}
      />
      <Spacer height={verticalScale(15)} />
      <CustomTextInput
        withLabel="Password"
        value={password}
        error={submitError.passwordError}
        onChangeText={(pass) => {
          setPassword(pass);
          setSubmitError({ ...submitError, passwordError: "" });
        }}
        password
        secureTextEntry={eyeClick}
        eyeClick={eyeClick}
        setEyeClick={setEyeClick}
        placeholder={"password"}
      />
          <Spacer height={verticalScale(15)} />
      <CustomTextInput
        withLabel="Confirm Password"
        value={confirmPass}
        error={submitError.confPasswordError}
        onChangeText={(conpass) => {
          setConfirmPass(conpass);
          setSubmitError({ ...submitError, confPasswordError: "" });
        }}
        password
        secureTextEntry={eyeClick}
        eyeClick={eyeClick}
        setEyeClick={setEyeClick}
        placeholder={"Confirm password"}
      />
      <Spacer height={verticalScale(20)} />
      <View
        style={{
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {passData?.map((item) => {
          return (
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
          alignItems: "center",
          padding: 10,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <CustomButton
          title="Continue"
          fontFamily="bold"
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
            fontFamily="regular"
            fontSize={verticalScale(12)}
          />
          <CustomText
            label="Login"
            fontFamily="bold"
            color={colors.black}
            marginLeft={verticalScale(5)}
            fontSize={verticalScale(12)}
            onPress={
              () => navigation.navigate("Login")
              // onHandleSubmit()
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Signup;
