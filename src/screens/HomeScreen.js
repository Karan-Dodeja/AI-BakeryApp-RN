import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text styles={styles.title}>Welcome to Bakery App</Text>
      <Button
        title="View Products"
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
