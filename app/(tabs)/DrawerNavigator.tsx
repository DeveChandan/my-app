// app/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen'; // Import if used in navigation
import { Text } from 'react-native';
import AboutScreen from './AboutScreen'; // Import the AboutScreen component
import ProfileScreen from './ProfileScreen'; // Import the ProfileScreen component
import LogoutScreen from './'; // Import the LogoutScreen component
import BluetoothScreen from './BluetoothScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
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
        name="Logout" 
        component={LogoutScreen} 
        options={{
          drawerLabel: 'Logout',
          drawerIcon: () => <Text>🚪</Text>, // Logout icon
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
          drawerIcon: () => <Text>👤</Text>, // Profile icon
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
