import { View } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import commonStyles from "../../../../utils/CommonStyles";

const ProfileNav = ({ LeftSide, Center, RightSide }) => {
  return (
    <Row>
      {LeftSide ? <LeftSide /> : <></>}
      {Center ? <Center /> : <></>}
      {RightSide ? <RightSide /> : <></>}
    </Row>
  );
};

export default ProfileNav;

const Row = styled(View, {
  ...commonStyles.rowContainer,
  justifyContent: "space-between",
  // backgroundColor:'red'
});

