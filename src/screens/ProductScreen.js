import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const ProductScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Delicious Products</Text>
      <Text style={styles.title}>1. Croissant</Text>
      <Text style={styles.title}>2. Chocolate Cake</Text>
      <Text style={styles.product}>3. Muffin</Text>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  product: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProductScreen;
