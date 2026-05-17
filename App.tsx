import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <SafeAreaView edges={['top','bottom']} style={styles.safeArea} />
      <AppNavigator />;
      <Toast />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2a0dcd',
    paddingTop: 5,
  },
});
