// app/_layout.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Use state for authentication

  const handleLogin = () => {
    console.log('User logged in');
    setIsAuthenticated(true); // Update authentication state
  };

  const handleLogout = () => {
    console.log('User logged out');
    setIsAuthenticated(false); // Update authentication state
  };

  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated ? (
        <DrawerNavigator onLogout={handleLogout} />
      ) : (
        <AuthNavigator onLogin={handleLogin} />
      )}
    </View>
  );
};

export default Layout;