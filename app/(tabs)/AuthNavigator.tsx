// app/AuthNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '.'; // Correctly import LoginScreen
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigator: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true, // Show header by default
        headerTitleAlign: 'center', // Center the title
      }}
    >
      <Stack.Screen name="Login">
        {props => <LoginScreen {...props} onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ title: 'Register' }} // Set title for the Register screen
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;