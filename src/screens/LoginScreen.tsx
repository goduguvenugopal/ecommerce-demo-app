import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <SafeAreaView style={styles.container}>
      // Background image wrapper
      <ImageBackground
        source={require('../assets/images/login-bg.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Overlay */}
        <View style={styles.overlay}>
          {/* Title */}
          <Text style={styles.title}>Fashion Store</Text>

          {/* Email Input */}
          <TextInput
            placeholder="Enter email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          {/* Password Input */}
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Full background image
  background: {
    flex: 1,
  },

  // Safe area container
  container: {
    flex: 1,
    backgroundColor: 'rgba(175, 8, 209, 0.27)',
    //  paddingHorizontal: 20,
    paddingTop: 5,
  },

  // Dark transparent overlay
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(58, 55, 58, 0.5)',
    justifyContent: 'center',
    padding: 20,
  },

  // App title
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },

  // Input styling
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: 'white',
    fontSize: 18,
  },

  // Button styling
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  // Button text
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LoginScreen;
