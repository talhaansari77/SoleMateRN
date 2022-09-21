import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
// import SettingsArray from "./molecules/SettingsArray";
import styled from "react-native-styled-components";
import { moderateScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
// import MainSettingsArray from "./molecules/MainSettingsArray";
import ToggleSwitch from "toggle-switch-react-native";
import icons from '../../../../assets/icons'
import { colors } from "../../../utils/Colors";
import {Divider} from 'react-native-elements'

function GeneralSettings({navigation}) {
  const [isOn, setisOn] = useState({
    global: false,
    withProfile: false,
    withSticker: true,
 } 
  );
  const toggleSwitch = () => setisOn((previousState) => !previousState);

  return (
    <SafeAreaView>
      <Container>
        <TouchableOpacity>
        <View>
          <CustomText
            fontSize={14}
            fontWeight={"700"}
            alignSelf={"flex-end"}
            marginTop={-10}
            color={colors.primary}
            fontFamily={'bold'}
          >
            Done
          </CustomText>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View>
          <CustomText
            fontSize={22}
            fontWeight={"700"}
            marginBottom={35}
            marginTop={17}
            fontFamily={'bold'}
          >
            Settings
          </CustomText>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <DirectionRow >
          <CustomText fontFamily={'bold'} fontSize={14} fontWeight={"700"} marginTop={-5}>
            Location
          </CustomText>

            <View style={{width: '91%'}}>
          <CustomText
            fontSize={12}
            color={colors.gray}
            marginLeft={50}
            marginTop={-8}
            fontFamily={'regular'}
          >
            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
          </CustomText>
          </View>
        </DirectionRow>
      </TouchableOpacity>
      </Container>
      <Divider />

      <Container>
      <TouchableOpacity>
        <WithSwitch>
        <CustomText fontFamily={'bold'} fontSize={14} fontWeight={"700"} marginTop={3}>
            Global
        </CustomText>

        <ToggleSwitch
        isOn={isOn.global}
        onColor={colors.primary}
        offColor={colors.switchGray}
        labelStyle={{ color: "black", fontWeight: "900" }}
        size="large"
        onToggle={() => {
          setisOn({...isOn,global:!isOn.global});
        }}
      />
      </WithSwitch>
      
      <CustomText fontFamily={'regular'} fontSize={11} marginTop={10} alignSelf={'flex-start'} color={colors.gray}>
      The global mode turns on as soon as the profiles in this location run out.
      </CustomText>
      </TouchableOpacity>


        <TouchableOpacity>
      <WithSwitch style={{marginTop: 50}}>
        <CustomText fontFamily={'bold'} fontSize={14} fontWeight={"700"} marginTop={6}>
        Show me with profile
        </CustomText>

        <ToggleSwitch
        isOn={isOn.withProfile}
        onColor={colors.primary}
        offColor={colors.switchGray}
        labelStyle={{ color: "black", fontWeight: "900" }}
        size="large"
        onToggle={() => {
          setisOn({...isOn,withProfile:!isOn.withProfile});
        }}
      />
      </WithSwitch>
      </TouchableOpacity>
      </Container>

      <Divider />


      <Container>
        <TouchableOpacity>
        <WithSwitch>
        <CustomText fontFamily={'bold'} fontSize={14} fontWeight={"700"} marginTop={6}>
        Show me only with sticker
        </CustomText>

        <ToggleSwitch
        isOn={isOn.withSticker}
        onColor={colors.primary}
        offColor={colors.switchGray}
        labelStyle={{ color: "black", fontWeight: "900" }}
        size="large"
        onToggle={() => {
          setisOn({...isOn,withSticker:!isOn.withSticker});
        }}
      />
      </WithSwitch>
      <CustomText fontFamily={'regular'} fontSize={11} marginTop={17} alignSelf={'flex-start'} color={colors.gray}>
      You can turn off the profile function and only turn on the sticker system. All participants will see and find you only by the sticker.      
      </CustomText>
      </TouchableOpacity>
      </Container>

      <Divider />
      <Container>
        <TouchableOpacity  onPress={() => navigation.navigate("MainSettings")}>
        <WithSwitch>
            <CustomText fontFamily={'bold'} fontSize={14} fontWeight={"700"} marginTop={5}>
            Profile management
            </CustomText>

            <CustomText fontFamily={'regular'} fontSize={12} color={colors.gray} marginTop={5} marginLeft={80}>
                All Settings 
            </CustomText>
            <Image style={{marginTop: 10,}} source={icons.rightArrowBlack} />
        </WithSwitch>
        </TouchableOpacity>
      </Container>
      <Divider />




     
    </SafeAreaView>
  );
}

const Container = styled(View, {
  padding: 20,
});

const DirectionRow = styled(View, {
  flexDirection: "row",
});

const Underline = styled(View, {
  borderBottomColor: "#eee",
  borderBottomWidth: 2,
  width: moderateScale(380),
});

const WithSwitch = styled(View, {
    justifyContent: "space-between",
    flexDirection: 'row'
});

export default GeneralSettings;
