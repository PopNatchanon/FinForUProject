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
  Brand_RCMTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Brand_RCMText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  Brand_RCMTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
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
  PopularTextBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PopularText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  PopularTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  Image_icon_top:{
    height: 25,
    width: 20,
    resizeMode: 'stretch',
  },
  Promotion_popularTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Promotion_popularText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  Promotion_popularTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
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

  FlashSale: {
    width,
    borderColor: '#EAEAEA',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  FlashSaleTextBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FlashSaleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  FlashSaleTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  FlashSaleBox: {
    width: 106,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  FlashSaleImage: {
    width: 99,
    height: 98,
    resizeMode: 'contain',
    // borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  FlashSaleImageName:{
    fontSize: 10,
    marginTop: 6,
    marginLeft: 6,
  },
  FlashSaleIconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FlashSaleIcon: {
    paddingTop: 4,
    marginBottom: 4,
    marginRight: 6,
  },
  FlashSaleIconStar: {
    paddingTop: 5,
    marginBottom: 5,
  },
  FlashSaleIconBoxI: {
    flexDirection: 'row',
  },
  FlashSaleIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 6,
  },
  FlashSaleImagePrice: {
    fontSize: 8,
    marginTop: 6,
    marginLeft: 6,
    color: '#0A55A6',
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
  SaleProductTextBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SaleProductText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  SaleProductTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  SaleProductBox: {
    width: 106,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  SaleProductImage: {
    width: 99,
    height: 98,
    resizeMode: 'contain',
    // borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  SaleProductImageName:{
    fontSize: 10,
    marginTop: 6,
    marginLeft: 6,
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
    marginLeft: 6,
  },
  SaleProductImagePrice: {
    fontSize: 8,
    marginTop: 6,
    marginLeft: 6,
    color: '#0A55A6',
  },

  ///--------------------------------------------------------------------------------///

  NewStore: {
    width,
    borderColor: '#EAEAEA',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 5,
  },
  NewStoreBox: {
    width: 193,
    height: 129,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  NewStoreImage: {
    width: '100%',
    height: 100,
    resizeMode: 'stretch',
    borderColor: '#EAEAEA',
  },
  NewStoreTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NewStoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  NewStoreTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },

  ///--------------------------------------------------------------------------------///

  NewProduct: {
    width,
    borderColor: '#EAEAEA',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  NewProductTextBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NewProductText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  NewProductTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  NewProductBox: {
    width: 106,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  NewProductImage: {
    width: 99,
    height: 98,
    resizeMode: 'contain',
    // borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  NewProductImageName:{
    fontSize: 10,
    marginTop: 6,
    marginLeft: 6,
  },
  NewProductIconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NewProductIcon: {
    paddingTop: 4,
    marginBottom: 4,
    marginRight: 6,
  },
  NewProductIconStar: {
    paddingTop: 5,
    marginBottom: 5,
  },
  NewProductIconBoxI: {
    flexDirection: 'row',
  },
  NewProductIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 6,
  },
  NewProductImagePrice: {
    fontSize: 8,
    marginTop: 6,
    marginLeft: 6,
    color: '#0A55A6',
  },

  ///--------------------------------------------------------------------------------///

  ProductForYou: {
    width,
    height: 370,
    borderColor: '#EAEAEA',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  ProductForYouFlexBox: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  ProductForYouTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProductForYouText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  ProductForYouTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  ProductForYouBox: {
    width: 106,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 4,
    marginLeft: 10,
  },
  ProductForYouImage: {
    width: 99,
    height: 98,
    resizeMode: 'contain',
    // borderColor: '#EAEAEA',
    borderRadius: 5,
  },
  ProductForYouImageName:{
    fontSize: 10,
    marginTop: 6,
    marginLeft: 6,
  },
  ProductForYouIconBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProductForYouIcon: {
    paddingTop: 4,
    marginBottom: 4,
    marginRight: 6,
  },
  ProductForYouIconStar: {
    paddingTop: 5,
    marginBottom: 5,
  },
  ProductForYouIconBoxI: {
    flexDirection: 'row',
  },
  ProductForYouIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 6,
  },
  ProductForYouImagePrice: {
    fontSize: 8,
    marginTop: 6,
    marginLeft: 6,
    color: '#0A55A6',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  CategoryProductTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CategoryProductTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
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
    marginLeft: 6,
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
  linearGradienttSub:{
    width:'35%',
  },
  linearGradienttSubText:{
    fontSize: 12,
    marginLeft: 6,
    marginBottom: 2,
    marginTop: 2,
    color: 'white',
  },
  CategoryProductStoreBox:{
    width: 125,
    height: 70,
    borderColor: '#ECECEC',
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  CategoryProductStoreImage:{
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderColor: '#EAEAEA',
    borderRadius: 8,
  },
  RightItem: {
    marginRight: 6,
  },

  ///------------------------------------------------------------------///

  Banner_SALE:{
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop:5,
  },
  Banner_SALE_image:{
    width,
    height:70,
    resizeMode: 'stretch',
  },

  ///------------------------------------------------------------------///

  ConfidentialTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ConfidentialText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  ConfidentialTextEnd:{
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  Confidential: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginTop: 5,  
  },
  Confidential_A:{
    flexDirection:'row',
    height: 150,
  },
  Confidential_Box: {
    height:150,
    marginTop:5,
  },
  Confidential_BoxA:{
    height: 150,
    width: 200,
    marginLeft:5,
  },
  Confidential_image: {
    height: 80,
    width: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8, 
  },
  Text_box_Confidential:{
    height:40,
    fontSize:10,
    color:'white',
    backgroundColor:'#0A55A6',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
 
});