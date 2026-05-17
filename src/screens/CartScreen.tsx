import React, {
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { CartContext } from '../context/CartContext';

import { Product } from '../types/product';

import {
  showSuccessToast,
} from '../utils/toast';


const CartScreen = () => {

  const {
    cartItems,
    removeFromCart,
  } = useContext(CartContext);


  // Total Price
  const totalPrice = useMemo(() => {

    return cartItems.reduce(
      (total: number, item: Product) => {
        return total + item.price;
      },
      0,
    );

  }, [cartItems]);


  // Remove Item
  const handleRemove = (id: number) => {

    removeFromCart(id);

    showSuccessToast(
      'Item Removed',
    );
  };


  // Empty Cart
  if (cartItems.length === 0) {

    return (

      <SafeAreaView style={styles.emptyContainer}>

        <Ionicons
          name="cart-outline"
          size={120}
          color="#bbb"
        />

        <Text style={styles.emptyTitle}>
          Your Cart is Empty
        </Text>

        <Text style={styles.emptySubtitle}>
          Add products to your cart
        </Text>

      </SafeAreaView>
    );
  }





  return (

    <SafeAreaView style={styles.container}>

      {/* Header */}
      <Text style={styles.header}>
        My Cart
      </Text>


      {/* Cart Products */}
      <FlatList
        data={cartItems}

        keyExtractor={(item: Product) =>
          item.id.toString()
        }

        showsVerticalScrollIndicator={false}

        contentContainerStyle={{
          paddingBottom: 140,
        }}

        renderItem={({ item }) => (

          <View style={styles.card}>

            {/* Product Image */}
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />


            {/* Product Details */}
            <View style={styles.content}>

              <Text
                numberOfLines={2}
                style={styles.title}
              >
                {item.title}
              </Text>

              <Text style={styles.price}>
                ₹ {item.price}
              </Text>


              {/* Remove Button */}
              <TouchableOpacity
                style={styles.removeButton}

                onPress={() =>
                  handleRemove(item.id)
                }
              >

                <Ionicons
                  name="trash"
                  size={18}
                  color="#fff"
                />

                <Text style={styles.removeText}>
                  Remove
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        )}
      />


      {/* Bottom Checkout Section */}
      <View style={styles.bottomContainer}>

        <View>

          <Text style={styles.totalLabel}>
            Total Price
          </Text>

          <Text style={styles.totalPrice}>
            ₹ {totalPrice.toFixed(2)}
          </Text>

        </View>


        {/* Checkout Button */}
        <TouchableOpacity
          style={styles.checkoutButton}
        >

          <Text style={styles.checkoutText}>
            Checkout
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F1F3F6',
  },


  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2874F0',

    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },


  card: {
    flexDirection: 'row',

    backgroundColor: '#fff',

    marginHorizontal: 15,
    marginBottom: 15,

    borderRadius: 12,

    padding: 12,

    elevation: 3,
  },


  image: {
    width: 100,
    height: 100,
  },


  content: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },


  title: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },


  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2874F0',
  },


  removeButton: {
    backgroundColor: '#E53935',

    flexDirection: 'row',

    alignItems: 'center',

    alignSelf: 'flex-start',

    paddingHorizontal: 12,
    paddingVertical: 8,

    borderRadius: 8,
  },


  removeText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },


  bottomContainer: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: '#fff',

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 18,

    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },


  totalLabel: {
    fontSize: 14,
    color: '#777',
  },


  totalPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
  },


  checkoutButton: {
    backgroundColor: '#2874F0',

    paddingHorizontal: 35,
    paddingVertical: 15,

    borderRadius: 10,
  },


  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },


  emptyContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#F1F3F6',
  },


  emptyTitle: {
    fontSize: 28,
    fontWeight: 'bold',

    color: '#333',

    marginTop: 20,
  },


  emptySubtitle: {
    fontSize: 16,
    color: '#777',

    marginTop: 10,
  },

});


export default CartScreen;