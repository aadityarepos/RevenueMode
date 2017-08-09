import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from '../configureStore';

import App from './App';

class initialComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        store: configureStore()
      }
  }

  render() {
    return (
      <Provider store = { this.state.store }>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('DemoReactNative', () => initialComponent);
