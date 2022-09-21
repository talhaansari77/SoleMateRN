import React from "react";
import ExpoFastImage from "react-native-fast-image";

const FastImage = ({ source, style, uniqueKey }) => {
  return <ExpoFastImage cacheKey={uniqueKey} uri={source.uri} style={style} />;
};
// return <ExpoFastImage cacheKey={uniqueKey} uri={source.uri} style={style} />;

export default FastImage;