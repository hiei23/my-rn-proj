import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Home extends Component {

  navigateToAbout(){
    this.props.navigator.push({title: 'About', id: "About"})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.button_text}>
          Welcome From Home
        </Text>
        <TouchableOpacity onPress={this.navigateToAbout.bind(this)}>
          <Text style={styles.button_text}>
            About
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
    backgroundColor: "green"
  },
  button_text: {
    fontSize:26,
    textAlign: 'center',
    color: "white"
  }
});
