// app/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('cm@gmail.com');
  const [password, setPassword] = useState('123@cm');
  const router = useRouter();

  const handleLogin = () => {
    // Perform your login logic here (e.g., validate credentials)
    if (username && password) {
      // Simulate a successful login
      Alert.alert('Success', 'Login Successfully');
      onLogin(); // Call the onLogin function passed as a prop
      router.push('/HomeScreen'); // Navigate to HomeScreen
    } else {
      Alert.alert('Error', 'Please enter both username and password');
    }
  };

  const handleRegisterNavigation = () => {
    console.log("Navigating to Register Screen");
    Alert.alert('Error', 'Please enter both username and password not Navigating to Register ');
    router.push('/RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
        <Button title="Register" onPress={handleRegisterNavigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
  },
});

export default LoginScreen;