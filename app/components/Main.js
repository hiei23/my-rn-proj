import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {changeText} from "../actions/index2";
import {fetchData} from "../actions/index";

class Main extends Component {

  constructor(props)
  {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.getData = this.getData.bind(this);
  }
  getData() {
    const URL = "https://myshoppify.herokuapp.com/products/products.json";
    console.log("THIS IS DATA <<<<<<<<<<")
    this.props.fetchProducts(URL)
    console.log()
  }
  changeText()
  {
    this.props.changeText("Changed Text");
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={{fontSize:50}}>
          {this.props.productsData.data}
          {this.getData}
        </Text>
        <TouchableOpacity onPress={this.changeText}>
          <Text>
            Change text
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
});

mapStateToProps = (state) => {
  return {
    text: state.text,
    productsData: state.productsData
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeText: changeText,
    fetchProducts: fetchData
   }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
