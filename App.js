import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './app/config/styles';

import Home from './app/screens/Home'
import Ethereum from './app/screens/Ethereum';
import SiaCoin from './app/screens/SiaCoin';

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  Ethereum: { screen: Ethereum },
  SiaCoin: { screen: SiaCoin },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}