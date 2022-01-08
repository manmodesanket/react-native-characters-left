/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

const TWEET_CHARACTER_LIMIT = 15;

const App = () => {
  const [tweet, setTweet] = useState('');
  const charactersLeft = TWEET_CHARACTER_LIMIT - tweet.length;

  const getTextStyle = (charsLeft: number) => {
    if (charsLeft > 10) {
      return styles.innerText;
    } else if (charsLeft > 0) {
      return {...styles.innerText, color: '#d2bf00'};
    }
    return {...styles.innerText, color: 'red'};
  };

  const getTextInputStyle = (charsLeft: number) => {
    if (charsLeft > 10) {
      return styles.input;
    } else if (charsLeft > 0) {
      return {...styles.input, borderColor: '#d2bf00'};
    }
    return {...styles.input, borderColor: 'red'};
  };

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TextInput
          style={getTextInputStyle(charactersLeft)}
          onChangeText={setTweet}
          value={tweet}
          multiline={true}
        />
        <Text style={getTextStyle(charactersLeft)}>
          {charactersLeft} characters left
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    marginTop: WINDOW_HEIGHT * 0.1,
    opacity: 0.8,
    width: WINDOW_WIDTH * 0.8,
    height: WINDOW_HEIGHT * 0.3,
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
  },
  innerText: {
    marginTop: 4,
    textAlign: 'center',
  },
});

export default App;
