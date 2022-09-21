import React, { useState } from "react";
import commonStyles from "../../../utils/CommonStyles";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import { moderateScale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import ConditionPassCon from "./molecules/ConditionPassCon";
import { View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/Colors";
import { styles } from "../ViewPager/styles";
import LoginpWithCon from "./LoginWithCon";
import { ValidateInput } from "../signup/UseSignup";
import { AuthLogin } from "../../../services/FirebaseAuth";
import { ValidateLogin } from "./molecules/UseLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [eyeClick, setEyeClick] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState({
    emailError: "",
    passwordError: "",
  });

  const onHandleSubmit = async () => {
    const response = ValidateLogin(
      email,
      password,
      submitError,
      setSubmitError
    );

    if (response) {
      console.log("cdcdc");
      setLoading(true);

      try {
        const res = await AuthLogin(email, password);
        if (res.user.uid) {

          AsyncStorage.setItem("userAuth", res.user.uid);

          navigation.reset({
            index: 0,
            routes: [{ name: "MainStack" }],
          });
        }
      } catch (error) {
        setLoading(false);
        console.log("cjdbjd",error)
        if (
          error.code == "auth/wrong-password" ||
          error.code == "auth/user-not-found"
        ) {
          return setSubmitError({
            ...submitError,
            passwordError: "Invalid Email and Password ",
          });
        }
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
      <Spacer height={verticalScale(35)} />
      <CustomText
        label="Login"
        fontFamily="bold"
        // color={colors.facebookBlue}
        fontSize={verticalScale(15)}
      />
      <Spacer height={verticalScale(20)} />

      <LoginpWithCon />
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
      <Spacer height={verticalScale(20)} />
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
      <Spacer height={verticalScale(20)} />

      {/* <View style={{ flex: 1, alignItems: "center" }}> */}
      <View
        style={{
          alignSelf: "center",
          padding: 10,
          position: "absolute",
          bottom: verticalScale(40),
          width: "100%",
        }}
      >
        <CustomButton
          title="Login"
          fontFamily="bold"
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
            fontFamily="regular"
            fontSize={verticalScale(12)}
          />
          <CustomText
            label="Sign up"
            fontFamily="bold"
            color={colors.black}
            marginLeft={verticalScale(5)}
            fontSize={verticalScale(12)}
            onPress={() => navigation.navigate("Signup")}
          />
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

export default Login;
