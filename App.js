import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import PasswordRecovery from './src/pages/PasswordRecovery';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
            <Login/>   {/* Render the desired component here */}
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}


