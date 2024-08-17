import React from 'react';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen'; // Import if used in navigation
import AboutScreen from './AboutScreen'; // Import the AboutScreen component
import ProfileScreen from './ProfileScreen'; // Import the ProfileScreen component
import BluetoothScreen from './BluetoothScreen';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => <Text>🏠</Text>, // Home icon
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={AboutScreen} 
        options={{
          drawerLabel: 'About',
          drawerIcon: () => <Text>ℹ️</Text>, // About icon
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          drawerLabel: 'Profile',
          drawerIcon: () => <Text>👤</Text>, // Profile icon
        }}
      />
      <Drawer.Screen 
        name="Bluetooth" 
        component={BluetoothScreen} 
        options={{
          drawerLabel: 'Bluetooth',
          drawerIcon: () => <Text>🔵</Text>, // Bluetooth icon
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
