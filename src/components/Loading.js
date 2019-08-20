import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/LoadingStyles';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating size="large" color="#2CBCF2" />
      </View>
    );
  }
}
