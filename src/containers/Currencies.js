import React, { Component } from 'react';
import { FlatList, View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currenciesActions } from '../actions';
import { Loading, Navbar, Currency } from '../components';
import { currenciesSelectors } from '../selectors';
import styles from './styles/CurrenciesStyles';

class Currencies extends Component {
  componentDidMount() {
    this.props.getCurrencies();
  }

  renderLoader() {
    return <Loading />;
  }

  renderContent() {
    const { data: currencies, error } = this.props.currencies;

    // TODO: Handle errors better
    if (error) {
      return <Text>{error}</Text>;
    }

    return (
      <ScrollView>
        <FlatList
          data={currencies}
          keyExtractor={item => item.slug}
          renderItem={this.renderCurrency}
          style={{ paddingBottom: 15 }}
        />
      </ScrollView>
    );
  }

  renderCurrency({ item, index }) {
    return <Currency currency={item} index={index} />;
  }

  render() {
    const { fetching } = this.props.currencies;

    return (
      <SafeAreaView style={styles.contentWrapper}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <Navbar text="Top 10 Cryptocurrencies" />
          <View style={styles.contentWrapper}>
            {fetching ? this.renderLoader() : this.renderContent()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

Currencies.propTypes = {
  currencies: PropTypes.shape({
    fetching: PropTypes.bool,
    error: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        symbol: PropTypes.string,
        name: PropTypes.string,
        quote: PropTypes.shape({
          USD: PropTypes.shape({
            price: PropTypes.number,
            market_cap: PropTypes.number,
            percent_change_24h: PropTypes.number,
          }),
        }),
      })
    ),
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    currencies: currenciesSelectors.getCurrenciesData(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrencies: () => dispatch(currenciesActions.getCurrencies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);
