import React, { Component } from 'react';
import {Provider} from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import reducers from "./app/reducer/index";
import Main from "./app/components/Main";
const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore)(reducers);

export default class introToRedux extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('introToRedux', () => introToRedux);
