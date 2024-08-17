// app/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [empNo, setEmpNo] = useState(''); // State for Employee Number
  const router = useRouter();

  const handleRegister = () => {
    // Basic validation
    if (!email || !password || !empNo) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    console.log('Registering:', email, password, empNo);
    
    // Here you would normally handle the registration logic (e.g., API call)
    
    // Simulate successful registration
    Alert.alert('Success', 'Registration successful!');
    router.push('/HomeScreen');  // Navigate to HomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Set keyboard type for email input
        autoCapitalize="none" // Prevent auto-capitalization
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Employee Number"
        value={empNo}
        onChangeText={setEmpNo}
      />
      <Button 
        title="Register"
        onPress={handleRegister} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default RegisterScreen;