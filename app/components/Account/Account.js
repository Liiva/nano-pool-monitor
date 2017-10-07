import React from 'react';
import { Alert, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import settings from '../../config/settings'

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
  
    getGeneralAccountInfo = function() {
        fetch(settings.BASE_URL + 'v1/' + this.props.type + '/user/' + this.props.address)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    balance: responseJson.data.balance
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                Alert.alert('Failed to get current balance.');
            });
    }
  
    componentDidMount() {
        this.getGeneralAccountInfo();
    }
  
    render() {
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
        }
  
        return(
            <View>
                <Text style={styles.p}>Balance: {this.state.balance}</Text>
            </View>
        )
    };
  }

export default Account;