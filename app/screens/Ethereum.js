import React from 'react';
import { Alert, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Account from '../components/Account/Account'
import styles from '../config/styles'
import settings from '../config/settings'

class Ethereum extends React.Component {
  constructor(props) {
    super(props);

    this.type = 'eth';
    this.address = '0x0BE579b911882eA3163E0Af22721a7034B720261';
  }

  static navigationOptions = {
    title: 'Ethereum'
  };
  
  render() {    
    return (
      <View style={styles.container}>
        <Text style={styles.p}>Your wallet address is:</Text>
        <Text style={{paddingBottom: 20}}>{this.address}</Text>
        <Account type={this.type} address={this.address} />
      </View>
    )
  }
}

export default Ethereum;