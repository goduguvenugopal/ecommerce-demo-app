import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.box}>
        <Text>1</Text>
      </View>

      <View style={styles.box}>
        <Text>2</Text>
      </View>

      <View style={styles.box}>
        <Text>3</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  box: {
    width: 100,
    height: 100,

    backgroundColor: 'tomato',

    margin: 10,

    justifyContent: 'center',

    alignItems: 'center',
  },
});

export default App;