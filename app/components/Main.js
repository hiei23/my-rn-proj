import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { View, Text, StyleSheet, TouchableOpacity, Image, ListView } from 'react-native';

import {fetchData} from "../actions/index";

class Main extends Component {

  constructor(props)
  {
    super(props);
    this.getData = this.getData.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
  }
  getData() {
    const URL = "https://myshoppify.herokuapp.com/products/products.json";  
    this.props.fetchProducts(URL)
  }
  changeText()
  {
    this.props.changeText("Changed Text");
  }
  renderProduct(item){
    return (
      <View >
        <Image source={{uri: item.image.src}} style={{width: 200, height: 200}} />
        <Text>
          ${item.variants[0].price}
        </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight:"bold", backgroundColor: 'green', textAlign: "center"}}>
            Buy
          </Text>
        </TouchableOpacity>
      </View>)
  }
  render() {

    var products = (this.props.productsData.data.products === undefined)? []: this.props.productsData.data.products;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.getData}>
          <Text style={{fontSize: 20, fontWeight:"bold"}}>
            Click Me to Show Products
          </Text>
        </TouchableOpacity>
         <ListView
          dataSource={ds.cloneWithRows(products)}
          renderRow={(item) => this.renderProduct(item)}
          />  
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
    fetchProducts: fetchData
   }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
