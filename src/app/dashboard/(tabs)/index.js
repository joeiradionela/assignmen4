import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Home= () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/avatar.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Pet Care Shop</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', 
  },
  logo: {
    width: 150, 
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082', 
  },
});
