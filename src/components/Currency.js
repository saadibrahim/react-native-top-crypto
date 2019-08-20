import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import ICONS from '../constants/icons';
import styles from './styles/CurrencyStyles';
import { currencyFormatter } from '../helpers/numbers';

export default class Currency extends Component {
  render() {
    const { currency, index } = this.props;
    const { symbol, name, quote } = currency;
    const { price, market_cap: marketCap, percent_change_24h: percentChange } = quote.USD;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.position}>#{index + 1}</Text>
        <View style={styles.nameWrapper}>
          <Image style={styles.icon} source={ICONS[symbol.toLowerCase()]} />
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.price}>
          {`Price: ${currencyFormatter.format(price)} `}
          <Text style={percentChange < 0 ? styles.negativeChange : styles.positiveChange}>
            ({percentChange > 0 && '+'}
            {percentChange.toFixed(3)}%)
          </Text>
        </Text>
        <Text>Market Cap: {numeral(marketCap).format('($0.00a)')}</Text>
      </View>
    );
  }
}

Currency.propTypes = {
  currency: PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
    quote: PropTypes.shape({
      USD: PropTypes.shape({
        price: PropTypes.number,
        market_cap: PropTypes.number,
        percent_change_24h: PropTypes.number,
      }),
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};
