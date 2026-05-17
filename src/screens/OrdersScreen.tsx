import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const OrdersScreen = () => {

  return (

    <SafeAreaView style={styles.container}>

      {/* Empty Orders Image */}
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/4076/4076478.png',
        }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>
        No Orders Yet
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your placed orders will appear here
      </Text>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F3F6',
    padding: 20,
  },

  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },

});

export default OrdersScreen;