import React from 'react';
import { Alert, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Account from '../components/Account/Account'
import styles from '../config/styles'
import settings from '../config/settings'

class SiaCoin extends React.Component {
  constructor(props) {
    super(props);

    this.type = 'sia';
    this.address = '23942dffc3edfadb824ef5d6636b9e1ecda88e70b21d0b7f2fdadbaf856a4b54f4861038dc82';
  }

  static navigationOptions = {
    title: 'SiaCoin'
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

export default SiaCoin;