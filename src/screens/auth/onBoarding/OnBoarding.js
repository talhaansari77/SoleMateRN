import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import OnBoardContainer from "./OnBoardContainer";
import AppIntroSlider from "react-native-app-intro-slider";
import welcomeImages from "../../../../assets/welocme_images";
import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";
import CustomGradientButton from "../../../components/CustomGradientButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoardingData = [
  {
    id: 0,
    title: "Get refer to by your friends",
    text1: "Please read our ",
    privacy: "privacy policy",
    regarding: "policy regarding",
    text2: " before registering.",

    image: welcomeImages.friendspurple,
    // backgroundColor: "#59b2ab",
  },
  {
    id: 1,
    title: "Chat with your special one",
    text1: "Please read our ",
    privacy: "privacy policy",
    regarding: "policy regarding",
    text2: " before registering.",

    image: welcomeImages.couplePurple,
    // backgroundColor: "#59b2ab",
  },
  {
    id: 2,
    title: "Delete the app after use",
    text1: "Please read our ",
    privacy: "privacy policy",
    regarding: "policy regarding",
    text2: " before registering.",

    image: welcomeImages.eminemPurple,
    // backgroundColor: "#59b2ab",
  },
];

const OnBoarding = ({ navigation }) => {
  const [page, setPage] = useState(0);

  const ref = useRef(null);
  const [isAuth, setIsAuth] = useState(true);
  useEffect(() => {
    (async function () {
      const user = await AsyncStorage.getItem("userAuth");
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "MainStack" }],
        });
      }
      setIsAuth(true);
    })();
  }, []);

  const moveForward = () => {
    if (page + 1 <= 2) {
      ref?.current?.goToSlide(page + 1);
      setPage(page + 1);
    } else {
      //   navigation.navigate("Registration");
    }
  };

  return isAuth ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* <OnBoardContainer/> */}
      <AppIntroSlider
        showNextButton={false}
        showDoneButton={false}
        ref={ref}
        data={OnBoardingData}
        dotStyle={{ marginTop: 100 }}
        activeDotStyle={{ marginTop: 100 }}
        onSlideChange={(index) => setPage(index)}
        keyExtractor={(item, index) => {
          item?.id + index.toString();
        }}
        renderItem={({ item }) => (
          <>
            <View style={styles.onBoardingContainer}>
              <View style={styles.imgConatiner}>
                <Image
                  source={item.image}
                  style={styles.img}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flexDirection: "row", marginVertical: 30 }}>
                <View style={{ width: verticalScale(40) }} />
                {page == 1 || page == 2 ? null : (
                  <View
                    style={page == 0 ? styles.dotactive1 : styles.dotInactive}
                  />
                )}
                {page == 2 ? null : (
                  <View
                    style={page == 1 ? styles.dotactive2 : styles.dotInactive}
                  />
                )}

                <View
                  style={page == 2 ? styles.dotactive3 : styles.dotInactive}
                />
                <View style={{ width: verticalScale(40) }} />
              </View>

              <CustomText
                label={item.title}
                fontFamily="bold"
                fontSize={verticalScale(16)}
              />
              <Spacer height={verticalScale(10)} />
              <View style={{ flexDirection: "row" }}>
                <CustomText
                  label={item.text1}
                  fontFamily="regular"
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                />
                <CustomText
                  label={item.privacy}
                  fontFamily="regular"
                  textDecorationLine={true}
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                  textDecorationColor="black"
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <CustomText
                  label="and "
                  fontFamily="regular"
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                />
                <CustomText
                  label={item.regarding}
                  fontFamily="regular"
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                  textDecorationColor="black"
                  textDecorationLine={true}
                />
                <CustomText
                  label={item.text2}
                  fontFamily="regular"
                  color={colors.gray}
                  fontSize={verticalScale(10)}
                />
              </View>
              <View
                style={{
                  marginTop: verticalScale(20),
                  width: "100%",
                  alignItems: "center",
                  // backgroundColor:"red"
                }}
              >
                {/* <CustomButton
                  title="Next"
                  fontFamily="bold"
                  width="90%"
                  backgroundColor={colors.primary}
                  marginTop={verticalScale(10)}
                  height={verticalScale(45)}
                  borderRadius={moderateScale(10)}
                  onPress={() => {
                    if (page == 2) {
                      navigation.navigate("Welcome");
                    } else {
                      moveForward();
                    }
                  }}
                /> */}

                <CustomGradientButton
                  title="Next"
                  fontFamily="bold"
                  marginTop={verticalScale(12)}
                  height={verticalScale(45)}
                  onPress={() => {
                    if (page == 2) {
                      navigation.navigate("Welcome");
                    } else {
                      moveForward();
                    }
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ marginTop: 10 }}
                  onPress={() => {
                    navigation.navigate("Signup");
                  }}
                >
                  <CustomText
                    label="Skip"
                    fontFamily="bold"
                    color={colors.primary}
                    // marginTop={20}
                    fontSize={verticalScale(12)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  ) : (
    <></>
    // <View style={{ flex: 1, backgroundColor: "#fff" }} />
  );
};

export default OnBoarding;

const styles = ScaledSheet.create({
  onBoardingContainer: {
    alignItems: "center",
    paddingTop: "5@vs",
    // backgroundColor:"red"
  },
  imgConatiner: {
    height: "58%",
    width: "100%",
    paddingRight: 5,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  dotInactive: {
    width: "8@s",
    height: "8@s",
    backgroundColor: colors.gray,
    borderRadius: "25@s",
    marginHorizontal: "5@s",
  },
  dotactive1: {
    width: "8@s",
    height: "8@s",
    backgroundColor: colors.primary,
    borderRadius: "99@s",
    marginHorizontal: "5@s",
  },
  dotactive2: {
    width: "35@s",
    height: "8@s",
    backgroundColor: colors.primary,
    borderRadius: "99@s",
    marginHorizontal: "5@s",
  },
  dotactive3: {
    width: "45@s",
    height: "8@s",
    backgroundColor: colors.primary,
    borderRadius: "99@s",
    marginHorizontal: "5@s",
  },
});
