import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale, verticalScale } from "react-native-size-matters";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import TwoInputModal from "./TwoInputModal";
import CustomTextInput from "../../../../components/CustomTextInput";
import CustomButton from "../../../../components/CustomButton";

const IceBreakQField = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // const questions = [1, 2, 3];

  const [iceBreakerQ, setIceBreakerQ]= useState([
    1, 2, 3
  ]);

  const [iceBreakerA, setIceBreakerA]= useState([
    1, 2, 3
  ]);

  const [addIceBreakerQ, setAddIceBreakerQ] = useState("")
  const [addIceBreakerA, setAddIceBreakerA] = useState("")

  return (
    <>
    
      <View>
        <CustomText
          label={"Ice Breaker Question"}
          color={colors.primary}
          fontFamily={"medium"}
          fontSize={11}
        />

        <Spacer height={15} />

        <View>
          {iceBreakerQ.map((q , index) => (
            <View key={index}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  borderWidth: 1,
                  padding: moderateScale(15),
                  borderRadius: moderateScale(10),
                  borderStyle: "dashed",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onPress={() => setModalVisible(true)}
              >
                <View style={{ width: "80%" }}>
                  <CustomText fontSize={12} label={q.iceBreakerQ} color={colors.primary}>
                  {/* The last time I cried was */}
                  </CustomText>
                  <CustomText color={colors.gray} label={q.iceBreakerA} >
                    {/* The Last Time I Cried My Heat Out! */}
                  </CustomText>
                </View>
                <View
                  style={{
                    backgroundColor: colors.primary,
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon name="plus" color={colors.white} />
                </View>
              </TouchableOpacity>
              <Spacer height={10} />

             <TwoInputModal
             setModalVisible={setModalVisible}
             modalVisible={modalVisible}
             addIceBreakerQ={addIceBreakerQ}
             setAddIceBreakerQ={setAddIceBreakerQ}
             iceBreakerQ={iceBreakerQ}
             iceBreakerA={iceBreakerA}
             addIceBreakerA={addIceBreakerA}
             setAddIceBreakerA={setAddIceBreakerA}
             />
            </View>
          ))}
        </View>
      </View>
    </>
  );
};



export default IceBreakQField;
