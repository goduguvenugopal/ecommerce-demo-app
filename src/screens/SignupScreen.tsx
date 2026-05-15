import React, { useState } from 'react';

import { View, Text, ImageBackground } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/common/CustomInput';
import CustomButton from '../components/common/CustomButton';
import styles from '../styles/SignUpStyles';

const SignupScreen = ({ navigation }: any) => {
  // Full name state
  const [name, setName] = useState('');

  // Email state
  const [email, setEmail] = useState('');

  // Password state
  const [password, setPassword] = useState('');

  // Signup handler
  const handleSignup = () => {
    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/images/login-bg.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Dark overlay */}
        <View style={styles.overlay}>
          {/* Title */}
          <Text style={styles.title}>Fashion Store</Text>

          {/* Name Input */}
          <CustomInput
            placeholder="Enter full name"
            value={name}
            onChangeText={setName}
          />

          {/* Email Input */}
          <CustomInput
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
          />

          {/* Password Input */}
          <CustomInput
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Signup Button */}
          <CustomButton title="Signup" onPress={handleSignup}></CustomButton>
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Login')}
          >
            Already have an account? Login
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignupScreen;
