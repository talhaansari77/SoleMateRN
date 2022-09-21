import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
// import { BlurView } from "expo-blur";
import { colors } from "../../../utils/Colors";
import styled from "react-native-styled-components";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import moment from "moment";

import profileImages from "../../../../assets/Profile_images";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { Divider } from "react-native-elements";
import CustomButton from "../../../components/CustomButton";
import Header from "./molecules/Header";
import ProfileImage from "./molecules/ProfileImage";
import AboutMeText from "./molecules/AboutMeText";
import IceBreakQ from "./molecules/IceBreakQ";
import ProfileTags from "./molecules/ProfileTags";
import Infos from "./molecules/Infos";
import FavFoodText from "./molecules/FavFoodText";
import ActionBtn from "./molecules/ActionBtn";
import GetAppBtn from "./molecules/GetAppBtn";
import icons from "../../../../assets/icons";
import { getAuthId, getSpecificeUser } from "../../../services/FirebaseAuth";
import Loader from "../../../utils/Loader";
const traits = [
  { id: 1, trait: "Gamer" },
  { id: 2, trait: "Lover" },
  { id: 3, trait: "Sports" },
  { id: 4, trait: "Good Look" },
  { id: 5, trait: "Charming" },
  { id: 6, trait: "fit" },
];
const basicInfo = [
  {
    id: 1,
    title: "Current Location",
    label: "California, US",
    icon: icons.location,
  },
  { id: 2, title: "Family Origin", label: "Us", icon: icons.featherFlag },
  { id: 3, title: "Height", label: "5'6", icon: icons.resizeHeight },
  { id: 4, title: "Language", label: "English", icon: icons.language },
];
const education = [
  { id: 1, title: "Occupation", label: "California, US", icon: icons.work },
  { id: 2, title: "Education", label: "Us", icon: icons.education },
];
const religiousness = [
  { id: 1, title: "Religion", label: "California, US", icon: icons.moonStar },
  { id: 2, title: "Religiousity", label: "Us", icon: icons.bookOpen },
  { id: 3, title: "Prayer level", label: "5'6", icon: icons.partlySunny },
  { id: 4, title: "Sector", label: "English", icon: icons.expandArrow },
];
const expectation = [
  {
    id: 1,
    title: "Marital History",
    label: "California, US",
    icon: icons.heartBeatBlack,
  },
  { id: 2, title: "Marital Timing", label: "Us", icon: icons.heartBlack },
  { id: 3, title: "Want Kind?", label: "5'6", icon: icons.babayCarriage },
  { id: 4, title: "Has Children?", label: "English", icon: icons.baby },
  {
    id: 5,
    title: "Willing to Relocate",
    label: "California, US",
    icon: icons.locationEdit,
  },
  { id: 6, title: "Job Status", label: "Us", icon: icons.work },
  { id: 7, title: "Drinking", label: "5'6", icon: icons.drink },
  { id: 8, title: "Smoking", label: "English", icon: icons.smoking },
];
const Profile = ({ navigation, actions = false, getApp = false }) => {
  const [authID, setAuthID] = useState("");
  const [authData, setAuthData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("authData", authData?.images?.[0]);

  var a = moment();
  var b = moment(authData.dob, "YYYY");
  var age = a.diff(b, "years");

  useEffect(() => {
    getAuthData();
  }, []);

  const getAuthData = async () => {
    setLoading(true);
    await getAuthId().then((id) => {
      setAuthID(id);

      getSpecificeUser(id).then((data) => {
        setAuthData(data);
        setLoading(false);
      });
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingVertical: verticalScale(25),
          paddingBottom: 0,
          flex: 1,
        }}
      >
        {/* Actions */}
        <ActionBtn actions={actions} />

        {/* Get The App */}

        <GetAppBtn getApp={getApp} />

        <Header navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          
            <ProfileImage
              showName
              name={authData?.firstName}
              age={age}
              location={authData?.location}
              src={{ uri: authData?.images?.[0] }}
              loading={loading}
            />

            {/* About Me */}
            <AboutMeText aboutMe={authData?.aboutMe} />
            <Divider />
            {/* Ice Break Question*/}
            <IceBreakQ />
            <Divider />
            <ProfileImage
              src={{ uri: authData?.images?.[2] }}
              loading={loading}
            />
            {/* Tags */}
            <ProfileTags title={"Personality"} data={authData?.personality} />
            <Divider />
            {/* info */}
            <Infos
              title={"Basic Info"}
              icon={icons.location}
              icon1={icons.location}

              label={"Current Location"}
              label1={"Family Origin"}

              name={authData?.location}
              name1={authData?.location}

              infoList={basicInfo}
            />
            {/*ProfileImage*/}
            <ProfileImage src={profileImages.prettyFace} showName={false} />
            {/* favorite food */}
            <FavFoodText />
            <Divider />
            {/* Education and Career */}
            <Infos title={"Education and Career"} infoList={education} />

            {/* ProfileImage */}
            <ProfileImage src={profileImages.prettyFace} showName={false} />

            {/* Religiousness */}
            <Infos title={"Religiousness"} infoList={religiousness} />

            <Divider />
            {/* Characteristics */}
            <ProfileTags title={"Characteristics"} tagsList={traits} />
            <Divider />
            {/* Partner Expectation */}
            <Infos title={"Partner Expectation "} infoList={expectation} />
         
          {/* End */}
        </ScrollView>
      </View>

      {/* loading={loading}
        file={require("../../../../assets/loaders/loader1.json")} */}
      {/* <Loader 
    loading={loading}
    file={require( "../../../../assets/loader/heartLoading.json")}/> */}
    </View>
  );
};

export default Profile;

export const Container = styled(View, {
  width: "100%",
  padding: moderateScale(20),
  paddingBottom: 0,
  flex: 1,
});
export const PaddingLeft = styled(View, {
  paddingLeft: scale(25),
});