import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/NavbarStyles';

export default class Navbar extends Component {
  render() {
    const { text } = this.props;

    return (
      <View style={styles.navbar}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
};
