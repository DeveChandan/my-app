import  { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

export default function BluetoothSearchScreen() {
  const [bluetoothAddress, setBluetoothAddress] = useState('235:989:00:5887:45');

  const handleSearch = () => {
    // Handle Bluetooth search logic here
  };

  const handleConnect = () => {
    // Handle Bluetooth connect logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bluetooth Device Search</Text>

      <View style={styles.buttonContainer}>
        <Button title="Search" onPress={handleSearch} color="#5B84F1" />
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{bluetoothAddress}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Connect" onPress={handleConnect} color="#5B84F1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34eb98', // Background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '60%',
    marginVertical: 10,
    backgroundColor: '#5B84F1',
    borderRadius: 10,
    overflow: 'hidden', // To make button corners rounded
  },
  addressContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
