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
  BannerBar_ONE,
  FlashSale,
  Popular_product,
  PromotionPopular,
  SaleProduct,
  BannerBar_TWO,
  NewStore,
  NewProduct,
  Confidential_PRO,
  Product_for_you,
  CategoryProduct,
  BannerBar_THREE,
  TodayProduct,
  Toolbar,
} from './MainModule';

///-----------------------------------------------------------------------------------------------///

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
          <BannerBar_ONE />
          <FlashSale />
          <PromotionPopular />
          <SaleProduct />
          <BannerBar_TWO />
          <NewStore />
          <NewProduct />
          <Confidential_PRO />
          <Product_for_you />
          <CategoryProduct />
          <BannerBar_THREE />
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

///-----------------------------------------------------------------------------------------------///

export  class Product_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Product_Detail </Text>
      </View>
    );
  }
}
