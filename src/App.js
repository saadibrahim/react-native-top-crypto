import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import Currencies from './containers/Currencies';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Currencies />
      </Provider>
    );
  }
}
