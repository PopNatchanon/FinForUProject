import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  ///------------------------------------------------------------------------------------------///

  Toolbar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    // justifyContent: 'space-around',
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
    backgroundColor:'#FFFF',
    width: 230,
    height: 40,
    textAlign: 'center',
  },
  Appbar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    height: 50,
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
  },
  Text_All: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  ///------------------------------------------------------------------------------------------///

  child: {
    marginTop: 10,
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
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
  },
  Category: {
    width: 100,
    height: 80,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  category_A: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 200,
  },
  Category_image: {
    height: 40,
    width: 40,
  },
  Category_box: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text_Cate: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  ///------------------------------------------------------------------------------------------///

  Brand_RCM: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    height: 160,
  },
  Brand_RCM_Box: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  Brand_image_RCM: {
    borderColor: '#ECECEC',
    borderWidth: 1,
    height: 50,
    width: 150,
    marginLeft: 10,
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
  Brand_RCMTextEnd: {
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },

  ///------------------------------------------------------------------------------------------///

  Popular: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    height: 180,
  },
  Popular_Box_A: {
    height: 150,
    width,
    flexDirection: 'row',
  },
  Popular_Box_B: {
    height: 140,
    width: 200,
    flexDirection: 'column',
    marginLeft: 10,
  },
  Popular_Box_C: {
    height: 110,
    width,
    flexDirection: 'row',
  },
  Popular_Box_D: {
    borderColor: '#ECECEC',
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
    marginLeft: 10,
    marginTop: 5,
  },
  PopularText_A: {
    backgroundColor: '#ECECEC',
    borderColor: '#ECECEC',
    borderWidth: 0.5,
    height: 20,
    width: 200,
  },
  PopularTextEnd: {
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 5,
  },
  Image_icon_top: {
    height: 25,
    width: 20,
    resizeMode: 'stretch',
  },

  ///------------------------------------------------------------------------------------------///

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
  Promotion_popularTextEnd: {
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  Promotion_popular: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
  },
  Promotion_popular_A: {
    flexDirection: 'row',
    height: 150,
  },
  Promotion_popular_Box: {
    height: 150,
    marginTop: 5,
  },
  Promotion_popular_BoxA: {
    height: 150,
    width: 180,
    marginLeft: 10,
  },
  Promotion_popular_image: {
    height: 80,
    width: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Text_icon_Sale: {
    fontSize: 10,
    backgroundColor: '#0A55A6',
    color: '#FFFFFF',
    height: 40,
    width: 180,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  ///--------------------------------------------------------------------------------///

  FlashSale: {
    width,
    borderColor: '#ECECEC',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  FlashSaleTextBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FlashSaleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 6,
  },
  FlashSaleTextEnd: {
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
    // borderColor: '#ECECEC',
    borderRadius: 5,
  },
  FlashSaleImageName: {
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
    borderColor: '#ECECEC',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
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
  SaleProductTextEnd: {
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
    // borderColor: '#ECECEC',
    borderRadius: 5,
  },
  SaleProductImageName: {
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
    borderColor: '#ECECEC',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 10,
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
    borderColor: '#ECECEC',
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
  NewStoreTextEnd: {
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  NewStoreText_bar: {
    fontSize: 11,
  },

  ///--------------------------------------------------------------------------------///

  NewProduct: {
    width,
    borderColor: '#ECECEC',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
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
  NewProductTextEnd: {
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
    // borderColor: '#ECECEC',
    borderRadius: 5,
  },
  NewProductImageName: {
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
    borderColor: '#ECECEC',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
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
  ProductForYouTextEnd: {
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
    // borderColor: '#ECECEC',
    borderRadius: 5,
  },
  ProductForYouImageName: {
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
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 8,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
  },
  TodayProductText: {
    width,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 9,
  },
  TodayProductBoxProduct: {
    width,
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  TodayProductBox: {
    width: width * (1/3.07),
    height: height * (1/4),
    borderColor: '#ECECEC',
    borderWidth: 0.5,

  },
  TodayProductImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    padding: 4,
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
  ///------------------------------------------------------------------///

  CategoryProduct: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
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
  CategoryProductTextEnd: {
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  CategoryProductImageHead: {
    marginTop: 5,
    width,
    height: 80,
    // height: height * 0.19,
    // resizeMode: 'stretch',
    // marginBottom: -30,
  },
  CategoryProductBox: {
    width: 113,
    borderColor: '#ECECEC',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 6,
    marginLeft: 10,
  },
  CategoryProductImage: {
    width: 100,
    height: 115,
    backgroundColor: 'white',
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
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 8,
  },
  linearGradienttSub: {
    width: '35%',
  },
  linearGradienttSubText: {
    fontSize: 12,
    marginLeft: 6,
    marginBottom: 2,
    marginTop: 2,
    color: 'white',
  },
  CategoryProductStoreBox: {
    width: 160,
    height: 60,
    borderColor: '#ECECEC',
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  CategoryProductStoreImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderColor: '#ECECEC',
    borderRadius: 8,
  },
  CategoryProductSubBrandBox: {
    width: 80,
    height: 30,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  CategoryProductSubBrandImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderColor: '#ECECEC',
    borderRadius: 8,
  },
  PromotionCategoryProductStoreBox: {
    width: 165,
    height: 110,
    borderColor: '#ECECEC',
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  PromotionCategoryProductImage: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  PromotionCategoryProductImageIcon: {
    fontSize: 10,
    color: 'white',
    backgroundColor: '#0A55A6',
    width: '100%',
    height: '30%',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  ///------------------------------------------------------------------///

  Banner_Bar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    marginTop: 10,
  },
  Banner_Bar_image: {
    width,
    height: 70,
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
  ConfidentialTextEnd: {
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  Confidential: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    height: 150,
  },
  Confidential_A: {
    flexDirection: 'row',
    height: 130,
  },
  Confidential_Box: {
    width: 230,
    height: 150,
    marginTop: 10,
    marginRight: 10,
  },
  Confidential_BoxA: {
    height: 150,
    width,

  },
  Confidential_image: {
    height: 60,
    width: 230,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  Text_box_Confidential: {
    width: 230,
    height: 30,
    fontSize: 10,
    color: 'white',
    backgroundColor: '#0A55A6',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  ///------------------------------------------------------------------///

  Button_Bar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,

  },
  Button_Bar_Box: {
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    marginLeft: 10,
  },
  Button_Bar_icon: {
    borderRadius: 4,
    height: '100%',
    width: 100,
    resizeMode: 'stretch',
  },

  ///------------------------------------------------------------------///

  Text_Bar_Image: {
    height: 15,
    width: 120,
    marginTop: 10,
    marginLeft: 10,
  },

  ///------------------------------------------------------------------///

  Second_product: {
    height: 'auto',
    width,
    borderColor: '#ECECEC',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 10,
  },
  Second_StoreFin: {
    height: 280,
    width,
  },
  Second_StoreFin_BoxHead: {
    flexDirection: 'row',
    width: 'auto',
    height: 30,
    justifyContent: 'space-between',
  },
  Second_StoreFin_textEnd: {
    fontSize: 10,
    color: '#0A55A6',
    textAlign: 'right',
    marginTop: 5,
    marginRight: 10,
  },
  Second_StoreFin_Box: {
    // backgroundColor: 'blue',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Second_StoreFin_Image: {
    height: 230,
    width: 430,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Second_StoreFin_ImageA: {
    height: 230,
    width: 280,
  },
  Second_StoreFin_ImageB: {
    height: 210,
    justifyContent: 'space-between',
  },
  Second_StoreFin_ImageB_T: {
    height: 90,
    width: 130,
  },
  Second_StoreFin_ImageB_TFastImage: {
    height: 70,
    width: 130,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  Second_StoreFin_ImageB_Ttext: {
    textAlign: 'center',
    height: 20,
    width: 130,
    backgroundColor: '#0A55A6',
    color: '#ffff',
    fontSize: 8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  Second_StoreFin_Boxbeand_head: {
    flexDirection: 'row',
    width: 'auto',
    height: 30,
    justifyContent: 'space-between',
  },
  Second_StoreFin_Boxbeand: {
    flexDirection: 'row',
    // backgroundColor: '#95F29F',
    width,
    height: 60,
  },
  Second_Storefooter: {
    height: 100,
    width,
  },
  Second_Storefooter_image: {
    height: 40,
    width: 160,
    marginLeft: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  Second_Storefooter_Text: {
    color: '#FFF',
    fontSize: 10,
    height: 30,
    width: 160,
    marginLeft: 10,
    backgroundColor: '#0A55A6',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});