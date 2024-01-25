import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView  style={{ flex: 1 }}>
  <WebView
      source={{ uri: 'https://teknokanyon.com/' }} // PWA'nızın adresi
     
    />
    <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
