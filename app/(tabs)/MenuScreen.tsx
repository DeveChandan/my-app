import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//import { RootStackParamList } from './types'; // Adjust the import path to your types file

interface MenuScreenProps {
  onLogout: () => void; // Prop to handle logout
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onLogout }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    // Clear any user authentication state here if needed
    console.log('User logged out');
    navigation.navigate('Login'); // Navigate to the Login screen
    onLogout(); // Call the logout function passed as a prop
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
