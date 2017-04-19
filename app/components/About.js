import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class About extends Component{
  navigateToHome(){
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.button_text}>
          About
        </Text>
        <TouchableOpacity onPress={this.navigateToHome.bind(this)}>
          <Text style={styles.button_text}>
            Back To Home
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-around",
    alignItems: "center",
    backgroundColor: "orange"
  },
  button_text: {
    fontSize:26,
    textAlign: 'center',
    color: "white"
  }
});
