import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

// import EmojiContext from '../context';
import EmojiContext from '../utils/context';

const Emoji = ({emoji}) => {
  const {setEmoji} = useContext(EmojiContext);
  return (
    <TouchableOpacity
      style={styles.container}
      // onPress={() => setEmoji(emoji)}
      onPress={() => {
        console.log('cdjbcjdj');
      }}>
      <Text style={styles.text}>{emoji}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 50,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default Emoji;
