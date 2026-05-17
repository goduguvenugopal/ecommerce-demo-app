import React from 'react';

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetailsScreen = ({ route }: any) => {
  // Product data from navigation
  const { product } = route.params;

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.safeArea} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Product Image */}
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Product Content */}
          <View style={styles.content}>
            {/* Product Title */}
            <Text style={styles.title}>{product.title}</Text>

            {/* Price */}
            <Text style={styles.price}>₹ {product.price}</Text>

            {/* Category */}
            <Text style={styles.category}>{product.category}</Text>

            {/* Description */}
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6dbdb',
    paddingTop:5
  },
  safeArea: {
    backgroundColor: '#2a0dcd',
    paddingTop:5

  },
  image: {
    width: '100%',
    height: 350,
    backgroundColor: '#fff',
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },

  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2874F0',
    marginBottom: 15,
  },

  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textTransform: 'capitalize',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
});

export default ProductDetailsScreen;
