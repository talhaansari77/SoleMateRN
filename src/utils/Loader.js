import { View } from "react-native";
import LottieView from "lottie-react-native";

const Loader = ({ loading, file }) => {
  return loading ? (
    <View
      style={{
        backgroundColor: "black",
        position: "absolute",
        opacity: 0.6,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      
      <LottieView
        style={{ height: 150 }}
        source={file}
        autoPlay
        speed={1.5}
      />
    </View>
  ) : (
    <></>
  );
};

export default Loader;
