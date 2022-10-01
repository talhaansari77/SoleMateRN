import React from 'react';
import FastImage from 'react-native-fast-image';

const Component = ({source, style}) => {
  return <FastImage source={source} style={style} />;
};
// return <ExpoFastImage cacheKey={uniqueKey} uri={source.uri} style={style} />;

export default Component;
