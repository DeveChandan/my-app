// app/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>(); // Adjust type as needed

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 24,
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    right: 10,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
