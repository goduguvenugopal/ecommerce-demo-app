import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  AuthContext,
} from '../context/AuthContext';

import {
  showSuccessToast,
} from '../utils/toast';


const ProfileScreen = ({
  navigation,
}: any) => {

  const {
    user,
    logout,
  } = useContext(AuthContext);


  // Logout Handler
  const handleLogout = () => {

    Alert.alert(

      'Logout',

      'Are you sure you want to logout?',

      [
        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Logout',

          onPress: () => {
            showSuccessToast(
              'Logged out successfully',
            );

            navigation.replace('Login');
          },
        },
      ],
    );
  };


  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* Header */}
        <Text style={styles.header}>
          My Profile
        </Text>


        {/* Profile Card */}
        <View style={styles.profileCard}>

          {/* Profile Image */}
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}

            style={styles.profileImage}
          />


          {/* User Name */}
          <Text style={styles.name}>
            {user?.name || 'Fashion Store User'}
          </Text>


          {/* User Email */}
          <Text style={styles.email}>
            {user?.email}
          </Text>

        </View>


        {/* Options Section */}
        <View style={styles.optionsContainer}>


          {/* Orders */}
          <TouchableOpacity style={styles.optionCard}>

            <Ionicons
              name="bag-handle-outline"
              size={24}
              color="#2874F0"
            />

            <Text style={styles.optionText}>
              My Orders
            </Text>

          </TouchableOpacity>


          {/* Address */}
          <TouchableOpacity style={styles.optionCard}>

            <Ionicons
              name="location-outline"
              size={24}
              color="#2874F0"
            />

            <Text style={styles.optionText}>
              Saved Addresses
            </Text>

          </TouchableOpacity>


          {/* Wishlist */}
          <TouchableOpacity style={styles.optionCard}>

            <Ionicons
              name="heart-outline"
              size={24}
              color="#2874F0"
            />

            <Text style={styles.optionText}>
              Wishlist
            </Text>

          </TouchableOpacity>


          {/* Support */}
          <TouchableOpacity style={styles.optionCard}>

            <Ionicons
              name="help-circle-outline"
              size={24}
              color="#2874F0"
            />

            <Text style={styles.optionText}>
              Help & Support
            </Text>

          </TouchableOpacity>

        </View>


        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}

          onPress={handleLogout}
        >

          <Ionicons
            name="log-out-outline"
            size={22}
            color="#fff"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F1F3F6',
  },


  header: {
    fontSize: 32,
    fontWeight: 'bold',

    color: '#2874F0',

    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },


  profileCard: {
    backgroundColor: '#fff',

    marginHorizontal: 20,

    borderRadius: 20,

    paddingVertical: 30,

    alignItems: 'center',

    elevation: 3,
  },


  profileImage: {
    width: 110,
    height: 110,

    borderRadius: 55,

    marginBottom: 15,
  },


  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },


  email: {
    fontSize: 16,
    color: '#666',

    marginTop: 8,
  },


  optionsContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },


  optionCard: {
    backgroundColor: '#fff',

    flexDirection: 'row',

    alignItems: 'center',

    padding: 18,

    borderRadius: 14,

    marginBottom: 15,

    elevation: 2,
  },


  optionText: {
    fontSize: 18,
    color: '#333',

    marginLeft: 15,

    fontWeight: '500',
  },


  logoutButton: {
    backgroundColor: '#E53935',

    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 20,

    marginTop: 10,
    marginBottom: 40,

    paddingVertical: 16,

    borderRadius: 14,
  },


  logoutText: {
    color: '#fff',

    fontSize: 18,
    fontWeight: 'bold',

    marginLeft: 10,
  },

});


export default ProfileScreen;