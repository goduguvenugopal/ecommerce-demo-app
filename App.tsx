import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet } from 'react-native';

import Toast from 'react-native-toast-message';

import AppNavigator from './src/navigation/AppNavigator';

import AppProvider from './src/context/AppProvider';

const App = () => {
  return (
    <AppProvider>
      {/* Global Top Safe Area */}
      <SafeAreaView edges={['top']} style={styles.safeArea} />

      {/* Navigation */}
      <AppNavigator />

      {/* Global Toast */}
      <Toast />
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
   
    backgroundColor: '#2874F0',
    paddingTop: 5,
  },
});
