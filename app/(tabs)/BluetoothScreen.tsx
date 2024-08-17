// app/BluetoothScreen.tsx
import  { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert, PermissionsAndroid, Platform } from 'react-native';
import BleManager from 'react-native-ble-manager';

const BluetoothScreen: React.FC = () => {
  const [devices, setDevices] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const initializeBleManager = async () => {
      try {
        await BleManager.start({ showAlert: false });
        requestPermissions();
      } catch (error) {
        console.error('Error initializing BleManager:', error);
      }
    };

    initializeBleManager();

    // Listener for discovered peripherals
    const discoverListener = BleManager.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);

    return () => {
      BleManager.stopScan();
      discoverListener.remove(); // Remove the listener on unmount
    };
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);

      if (
        granted['android.permission.BLUETOOTH_SCAN'] !== PermissionsAndroid.RESULTS.GRANTED ||
        granted['android.permission.BLUETOOTH_CONNECT'] !== PermissionsAndroid.RESULTS.GRANTED ||
        granted['android.permission.ACCESS_FINE_LOCATION'] !== PermissionsAndroid.RESULTS.GRANTED
      ) {
        Alert.alert('BLE permissions denied');
      }
    }
  };

  const handleScan = () => {
    console.log('BleManager:', BleManager); // Check if BleManager is not null
    if (!isScanning) {
      BleManager.scan([], 5, true)
        .then(() => {
          setIsScanning(true);
          console.log('Scanning...');
        })
        .catch(error => {
          console.log('Error scanning:', error);
        });
    } else {
      BleManager.stopScan()
        .then(() => {
          setIsScanning(false);
          console.log('Scan stopped');
        })
        .catch(error => {
          console.log('Error stopping scan:', error);
        });
    }
  };

  const handleConnect = (device: any) => {
    BleManager.connect(device.id)
      .then(() => {
        console.log('Connected to', device.name);
        Alert.alert('Connected', `Connected to ${device.name}`);
      })
      .catch(error => {
        console.log('Connection error:', error);
        Alert.alert('Connection Error', 'Could not connect to the device');
      });
  };

  const handleDiscoverPeripheral = (peripheral: any) => {
    setDevices(prevDevices => {
      // Check if the device is already in the list
      if (!prevDevices.find(d => d.id === peripheral.id)) {
        return [...prevDevices, peripheral];
      }
      return prevDevices;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bluetooth Devices</Text>
      <Button title={isScanning ? 'Stop Scan' : 'Scan'} onPress={handleScan} />
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deviceContainer}>
            <Text style={styles.deviceName}>{item.name || 'Unnamed Device'}</Text>
            <Button title="Connect" onPress={() => handleConnect(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '100%',
  },
  deviceName: {
    fontSize: 18,
  },
});

export default BluetoothScreen;