import { View, Image, TouchableOpacity, Text } from "react-native";
import styled from "react-native-styled-components";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import profileImages from "../../../../../assets/Profile_images";
import { colors } from "../../../../utils/Colors";
const PictureBox = () => {
  return (
    <View style={{ height: verticalScale(300) }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 3.33 * 2,
        }}
      >
        <TouchableOpacity activeOpacity={0.8} style={{ flex: 3.33 * 2 }}>
          <Text
            style={{
              position: "absolute",
              zIndex: 1,
              color: colors.white,
              fontFamily: "bold",
              top: verticalScale(10),
              left: scale(10),
            }}
          >
            1
          </Text>
          <Image
            source={profileImages.profile01}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            height: verticalScale(200),
            flex: 3.33,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flex: 1,
              paddingLeft: moderateScale(5),
            }}
          >
            <Text
              style={{
                position: "absolute",
                zIndex: 1,
                color: colors.white,
                fontFamily: "bold",
                top: verticalScale(10),
                left: scale(10),
              }}
            >
              2
            </Text>
            <Image
              source={profileImages.profile02}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flex: 1,
              paddingLeft: moderateScale(5),
              paddingTop: verticalScale(5),
            }}
          >
            <Text
              style={{
                position: "absolute",
                zIndex: 1,
                color: colors.white,
                fontFamily: "bold",
                top: verticalScale(10),
                left: scale(10),
              }}
            >
              3
            </Text>
            <Image
              source={profileImages.profile03}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",

          justifyContent: "space-between",
          alignItems: "center",
          flex: 3.33,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ flex: 1, paddingTop: verticalScale(5) }}
        >
          <Text
            style={{
              position: "absolute",
              zIndex: 1,
              color: colors.white,
              fontFamily: "bold",
              top: verticalScale(10),
              left: scale(10),
            }}
          >
            4
          </Text>
          <Image
            source={profileImages.profile01}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flex: 1,
            paddingLeft: moderateScale(5),
            paddingTop: verticalScale(5),
          }}
        >
          <Text
            style={{
              position: "absolute",
              zIndex: 1,
              color: colors.white,
              fontFamily: "bold",
              top: verticalScale(10),
              left: scale(10),
            }}
          >
            5
          </Text>
          <Image
            source={profileImages.profile02}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flex: 1,
            paddingLeft: moderateScale(5),
            paddingTop: verticalScale(5),
          }}
        >
          <Text
            style={{
              position: "absolute",
              zIndex: 1,
              color: colors.white,
              fontFamily: "bold",
              top: verticalScale(10),
              left: scale(10),
            }}
          >
            6
          </Text>
          <Image
            source={profileImages.profile03}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
   
    </View>
  );
};

export default PictureBox;

const VerticalPadding = styled(View, {
  paddingVertical: 20,
});
