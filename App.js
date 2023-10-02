console.disableYellowBox = true;

import React from 'react';
import { View } from 'react-native';
import Routes from './src/windows/Routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#38A69D' barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}
