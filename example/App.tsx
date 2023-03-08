/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Rating from 'react-native-rating-component';

function App(): JSX.Element {
  const [activeIndexState, setActiveIndexState] = useState(0);

  const onChangeRating = (index: number) => setActiveIndexState(index);

  return (
    <View style={styles.container}>
      <View>
        <Rating
          numberOfRating={5}
          activeIndex={activeIndexState}
          onChangeRating={onChangeRating}
          size={30}
          icon="shirt-outline"
          activeIcon="shirt"
          color="blue"
          activeColor="red"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
