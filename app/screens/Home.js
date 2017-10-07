import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../config/styles'

class Home extends React.Component {
    static navigationOptions = {
      title: 'NanoPool Mining Monitor'
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text style={styles.p}>Select your coin</Text>
          <Button title="Ethereum"
            onPress={() =>
              navigate('Ethereum', { address: '0x0BE579b911882eA3163E0Af22721a7034B720261' })
            }
          />
          <Button style={styles.buttonSpacing} title="Ethereum Classic" disabled
            onPress={() =>
              navigate('EthereumClassic')
            }
          />
          <Button style={styles.buttonSpacing} title="SiaCoin"
            onPress={() =>
              navigate('SiaCoin')
            }
          />
          <Button style={styles.buttonSpacing} title="ZCash" disabled
            onPress={() =>
              navigate('ZCash')
            }
          />
          <Button style={styles.buttonSpacing} title="Monero" disabled
            onPress={() =>
              navigate('Monero')
            }
          />
          <Button style={styles.buttonSpacing} title="Pascal" disabled
            onPress={() =>
              navigate('Pascal')
            }
          />
        </View>
      );
    }
  }

  export default Home