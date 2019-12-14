import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import NumberFormat from 'react-number-format';


export const { width, height } = Dimensions.get('window')

const ip = 'http://192.168.0.132';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataSourceSlide: [],
      dataSourcetype: [],
      dataSourcebrand: [],
      text: '',
    };
  }
  getDataSlide() {
    var url = ip + '/mysql/DataService.php?type=slide';
    axios.get(url)
      .then((getData) => {
        console.log(getData.data);
        this.setState({
          dataSourceSlide: getData.data,
        })
      })
  }
  getDatatype() {
    var url = ip + '/MySQL/DataService.php?type=type';
    axios.get(url)
      .then((getData) => {
        this.setState({
          dataSourcetype: getData.data,
        })
      })
  }
  getDatabrand() {
    var url = ip + 'MySQL/DataService.php?type=brand';
    axios.get(url)
      .then((getData) => {
        this.setState({
          dataSourcebrand: getData.data,
        })
      })
  }
  componentDidMount() {
    this.getDataSlide()
    this.getDatatype()
    this.getDatabrand()
  }


  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>

        {/* AppBar */}

        <View style={styles.Appbar}>
          <Image style={styles.LOGO} source={require('./images/logo.png')}></Image>
          <TextInput style={styles.TextInput}
            placeholder="ค้นหาสินค้า/ร้านค้า"
            onChangeText={(text) => this.state({ text })}></TextInput>
          <Icons name="shopping-cart" size={25} color="black" />
        </View>

        <ScrollView>

          {/* banner */}

          <View>
            <SwiperFlatList
            // autoplay
            // autoplayDelay={3}
            // autoplayLoop
            // showPagination
            >
              {this.state.dataSourceSlide.map((item, indexs) => {
                // console.log('Slide'+[indexs, item.image].join(' ')),
                dataMySQL = [ip + '/mysql/uploads/slide', item.image].join('/');
                return <View style={styles.child} key={indexs}>
                  <Image
                    source={{
                      uri: dataMySQL,
                    }}
                    style={styles.childSlide}
                  />
                </View>;
              })}
            </SwiperFlatList>
          </View>

          {/* category */}

          {/* <View style={{ width, }}><Text>Category</Text></View> */}
          <View style={styles.Box}>
            <ScrollView horizontal >
              <View style={styles.category_A}>
                {this.state.dataSourcetype.map((item, indexs) => {
                  {/* console.log('Slide'+[indexs, item.image].join(' ')), */ }
                  dataMySQL = [ip + '/mysql/uploads/head_product/menu', item.image_menu].join('/');
                  console.log(dataMySQL);
                  return <View style={styles.Category} key={indexs}>
                    <Image
                      source={{
                        uri: dataMySQL,
                      }}
                      style={styles.Category_box} >
                    </Image>
                    <Text style={styles.Text_Cate}>{item.name}</Text>
                  </View>
                })}
              </View>
            </ScrollView>
          </View>

          {/* Brand */}

          {/* <View><Text>Brand</Text></View> */}
          <View style={styles.Brand_RCM}>
            <View><Text style={{ fontWeight: 'bold',}}>แบรนด์แนะนำ</Text></View>
            <ScrollView horizontal>
              <View >
                <Image style={styles.Brand_image_RCM} source={{ uri: ip + '/MySQL/uploads/recommend/2019-11-19_12-05-04_banner.jpg' }}></Image>
              </View>
              <View >
                <Image style={styles.Brand_image_RCM} source={{ uri: ip + '/MySQL/uploads/recommend/2019-11-19_12-05-04_banner.jpg' }}></Image>
              </View>
              <View >
                <Image style={styles.Brand_image_RCM} source={{ uri: ip + '/MySQL/uploads/recommend/2019-11-19_12-05-04_banner.jpg' }}></Image>
              </View>
              <View >
                <Image style={styles.Brand_image_RCM} source={{ uri: ip + '/MySQL/uploads/recommend/2019-11-19_12-05-04_banner.jpg' }}></Image>
              </View>
              <View >
                <Image style={styles.Brand_image_RCM} source={{ uri: ip + '/MySQL/uploads/recommend/2019-11-19_12-05-04_banner.jpg' }}></Image>
              </View>
            </ScrollView>
          </View>

          {/* Popular_Brand*/}

          {/* <View><Text>Popular</Text></View> */}

          <View style={styles.Popular}>
            <View><Text style={{ fontWeight: 'bold',}}>สินค้ายอดนิยม</Text></View>
            <View style={styles.Popular_Box_A}>
              <ScrollView horizontal>
                <View style={styles.Popular_Box_B}>
                  <View style={styles.Popular_Box_C}>
                    <Image style={styles.Popular_image_Box} source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}></Image>
                    <Image style={styles.Popular_image_Box} source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}></Image>
                  </View>
                  <Text style={styles.Text_Popular}>สินค้าสุดฮิต</Text>
                </View>
                <View style={styles.Popular_Box_B}>
                  <View style={styles.Popular_Box_C}>
                    <Image style={styles.Popular_image_Box} source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}></Image>
                    <Image style={styles.Popular_image_Box} source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}></Image>
                  </View>
                  <Text style={styles.Text_Popular}>สินค้าราคาโดน</Text>
                </View>
                <View style={styles.Popular_Box_B}>
                  <View style={styles.Popular_Box_C}>
                    <Image style={styles.Popular_image_Box} source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}></Image>
                    <Image style={styles.Popular_image_Box} source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}></Image>
                  </View>
                  <Text style={styles.Text_Popular}>สินค้าราคาโดน</Text>
                </View>
                <View style={styles.Popular_Box_B}>
                  <View style={styles.Popular_Box_C}>
                    <Image style={styles.Popular_image_Box} source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}></Image>
                    <Image style={styles.Popular_image_Box} source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}></Image>
                  </View>
                  <Text style={styles.Text_Popular}>สินค้าราคาโดน</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Promotion_popular */}
          <View style={styles.Promotion_popular}>
            <View ><Text style={{ fontWeight: 'bold',}}>โปรโมชั่นร้านค้ายอดนิยม</Text></View>
            <ScrollView horizontal>
              <View >
                <Image style={styles.Promotion_popular_Box} source={{ uri: ip + '/MySQL/uploads/publish/Popular_promotions/2019-10-29-1572320073.jpg' }}></Image>
              </View>
              <View >
                <Image style={styles.Promotion_popular_Box} source={{ uri: ip + '/MySQL/uploads/publish/Popular_promotions/2019-10-29-1572320073.jpg' }}></Image>
              </View>
              <View >
                <Image style={styles.Promotion_popular_Box} source={{ uri: ip + '/MySQL/uploads/publish/Popular_promotions/2019-10-29-1572320073.jpg' }}></Image>
              </View>
              <View >
                <Image style={styles.Promotion_popular_Box} source={{ uri: ip + '/MySQL/uploads/publish/Popular_promotions/2019-10-29-1572320073.jpg' }}></Image>
              </View>
              <View >
                <Image style={styles.Promotion_popular_Box} source={{ uri: ip + '/MySQL/uploads/publish/Popular_promotions/2019-10-29-1572320073.jpg' }}></Image>
              </View>
            </ScrollView>           
          </View>

          <SaleProduct/>
          <NewStore/>
          <NewProduct/>
          <TodayProduct/>


        </ScrollView>

        {/* ToolBar */}

        <View style={styles.Toolbar}>
          <Icons name="home" size={25} />
          <Icons name="tags" size={25} />
          <Icons name="layer-group" size={25} />
          <Icons name="bell" size={25} />
          <Icons name="user-alt" size={25} />
        </View>
      </SafeAreaView>
    );
  }
}
export class SaleProduct extends Component {
  constructor() {
      super();
      this.state = {
          dataSale: [],
      };
  }

  getSaleProduct() {
      var url = ip + '/mysql/DataService.php?type=sale';
      axios.get(url)
      .then((getData) => {
        // console.log(getData.data);
        this.setState({
          dataSale: getData.data,
        }) 
      })
  }

  componentDidMount() {
      this.getSaleProduct();
  }
  
  render() {
      return(
          <View style = {styles.SaleProduct}>
            <Text style = {styles.SaleProductText}>
              สินค้าลดราคา
            </Text>
            <ScrollView style = {styles.scrollSale} horizontal>
            {this.state.dataSale.map(( item, indexs ) => {
                console.log('Sale' + [ indexs, item.image ].join(' ')),
                dataMySQL = [ ip + '/mysql/uploads' , item.image ].join('/');
                return <View style = {styles.viewSale}>
                  <Image 
                    source = {{
                      uri: dataMySQL,
                    }}
                    style = {styles.ImageSale}
                  />
                  <Text>{item.name}</Text>
                  <NumberFormat value={item.sale_price} displayType={'text'} thousandSeparator={true} prefix={'฿'}renderText={value=> <Text>{value}</Text>} />
                  
                </View>;
              })}
            </ScrollView>
        </View>
      );
  }
}
export class NewStore extends Component{
  constructor() {
      super();
      this.state = {
          dataStore: [],
      };
  }

  getNewstore() {
      var url = ip + '/mysql/DataService.php?type=store';
      axios.get(url)
      .then((getData) => {
        // console.log(getData.data);
        this.setState({
          dataStore: getData.data,
        }) 
      })
  }

  componentDidMount() {
      this.getNewstore();
  }
  
  render() {
      return(
          <View style = {styles.Newstore}>
            <Text style = {styles.New_storeText}>
              ร้านค้ามาใหม่
            </Text>
            <ScrollView style = {styles.scrollStore} horizontal>
            {this.state.dataStore.map(( item, indexs ) => {
                console.log('Store' + [ indexs, item.image ].join(' ')),
                dataMySQL = [ ip + '/mysql/uploads' , item.image ].join('/');
                return <View style = {styles.viewStore}>
                  <Image 
                    source = {{
                      uri: dataMySQL,
                    }}
                    style = {styles.ImageStore}
                  />
                  <Text>{item.name}</Text>
                </View>;
              })}
            </ScrollView>
        </View>
      );
  }
}

export class NewProduct extends Component{
  constructor() {
      super();
      this.state = {
          datanawProduct: [],
      };
  }

  getNewproduct() {
      var url = ip + '/mysql/DataService.php?type=product';
      axios.get(url)
      .then((getData) => {
        // console.log(getData.data);
        this.setState({
          datanawProduct: getData.data,
        }) 
      })
  }

  componentDidMount() {
      this.getNewproduct();
  }
  
  render() {
      return(
          <View style = {styles.New_Product}>
            <Text style = {styles.New_productText}>
              สินค้ามาใหม่
            </Text>
            <ScrollView style = {styles.scrollproduct} horizontal>
            {this.state.datanawProduct.map(( item, indexs ) => {
                console.log('Store' + [ indexs, item.image ].join(' ')),
                dataMySQL = [ ip + '/mysql/uploads' , item.image ].join('/');
                return <View style = {styles.viewproduct}>
                  <Image 
                    source = {{
                      uri: dataMySQL,
                    }}
                    style = {styles.Imageproduct}
                  />
                  <Text>{item.name}</Text>
                </View>;
              })}
            </ScrollView>
        </View>
      );
  }
}
////สินค้าประจำวัน/////

export class TodayProduct extends Component {
  constructor() {
      super();
      this.state = {
          dataSourceTodayProduct: [],
      };
  }

  getDataTodayProduct() {
      var url = ip + '/mysql/DataService.php?type=todayproduct';
      axios.get(url)
      .then((getData) => {
        console.log(getData.data);
        this.setState({
          dataSourceTodayProduct: getData.data,
        }) 
      })
  }

  componentDidMount() {
      this.getDataTodayProduct();
  }
  
  render() {
      return(
          <View style = { styles.TodayProduct }>
              <Text style = { styles.TodayProductText }>
                  สินค้าประจำวัน
              </Text>
              {this.state.dataSourceTodayProduct.map(( item, indexs ) => {
                console.log('Brand' + [ indexs, item.image ].join(' ')),
                dataMySQL = [ ip + '/mysql/uploads' , item.image ].join('/');
                return <View style = { styles.TodayProductBox }>
                      <Image 
                      source = {{
                          uri: dataMySQL,
                      }}
                      style = { styles.TodayProductImage }
                      />
                      <Text style = { styles.TodayProductImageName }>{ item.name }</Text>
                      <NumberFormat value={item.full_price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value => <Text style = { styles.TodayProductImagePrice }>{value}</Text>} />
                      <View style = { styles.TodayProductIconBox }>
                          <Icons style = { styles.TodayProductIcon } name = 'share' size={ 17 }/>
                          <Icons style = { styles.TodayProductIcon } name = 'heart' size={ 17 }/>
                      </View>
                  </View>;
              })}
          </View>
      )
  }
}
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  LOGO: {
    height: 30,
    width: 80,
    // marginTop: 10,
    resizeMode: 'stretch'
  },
  TextInput: {
    width: 250,
    height: 35,
    backgroundColor: 'azure',
    fontSize: 14,
    textAlign: 'center',
    // marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  Toolbar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5
    //backgroundColor: 'blue'
  },
  Appbar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    height: 50,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,

  },
  Image: {
    height: 40,
    width: 100,
    justifyContent: 'flex-start'
    // resizeMode: 'stretch'
  },
  child: {
    marginTop: 5,
    height: 147,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childSlide: {
    width,
    height: 147,
  },
  slide: {
    height: 150,
    backgroundColor: 'brown',
  },
  Box: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,
  },
  Category: {
    width: 80,
    height: 80,
    marginTop: 20,
  },
  category_A:{
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 200,
  },
  Category_box: {
    height: 50,
    width: 50,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text_Cate: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 15,
  },
  Brand_RCM: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,
    height: 150,
    marginTop: 10,
  },
  Brand_image_RCM: {
    height: 100,
    width: 173,
    marginLeft: 20,
    marginTop: 10,
  },
  Popular: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,
    height: 170,
    marginTop: 10,
  },
  Popular_Box_A: {
    height: 130,
    width: 400,
    marginLeft: 10,
    flexDirection: 'row',
  },
  Popular_Box_B: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    height: 130,
    width: 200,
    flexDirection: 'column',
    marginLeft: 5,
  },
  Popular_Box_C: {
    height: 100,
    width: 100,
    flexDirection: 'row'
  },
  Popular_image_Box: {
    height: 80,
    width: 80,
    marginLeft: 10,
    marginTop: 5,
  },
  Text_Popular: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
  },
  Promotion_popular: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,
    height: 130,
    marginTop: 10,
  },
  Promotion_popular_Box:{
    height: 100,
    width: 100,
    marginLeft: 10,
    marginTop: 5,
  },
  SaleProduct:{
    width,
    resizeMode: 'contain',
    borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  SaleProductText: {
    fontSize:16,
    fontWeight: 'bold',
    marginLeft:8,
    marginTop:6,
  },
viewSale: {
    width: 106, 
    height: 146,
    marginTop: 10,
    marginLeft: 10,    
},
ImageSale: { 
    width:  99,
    height: 98,
    resizeMode: 'contain',
    borderColor: '#EAEAEA',
    borderRadius: 5,
},

     /////สินค้าลดรา//////
     SaleProduct:{
      width,
      resizeMode: 'contain',
      borderColor: '#EAEAEA',
      borderRadius: 5,
    },
    SaleProductText: {
      fontSize:16,
      fontWeight: 'bold',
      marginLeft:8,
      marginTop:6,
    },
  scrollSale: {
      width: '95%', 
      marginRight: 'auto',
      marginLeft: 'auto',
  },
  viewSale: {
      width: 106, 
      height: 146,
      marginTop: 10,
      marginLeft: 10,    
  },
  ImageSale: { 
      width:  99,
      height: 98,
      resizeMode: 'contain',
      borderColor: '#EAEAEA',
      borderRadius: 5,
},
///////ร้านค้ามาใหม่////
Newstore:{
  width,
  resizeMode: 'contain',
  borderColor: '#EAEAEA',
  borderRadius: 5,
},
New_storeText: {
  fontSize:16,
  fontWeight: 'bold',
  marginLeft:20,
  marginTop:6,
},
scrscrollStore: {
  width: '95%', 
  marginRight: 'auto',
  marginLeft: 'auto',
},
viewStore: {
  width: 193, 
  height: 150,
  marginTop: 10,
  marginLeft: 10,    
},
ImageStore: { 
  width:  180,
  height: 100,
  resizeMode: 'stretch',
  borderColor: '#EAEAEA',
  borderRadius: 30,
},
//////สินค้าประจำวัน/////
TodayProduct: {
  backgroundColor: '#FFFFFF',
  borderColor: '#EAEAEA',
  borderWidth: 1,
  marginTop: 8,
  marginLeft: 8,
  marginRight: 8,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
TodayProductText: {
  width,
  fontSize:16,
  fontWeight: 'bold',
  marginTop:16,
  marginLeft:9,
},
TodayProductBox: {
  width: 183,
  // height: 252,
  borderColor: '#ECECEC',
  borderWidth: 1,
  marginTop: 16,
  marginLeft: 4,
  marginRight: 4,
  marginBottom: 8,
},
TodayProductImage: {
  width: 169,
  height: 167,
  backgroundColor: '#C4C4C4',
  margin: 6,
},
TodayProductImageName: {
  fontSize:16,
  marginTop: 12,
  marginLeft: 8,
},
TodayProductImagePrice: {
  fontSize:14,
  marginTop: 12,
  marginLeft: 8,
  color: '#990F0F', 
},
TodayProductIconBox:{
  flexDirection: 'row-reverse',
},
TodayProductIcon: {
  marginBottom: 5,
  marginRight: 8,
},
})
