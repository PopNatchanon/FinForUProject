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
  Button_Bar,
  Brand_RCM,
  Banner_SALE,
  FlashSale,
  Popular_product,
  PromotionPopular,
  SaleProduct,
  NewStore,
  NewProduct,
  Confidential_PRO,
  Product_for_you,
  CategoryProduct,
  TodayProduct,
  Toolbar,
} from './MainModule';

export default class MainPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar />
        <ScrollView>
          <Slide />
          <Category />
          <Button_Bar/>
          <Brand_RCM />
          <Popular_product />
          <Banner_SALE />
          <FlashSale />
          <PromotionPopular />
          <SaleProduct />
          <Banner_SALE />
          <NewStore />
          <NewProduct />
          <Confidential_PRO />
          <Product_for_you />
          <Banner_SALE />
          <CategoryProduct />
          <Banner_SALE />
          <TodayProduct />
        </ScrollView>
        <Toolbar />
      </SafeAreaView>
    );
  }
}

export class StorePage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar />
        <ScrollView>
          {/* <Slide />
          <Category />
          <Brand_RCM />
          <Popular_product />
          <Banner_SALE />
          <FlashSale />
          <PromotionPopular />
          <SaleProduct />
          <Banner_SALE />
          <NewStore />
          <NewProduct />
          <Confidential_PRO />
          <Product_for_you />
          <Banner_SALE />
          <CategoryProduct />
          <Banner_SALE /> */}
          <TodayProduct />
        </ScrollView>
        <Toolbar />
      </SafeAreaView>
    );
  }
}