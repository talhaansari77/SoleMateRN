import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/Colors";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../../../../components/CustomButton";
import CustomTextInput from "../../../../components/CustomTextInput";

const TagsField = ({ title, label, addItems,item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View>
        <Spacer height={10} />
        <View
          // style={{
          //   display: "flex",
          //   justifyContent: "space-around",
          //   flexWrap: "wrap",
          //   flexDirection: "row",
          // }}
        >
          { label? (
            <TouchableOpacity
              activeOpacity={0.9}
              style={{
                paddingVertical: verticalScale(6),
                paddingHorizontal: scale(20),
                marginHorizontal: verticalScale(2),
                backgroundColor: colors.primary,
                borderRadius: moderateScale(20),

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomText color={colors.white}>{label}</CustomText>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
    </>
  );
};

export default TagsField;
