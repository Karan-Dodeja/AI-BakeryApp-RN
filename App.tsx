import React from 'react';
import { SafeAreaView } from 'react-native';
import AuthProvider from './src/context/AuthContext';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </AuthProvider>
  );
};

export default App;
