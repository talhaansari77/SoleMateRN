import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import styled from 'react-native-styled-components';
import CustomText from '../../../components/CustomText';
import icons from '../../../../assets/icons';
import {colors} from '../../../utils/Colors';
import {Divider} from 'react-native-elements';

function GeneralSettings({navigation}) {
  const [isOn, setisOn] = useState({
    global: false,
    withProfile: false,
    withSticker: true,
  });

  //  global Switch function
  const onGlobal = () => {
    setisOn({...isOn, global: !isOn.global});
  };
  //  global ViewProfile function

  const onViewProfile = () => {
    setisOn({...isOn, withProfile: !isOn.withProfile});
  };

  //  global WithSticke function

  const onWithSticker = () => {
    setisOn({...isOn, withSticker: !isOn.withSticker});
  };

  return (
    <SafeAreaView>
      <Container>
        <TouchableOpacity>
          <View>
            <CustomText
              fontSize={22}
              fontWeight={'700'}
              // marginBottom={35}
              marginTop={17}
              fontFamily={'ProximaNova-Bold'}>
              Settings
            </CustomText>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <DirectionRow>
            <CustomText
              fontFamily={'ProximaNova-Bold'}
              fontSize={14}
              fontWeight={'700'}
              marginTop={-5}>
              Location
            </CustomText>

            <View style={{width: '90%'}}>
              <CustomText
                fontSize={12}
                color={colors.gray}
                marginLeft={30}
                marginTop={-8}
                fontFamily={'ProximaNova-Regular'}>
                Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
              </CustomText>
            </View>
          </DirectionRow>
        </TouchableOpacity> */}
      </Container>
      <Divider />

      <Container>
        {/* <TouchableOpacity>
          <WithSwitch>
            <CustomText
              fontFamily={'ProximaNova-Bold'}
              fontSize={14}
              fontWeight={'700'}
              marginTop={3}>
              Global
            </CustomText>

            <Switch
              value={isOn.global}
              trackColor={{false: colors.switchGray, true: colors.darkOrange}}
              thumbColor={colors.white}
              style={{transform: [{scaleX: 1.1}, {scaleY: 1.1}]}}
              onValueChange={onGlobal}
            />
          </WithSwitch>

          <CustomText
            fontFamily={'ProximaNova-Regular'}
            fontSize={11}
            marginTop={10}
            alignSelf={'flex-start'}
            color={colors.gray}>
            The global mode turns on as soon as the profiles in this location
            run out.
          </CustomText>
        </TouchableOpacity> */}

        <TouchableOpacity>
          <WithSwitch style={{marginTop: 10}}>
            <CustomText
              fontFamily={'ProximaNova-Bold'}
              fontSize={14}
              fontWeight={'700'}
              marginTop={6}>
              Show me with profile
            </CustomText>

            <Switch
              value={isOn.withProfile}
              trackColor={{false: colors.switchGray, true: colors.darkOrange}}
              thumbColor={colors.white}
              style={{transform: [{scaleX: 1.1}, {scaleY: 1.1}]}}
              onValueChange={onViewProfile}
            />
          </WithSwitch>
        </TouchableOpacity>
      </Container>

      <Divider />

      <Container>
        {/* <TouchableOpacity>
          <WithSwitch>
            <CustomText
              fontFamily={'ProximaNova-Bold'}
              fontSize={14}
              fontWeight={'700'}
              marginTop={6}>
              Show me only with sticker
            </CustomText>

            <Switch
              value={isOn.withSticker}
              trackColor={{false: colors.switchGray, true: colors.darkOrange}}
              thumbColor={colors.white}
              style={{transform: [{scaleX: 1.1}, {scaleY: 1.1}]}}
              onValueChange={onWithSticker}
            />
          </WithSwitch>
          <CustomText
            fontFamily={'ProximaNova-Regular'}
            fontSize={11}
            marginTop={17}
            alignSelf={'flex-start'}
            color={colors.gray}>
            You can turn off the profile function and only turn on the sticker
            system. All participants will see and find you only by the sticker.
          </CustomText>
        </TouchableOpacity> */}
      </Container>

      <Divider />
      <Container>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('MainSettings')}>
          <WithSwitch>
            <CustomText
              fontFamily={'ProximaNova-Bold'}
              fontSize={14}
              fontWeight={'700'}
              marginTop={5}>
              Profile management
            </CustomText>

            <CustomText
              fontFamily={'ProximaNova-Regular'}
              fontSize={12}
              color={colors.gray}
              marginTop={5}
              marginLeft={80}>
              All Settings
            </CustomText>
            <Image style={{marginTop: 10}} source={icons.rightArrowBlack} />
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
  flexDirection: 'row',
});

const WithSwitch = styled(View, {
  justifyContent: 'space-between',
  flexDirection: 'row',
});

export default GeneralSettings;
