import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Loader from '../components/common/Loader';

import ProductCard from '../components/common/ProductCard';

import { getAllProducts } from '../services/productService';

const HomeScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item: any) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productContainer}
 
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation} />
        )}
      />
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

    marginTop: 10,
    marginBottom: 20,

    paddingHorizontal: 10,
  },

  productContainer: {
    paddingBottom: 0,
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  row: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
