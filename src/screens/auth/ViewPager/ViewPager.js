import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import commonStyles from "../../../utils/CommonStyles";
import { styles } from "./styles";
import Signup from "../signup/Signup";
import AdditionInfo from "../AdditionInfo";
import CustomButton from "../../../components/CustomButton";
import Interests from '../../home/interests'
import { verticalScale, moderateScale } from "react-native-size-matters";
import { colors } from "../../../utils/Colors";
import CustomText from "../../../components/CustomText";

const ViewPager = ({navigation}) => {
  const [page, setPage] = useState(0);
  const pager = useRef(null);
  const onHandleSumbit = () => {
    if(page==2){
      navigation.navigate("MainStack")
    }
    else{
      pager?.current?.setPage(page + 1);
    }
  };
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <PagerView
        style={styles.pagerView}
        initialPage={page}
          // scrollEnabled={false}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
        ref={pager}
      >
        <View key="1">
          <Signup />
        </View>
        <View key="2">
          <AdditionInfo />
        </View>
        <View key="3">
          <Interests />
        </View>
      </PagerView>
      <View style={{ alignItems: "center", padding: 10 }}>
        <CustomButton
          title="Continue"
          fontFamily="bold"
          width="90%"
          opacity={0.4}
          color={colors.white}
          marginTop={verticalScale(10)}
          height={verticalScale(45)}
          borderRadius={moderateScale(15)}
          onPress={() => {
            onHandleSumbit();
          }}
        />
        {page == 0 ? (
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
              onPress={()=>navigation.navigate("Login")}
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default ViewPager;
