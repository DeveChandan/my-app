// app/MenuScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface MenuScreenProps {
  onLogout: () => void; // Prop to handle logout
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onLogout }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Clear any user authentication state here if needed
    console.log('User logged out');
    onLogout(); // Call the logout function passed as a prop
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
      {/* Add more options here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#007bff',
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MenuScreen;