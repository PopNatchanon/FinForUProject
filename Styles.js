import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  ///------------------------------------------------------------------------------------------///

  Toolbar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  SafeAreaView: {
    flex: 1,
  },
  LOGO: {
    height: 40,
    width: 80,
    resizeMode: 'stretch',
  },
  TextInput: {
    width: 230,
    height: 40,
    fontSize: 15,
    textAlign: 'center',
  },
  Appbar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    height: 50,
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
  },
  Text_All:{
    fontWeight: 'bold',
    fontSize: 16, 
  },

  ///------------------------------------------------------------------------------------------///

  child: {
    marginTop: 5,
    height: 150,
    width,
  },
  childSlide: {
    width,
    height: 150,
  },
  slide: {
    height: 150,
  },

  ///------------------------------------------------------------------------------------------///

  Box_Cata: {
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
  category_A: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 250,
  },
  Category_box: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    borderRadius: 4,
    height: 60,
    width: 60,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text_Cate: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 15,
  },

  ///------------------------------------------------------------------------------------------///

  Brand_RCM: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,
    height: 160,
    marginTop: 5,
  },
  Brand_RCM_Box: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  Brand_image_RCM: {
    borderColor: '#EAEAEA',
    borderWidth: 1,
    height: 50,
    width: 150,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5, 
  },

  ///------------------------------------------------------------------------------------------///

  Popular: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,
    height: 180,
    marginTop: 5,
  },
  Popular_Box_A: {
    height: 150,
    width,
    marginTop: 5,
    flexDirection: 'row',
  },
  Popular_Box_B: {
    height: 140,
    width: 200,
    flexDirection: 'column',
    marginLeft: 5,
    
  },
  Popular_Box_C: {
    height: 110,
    width,
    flexDirection: 'row',
  },
  Popular_Box_D: {
    borderColor: '#EAEAEA',
    borderWidth: 1,
    height: 110,
    width: 100,
  },
  Popular_image_Box: {
    height: 80,
    width: 80,
    marginLeft: 10, 
  },
  Text_Popular: {
    // borderColor: '#EAEAEA',
    // borderWidth: 1,
    backgroundColor:'#EAEAEA',
    fontWeight: 'bold',
    textAlign:'center'
    
    
  },
  Image_icon_top:{
    height: 25,
    width: 20,
    resizeMode: 'stretch',
  },

  ///------------------------------------------------------------------------------------------///
  
  Promotion_popular: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,  
  },
  Promotion_popular_A:{
    flexDirection:'row',
    height: 150,
  },
  Promotion_popular_Box: {
    height:150,
    marginTop:5,
  },
  Promotion_popular_BoxA:{
    height: 150,
    width: 180,
    marginLeft:5,
  },
  Promotion_popular_image: {
    height: 80,
    width: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  Image_icon_Sale:{
    height: 40,
    width: 180,
    resizeMode: 'stretch',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  ///--------------------------------------------------------------------------------///

  SaleProduct: {
    width,
    resizeMode: 'contain',
    borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  SaleProductText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  viewSale: {
    width: 106,
    height: 146,
    marginTop: 10,
    marginLeft: 10,
  },
  ImageSale: {
    width: 99,
    height: 98,
    resizeMode: 'contain',
    borderColor: '#EAEAEA',
    borderRadius: 5,
  },

  ///--------------------------------------------------------------------------------///

  SaleProduct: {
    width,
    borderColor: '#EAEAEA',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  SaleProductText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  SaleProductTextEnd:{

  },
  viewSale: {
    width: 106,
    // height: 146,
    marginTop: 10,
    marginLeft: 10,
  },
  ImageSale: {
    width: 99,
    height: 98,
    resizeMode: 'contain',
    // borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  SaleProductIconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SaleProductIcon: {
    paddingTop: 4,
    marginBottom: 4,
    marginRight: 6,
  },
  SaleProductIconStar: {
    paddingTop: 5,
    marginBottom: 5,
  },
  SaleProductIconBoxI: {
    flexDirection: 'row',
  },
  SaleProductIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  SaleProductImagePrice: {
    fontSize: 8,
    marginTop: 6,
    marginLeft: 6,
    color: '#0A55A6',
  },

  ///--------------------------------------------------------------------------------///

  Newstore: {
    width,
    resizeMode: 'contain',
    borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  New_storeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 6,
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
    width: 180,
    height: 100,
    resizeMode: 'stretch',
    borderColor: '#EAEAEA',
    borderRadius: 30,
  },

  ///--------------------------------------------------------------------------------///

  New_Product: {
    width,
    resizeMode: 'contain',
    borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  New_productText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  scrollproduct: {
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  viewproduct: {
    width: 106,
    height: 146,
    marginTop: 10,
    marginLeft: 10,
  },
  Imageproduct: {
    width: 99,
    height: 98,
    resizeMode: 'contain',
    borderColor: '#EAEAEA',
    borderRadius: 5,
  },

  ///--------------------------------------------------------------------------------///

  foryouProduct: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,
  },
  foryouProduct_box: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foryouProduct_A: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 200,
  },
  foryouProduct_image: {
    width: 80,
    height: 80,
    backgroundColor: '#C4C4C4',
    margin: 6,
  },

  ///----------------------------------------///
  TodayProduct: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  TodayProductText: {
    width,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 9,
  },
  TodayProductBox: {
    width: 165,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 5,
  },
  TodayProductImage: {
    width: 150,
    height: 167,
    backgroundColor: '#C4C4C4',
    margin: 6,
  },
  TodayProductImageName: {
    fontSize: 12,
    marginTop: 12,
    marginLeft: 8,
  },
  TodayProductImagePrice: {
    fontSize: 10,
    marginTop: 12,
    marginLeft: 8,
    color: '#0A55A6',
  },
  TodayProductIconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TodayProductIcon: {
    marginBottom: 5,
    marginRight: 8,
  },
  TodayProductIconStar: {
    paddingTop: 8,
    marginBottom: 5,
  },
  TodayProductIconBoxI: {
    flexDirection: 'row',
  },
  TodayProductIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  TodayProduct: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  TodayProductText: {
    width,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 9,
  },
  TodayProductBox: {
    width: 113,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 5,
  },
  TodayProductImage: {
    width: 100,
    height: 115,
    backgroundColor: '#C4C4C4',
    margin: 6,
  },
  TodayProductImageName: {
    fontSize: 8,
    marginTop: 12,
    marginLeft: 8,
  },
  TodayProductImagePrice: {
    fontSize: 10,
    marginTop: 12,
    marginLeft: 8,
    color: '#0A55A6',
  },
  TodayProductIconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TodayProductIcon: {
    paddingTop: 4,
    marginBottom: 4,
    marginRight: 6,
  },
  TodayProductIconStar: {
    paddingTop: 5,
    marginBottom: 5,
  },
  TodayProductIconBoxI: {
    flexDirection: 'row',
  },
  TodayProductIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  ///------------------------------------------------------------------///
  CategoryProduct: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 6,
  },
  CategoryProductText: {
    width,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 14,
    marginLeft: 9,
  },
  CategoryProductBox: {
    width: 113,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 6,
    marginLeft: 5,
  },
  CategoryProductImage: {
    width: 100,
    height: 115,
    backgroundColor: '#C4C4C4',
    margin: 5,
  },
  CategoryProductImageName: {
    fontSize: 10,
    marginTop: 6,
    marginLeft: 6,
  },
  CategoryProductImagePrice: {
    fontSize: 8,
    marginTop: 6,
    marginLeft: 6,
    color: '#0A55A6',
  },
  CategoryProductIconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CategoryProductIcon: {
    paddingTop: 4,
    marginBottom: 4,
    marginRight: 6,
  },
  CategoryProductIconStar: {
    paddingTop: 5,
    marginBottom: 5,
  },
  CategoryProductIconBoxI: {
    flexDirection: 'row',
  },
  CategoryProductIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  BrannerCategoryImage: {
    width: width - 40,
    height: 58,
    borderRadius: 8,
    marginTop: 8,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 8,
  },
  CategoryProductTextSub:{
    fontSize: 12,
    marginTop: 10,
    marginLeft: 6,
  },
  RightItem: {
    marginRight: 5,
  },
});