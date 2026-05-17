import React, { useContext, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { CartContext } from '../context/CartContext';

import { showSuccessToast } from '../utils/toast';
import { Product } from '../types/Product';

const ProductDetailsScreen = ({ route, navigation }: any) => {
  // Product Data
  const { product } = route.params;

  // Cart Context
  const { addToCart, cartItems } = useContext(CartContext);

  const [isAdded, setIsAdded] = useState(false);

  
  // Add To Cart
  const handleAddToCart = () => {
    // Check already exists
    const isExist = cartItems.some((item: Product) => item.id === product.id);

    // If already added
    if (isExist) {
      navigation.navigate('Cart')
      return;
    }

    // Add to cart
    addToCart(product);

    // Update local state
    setIsAdded(true);

    showSuccessToast('Added To Cart');
  };

  // Buy Now
  const handleBuyNow = () => {
    showSuccessToast('Proceeding to Checkout');
  };

  return (
    <>
      {/* Top Safe Area */}
      <SafeAreaView edges={['top']} style={styles.safeArea} />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
        >
          {/* Product Image */}
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: product.image }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* Product Content */}
          <View style={styles.content}>
            {/* Product Title */}
            <Text style={styles.title}>{product.title}</Text>

            {/* Rating */}
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color="#FFD700" />

              <Text style={styles.ratingText}>{product.rating.rate}</Text>

              <Text style={styles.ratingCount}>
                ({product.rating.count} reviews)
              </Text>
            </View>

            {/* Price */}
            <Text style={styles.price}>₹ {product.price}</Text>

            {/* Category */}
            <Text style={styles.category}>{product.category}</Text>

            {/* Description */}
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </ScrollView>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          {/* Add To Cart */}
          <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
            <Ionicons name="cart-outline" size={22} color="#fff" />

            <Text style={styles.buttonText}>
              {isAdded ? 'Go To Cart' : 'Add To Cart'}
            </Text>
          </TouchableOpacity>

          {/* Buy Now */}
          <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
            <Ionicons name="flash-outline" size={22} color="#fff" />

            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2874F0',
  },

  container: {
    flex: 1,
    backgroundColor: '#F1F3F6',
  },

  imageContainer: {
    backgroundColor: '#fff',

    paddingVertical: 20,
  },

  image: {
    width: '100%',
    height: 320,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',

    color: '#222',

    lineHeight: 34,
  },

  ratingContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 15,
  },

  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',

    marginLeft: 5,
  },

  ratingCount: {
    fontSize: 15,
    color: '#666',

    marginLeft: 10,
  },

  price: {
    fontSize: 32,
    fontWeight: 'bold',

    color: '#2874F0',

    marginTop: 20,
  },

  category: {
    fontSize: 16,
    color: '#666',

    marginTop: 10,

    textTransform: 'capitalize',
  },

  description: {
    fontSize: 16,

    lineHeight: 26,

    color: '#444',

    marginTop: 25,
  },

  bottomContainer: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',

    backgroundColor: '#fff',

    padding: 15,

    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  cartButton: {
    flex: 1,

    backgroundColor: '#FF9800',

    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 16,

    borderRadius: 12,

    marginRight: 10,
  },

  buyButton: {
    flex: 1,

    backgroundColor: '#2874F0',

    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 16,

    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',

    fontSize: 18,
    fontWeight: 'bold',

    marginLeft: 8,
  },
});

export default ProductDetailsScreen;
