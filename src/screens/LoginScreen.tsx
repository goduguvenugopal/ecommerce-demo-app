import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, ImageBackground, Alert } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import CustomInput from '../components/common/CustomInput';
import CustomButton from '../components/common/CustomButton';
import styles from '../styles/loginStyles';
import { getUser, User } from '../storage/authStorage';
import { showSuccessToast } from '../utils/toast';

const LoginScreen = ({ navigation }: any) => {
  // Email state
  const [email, setEmail] = useState('');
  // Password state
  const [password, setPassword] = useState('');

  const fetchUser = async () => {
    try {
      const user: User = await getUser();

      if (user) {
        setEmail(user.email);
        setPassword(user.password);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Login handler
  const handleLogin = async () => {
    try {
      const user: User = await getUser();

      if (user.email === email && user.password === password) {
        showSuccessToast('Login Successful', 'Welcome back 👋');
        navigation.replace('Main');
      } else {
        Alert.alert('Warning', 'You have entered wrong credentials');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background image */}
      <ImageBackground
        source={require('../assets/images/login-bg.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Dark overlay */}
        <View style={styles.overlay}>
          {/* App title */}
          <Text style={styles.title}>Fashion Store</Text>

          {/* Email input */}
          <CustomInput
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
          />

          {/* Password input */}
          <CustomInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={{ color: 'white' }} onPress={fetchUser}>
            User Credentials
          </Text>

          {/* Login button */}
          <CustomButton title="Login" onPress={handleLogin} />
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Signup')}
          >
            Don't have an account? Signup
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
