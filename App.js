import React, { Component } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import styles from './Styles'

import {
  AppBar,
  Slide,
  Category,
  Brand_RCM,
  FlashSale,
  Popular_product,
  PromotionPopular,
  SaleProduct,
  NewStore,
  NewProduct,
  Product_for_you,
  CategoryProduct,
  TodayProduct,
  Toolbar,
} from './functionmodule';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar />
        <ScrollView>
          <Slide />
          <Category />
          <Brand_RCM />
          <FlashSale/>
          <Popular_product />
          <PromotionPopular />
          <SaleProduct />
          <NewStore />
          <NewProduct />
          <Product_for_you />
          <CategoryProduct />
          <TodayProduct />
        </ScrollView>
        <Toolbar />
      </SafeAreaView>
    );
  }
}

export default App;
