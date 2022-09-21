import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import GenderContainer from "../../../auth/AdditionInfo/molecules/GenderContainer";
import CustomText from "../../../../components/CustomText";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import icons from "../../../../../assets/icons";

const SelectBtn = ({ label, txt1, txt2, index,onValue }) => {
  const [status, setStatus] = useState(-1); //yes or no
  const [isSelect, setIsSelect] = useState(-1); //multiple
  return (
    <>
      <Spacer height={10} />
      <View style={{}}>
        <CustomText
          label={label}
          color={colors.darkOrange}
          fontFamily={"medium"}
          fontSize={11}
        />

        <Spacer height={10} />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* btn 1 */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setIsSelect(index);
              setStatus(1);
              onValue(txt1)
            }}
            style={[
              styles.mainContainer,
              {
                borderRadius: 50,
                borderColor:
                  isSelect == index && status
                    ? colors.darkOrange
                    : colors.gray,
                borderWidth: 1,
                flexDirection: "row",
              },
            ]}
          >
            <View style={{ flex: 7, alignItems: "center" }}>
              <CustomText
                label={txt1}
                color={
                  isSelect == index && status ? colors.darkOrange : colors.black
                }
                fontFamily="regular"
                fontSize={verticalScale(10)}
                marginLeft={scale(30)}
              />
            </View>
            {isSelect == index && status ? (
              <View style={{ flex: 3, alignItems: "center" }}>
                <Image
                  source={icons.tickPurple}
                  style={{ height: verticalScale(20), width: scale(20) }}
                  resizeMode={"contain"}
                />
              </View>
            ) : (
              <Spacer width={35}/>
            )}
          </TouchableOpacity>

          <Spacer width={10} />
          {/* btn 2 */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setIsSelect(index);
              setStatus(0);
              onValue(txt2)

            }}
            style={[
              styles.mainContainer,
              {
                borderRadius: 50,
                borderColor:
                  isSelect == index && !status
                    ? colors.darkOrange
                    : colors.gray,
                borderWidth: 1,
                flexDirection: "row",
              },
            ]}
          >
            <View style={{ flex: 7, alignItems: "center",justifyContent:"center" }}>
              <CustomText
                label={txt2}
                color={
                  isSelect == index && !status
                    ? colors.darkOrange
                    : colors.black
                }
                fontFamily="regular"
                fontSize={verticalScale(10)}
                marginLeft={scale(30)}
              />
            </View>
            {isSelect == index && !status ? (
              <View style={{ flex: 3, alignItems: "center" }}>
                <Image
                  source={icons.tickPurple}
                  style={{ height: verticalScale(20), width: scale(20) }}
                  resizeMode={"contain"}
                />
              </View>
            ) : (
              <Spacer width={35}/>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SelectBtn;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "130@s",
    height: "35@vs",
    alignItems: "center",
    justifyContent: "center",
  },
});
