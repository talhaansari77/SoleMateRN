import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import { Spacer } from "../../../components/Spacer";
import styled from "react-native-styled-components";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Tag from "./molecules/Tag";
import { Container } from "../profile/Profile";

const Interests = () => {
  const [interests, setInterests] = useState([
    { id: 1, name: "TV show", status: false },
    { id: 2, name: "music", status: false },
    { id: 3, name: "books", status: false },
    { id: 4, name: "sport", status: false },
    { id: 5, name: "shopping", status: false },
    { id: 6, name: "movie", status: false },
    { id: 7, name: "games", status: false },
    { id: 8, name: "drinks", status: false },
    { id: 9, name: "social N.", status: false },
    { id: 10, name: "family", status: false },
    { id: 11, name: "pets", status: false },
    { id: 12, name: "politics", status: false },
    { id: 13, name: "dance", status: false },
    { id: 14, name: "bars", status: false },
    { id: 15, name: "travel", status: false },
    { id: 16, name: "art", status: false },
  ]);

  const InterestsBox = styled(View, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  });

  return (
      <Container>
        <Spacer height={30} />
        <CustomText fontFamily={"bold"} fontSize={24}>
          My Interests
        </CustomText>
        <Spacer height={10} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <InterestsBox>
            {interests.map((item, index) => (
              // <CustomImage src={avatar}/>
              <Tag name={item.name} />
            ))}
          </InterestsBox>
        </ScrollView>
      </Container>
  );
};

export default Interests;
