import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Product {
  title: string;
  image: string;
  price: number;
}

interface Props {
  item: Product;

  navigation: any;
}

const ProductCard = ({ item, navigation }: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          product: item,
        })
      }
    >
      {/* Product Image */}
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Product Title */}
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>

      {/* Product Price */}
      <Text style={styles.price}>$ {item.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 4,
  },

  image: {
    width: '100%',
    height: 140,
    marginBottom: 10,
  },

  title: {
    fontSize: 14,
    color: '#333',
    minHeight: 40,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2874F0',
  },
});

export default ProductCard;
