import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { removeUser } from '../storage/authStorage';

const ProfileScreen = ({ navigation }: any) => {
  // Logout handler
  const handleLogout = () => {
    Alert.alert('Logout', 'Logged out successfully');

    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        }}
        style={styles.profileImage}
      />

      {/* User Name */}
      <Text style={styles.name}>Fashion Store User</Text>

      {/* User Email */}
      <Text style={styles.email}>user@gmail.com</Text>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F1F3F6',
    paddingTop: 60,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },

  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 40,
  },

  logoutButton: {
    backgroundColor: '#2874F0',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
  },

  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
