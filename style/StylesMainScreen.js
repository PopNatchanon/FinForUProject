import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  ///***------------------------------------------------------------------------------------------------------***///
  animatedView: {
    width,
    elevation: 2,
    position: "absolute",
    bottom: 0,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  animatedViewSub: {
    width: 150,
    borderRadius: 20,
    backgroundColor: "#E4E4E4",
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  exitTitleText: {
    textAlign: "center",
    color: "#111111",
    marginRight: 10,
  },
  exitText: {
    color: "#e5933a",
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  //-----------------------------
  BoxProductWarp: {
    width,
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  BoxProductWarpBox: {
    height: 360,
  },
  ///------------///
  BoxProduct1Box: {
    backgroundColor: '#FFFFFF', width: 115,
    borderColor: '#ECECEC', borderWidth: 1,
    marginTop: 6, marginBottom: 4,
    marginLeft: 4,
  },
  BoxProduct1Box2: {
    backgroundColor: '#FFFFFF', width: 115,
    borderColor: '#ECECEC', borderWidth: 1,
    marginTop: 4,
    marginLeft: 4,
  },
  BoxProduct1ImageofLines: {
    width: 113,
    height: 113,
  },
  BoxProduct1ImageofLines2: {
    width: width * 0.28,
    height: width * 0.28,
  },
  BoxProduct1ImageofLines3: {
    width: width * 0.18,
    height: width * 0.18,
  },
  BoxProduct1Image: {
    width: '100%',
    height: '100%',
  },
  BoxProduct1NameofLines: {
    width: '100%',
  },
  BoxProduct1IconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BoxProduct1Icon: {
    paddingTop: 4,
    marginBottom: 4,
    marginRight: 6,
  },
  BoxProduct1IconStar: {
    paddingTop: 5,
    marginBottom: 5,
  },
  BoxProduct1IconBoxStar: {
    flexDirection: 'row',
    marginLeft: 6,
  },
  BoxProduct1PriceofLines: {
    width: '100%',
  },
  BoxProduct1ImagePrice: {
    color: '#0A55A6',
  },
  BoxProduct1ImagePriceThrough: {
    color: '#fb3449',
    textDecorationLine: 'line-through',
  },
  ///------------///
  BoxProduct2: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
  },
  BoxProduct2BoxProduct: {
    width,
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  BoxProduct2Box: {
    width: width * (1 / 3.08),
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 0.5,
  },
  BoxProduct2ImageofLines: {
    flex: 1,
    width: '100%',
    height: height * (1 / 5.5),
  },
  BoxProduct2Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  BoxProduct2ImagePrice: {
    fontSize: 10,
    marginTop: 12,
    marginLeft: 8,
    color: '#0A55A6',
  },
  BoxProduct2IconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BoxProduct2Icon: {
    marginBottom: 5,
    marginRight: 8,
  },
  BoxProduct2IconStar: {
    paddingTop: 8,
    marginBottom: 5,
  },
  BoxProduct2IconBoxI: {
    flexDirection: 'row',
  },
  BoxProduct2IconBoxStar: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  ///------------///
  BoxProduct3Box: {
    width: width * (1 / 2.2),
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    margin: 8,
  },
  BoxProduct3Image: {
    padding: 4,
  },
  BoxProduct3ImageofLines: {
    width: '100%',
    height: width * (1 / 2.2),
  },
  ///------------///
  BoxProduct4Box: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginBottom: 10,
  },
  BoxProduct4Image: {
    width: width,
    height: width,
    resizeMode: 'center',
    paddingVertical: 4
  },
  BoxProduct4ComBox: {
    marginLeft: 10,
    padding: 8,
    flex: 1,
    borderTopColor: '#ECECEC',
    borderTopWidth: 1,
  },
  BoxProduct4ComBox2: {
    padding: 8,
    flex: 1,
    borderTopColor: '#ECECEC',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  BoxProduct4ComBoxIcon: {
    flexDirection: 'row',
  },
  BoxProduct4ComBoxIconText: {
    marginLeft: 2,
  },
  ///------------///
  BoxProduct4PlusHeader: {
    width: '100%',
    borderColor: '#ECECEC',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  BoxProduct4PlusImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  BoxProduct4PlusImageText: {
    textAlign: 'right',
    marginTop: 10,
    marginLeft: 10,
  },
  BoxProduct4PlusButtonBox: {
    marginTop: 10,
    flexDirection: 'row',
  },
  BoxProduct4PlusButtonFollow: {
    backgroundColor: '#0A55A6',
    height: 30,
    width: 90,
    paddingTop: 5,
    borderRadius: 5,
  },
  BoxProduct4PlusButtonFollowText: {
    textAlign: 'center',
    color: '#FFFF'
  },
  ///------------///
  BoxProduct5Box: {
    backgroundColor: '#FFFFFF', width: 85,
    borderColor: '#ECECEC', borderWidth: 1,
    marginTop: 6, marginBottom: 4,
    marginLeft: 4,
  },
  BoxProduct5ImageofLines: {
    width: 83,
    height: 83,
  },
  BoxProduct5Image: {
    width: '100%',
    height: '100%',
  },
  ///------------///
  BoxStore1Box: {
    width: width * 0.495,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 8,
  },
  BoxStore1Box2: {
    // width: width * 0.55,
    width: '55%',
    height: 105,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  BoxStore1Box3: {
    // width: width * 0.40,
    width: '40%',
    height: 105,
    marginTop: 10,
    marginLeft: 5,
  },
  BoxStore1Image: {
    width: '100%',
    height: '100%',
    borderColor: '#ECECEC',
  },
  ///------------///
  BoxStore2Box: {
    width: 160,
    height: 60,
    borderColor: '#ECECEC',
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  BoxStore2Box2: {
    width: width * 0.55,
    borderColor: '#ECECEC',
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 5,
  },
  BoxStore2Image: {
    width: '100%',
    height: '100%',
    borderColor: '#ECECEC',
    borderRadius: 8,
  },
  BoxStore2Image2: {
    width: '100%',
    height: height * 0.14,
    borderColor: '#ECECEC',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  ///------------///
  BoxStore3Box: {
    width: 150,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  BoxStore3Image: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
    borderColor: '#ECECEC',
  },
  BoxStore3Text: {
    marginTop: 4
  },
  ///------------///
  BoxStore4Box: {
    flexDirection: 'row',
    paddingRight: 40,
    padding: 10,
    marginTop: 10,
    height: 'auto',
    width: width - 20,
    backgroundColor: '#FFFF',
  },
  BoxStore4Image: {
    height: 80,
    width: 100,
  },
  BoxStore4Text: {
    marginLeft: 10,
    width: width - 160,
  },
  ///------------///
  BoxStore5Box: {
    flexDirection: 'row',
    paddingRight: 40,
    padding: 10,
    marginTop: 10,
    height: 'auto',
    width: width,
    backgroundColor: '#FFFF',
  },
  BoxStore5Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 30
  },
  ///------------///
  FrameBackground: {
    width,
    borderColor: '#ECECEC',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 10,
    paddingBottom: 4,
  },
  FrameBackground2: {
    width,
    borderColor: '#ECECEC',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 10,
    paddingBottom: 4,
  },
  FrameBackground3: {
    width,
    height: height * 0.07,
    borderColor: '#ECECEC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 30,
    marginBottom: -75,
  },
  FrameBackgroundTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FrameBackgroundTextStart: {
    marginLeft: 8,
    marginTop: 6,
  },
  FrameBackgroundTextEnd: {
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  FrameBackgroundTextEnd2: {
    color: '#fff',
    marginRight: 8,
  },
  Time_FlashSale_TimeBox: {
    height: 30,
    width: 30,
    marginLeft: 5,
    backgroundColor: '#222222',
    justifyContent: 'center',
    borderRadius: 5,
  },
  Time_FlashSale_TimeText: {
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  ///------------///
  FlexRow: {
    flexDirection: 'row'
  },
  FlexColumn: {
    flexDirection: 'column'
  },
  BackgroundAreaView: {
    backgroundColor: '#E9E9E9'
  },
  ItemCenter: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ItemCenterVertical: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  BottomSpace: {
    paddingBottom: 8,
  },
  MarginBottomTitle: {
    marginBottom: 6,
  },
  ///***------------------------------------------------------------------------------------------------------***///
  Toolbar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    paddingTop: 5,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  SafeAreaViewNB: {
    flex: 1,
  },
  LOGO: {
    height: 30,
    width: 50,
    resizeMode: 'stretch',
  },
  TextInput: {
    width: '80%',
    paddingVertical: 1,
  },
  Appbar: {
    borderColor: '#ECECEC',
    borderWidth: 1,
    height: 50,
    paddingTop: 6,
    paddingBottom: 6,
  },
  AppbarBody: {
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#fff',
  },
  ///------------------------------------------------------------------------------------------///
  child: {
    width,
    height: 'auto',
    aspectRatio: 2.6 / 1
  },
  childSlide: {
    width,
    height: 'auto',
    aspectRatio: 2.6 / 1
  },
  ///------------------------------------------------------------------------------------------///
  Category: {
    width: width * 0.19,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  category_A: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 205,
    paddingBottom: 6,
    paddingTop: 4,
    justifyContent: 'space-between',
  },
  Category_image: {
    height: '100%',
    width: '100%',
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
  ///------------------------------------------------------------------------------------------///
  FrameBackground_Height: {
    height: height * 0.155,
  },
  FrameBackground_Box: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  Brand_image_Box: {
    height: 28,
    width: width * 0.30,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginLeft: 2,
    marginTop: 2,
  },
  Brand_image_RCM: {
    height: '100%',
    width: '100%',
  },
  ImageMargin: {
    marginBottom: -10
  },
  ///------------------------------------------------------------------------------------------///
  Popular_Box_B: {
    width: 176,
    height: height * 0.22,
    flexDirection: 'column',
    marginLeft: 10,
    backgroundColor: '#EDEDED',
  },
  Popular_Box_D: {
    marginHorizontal: 3,
    marginVertical: 10,
    height: 80,
    width: 80,
  },
  Popular_image_Box: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  PopularText_A: {
    backgroundColor: '#0A55A6',
    borderColor: '#ECECEC',
    borderWidth: 0.5,
    height: height * 0.04,
    width: width * 0.20,

  },
  Image_icon_top: {
    height: 25,
    width: 20,
    resizeMode: 'stretch',
  },
  ///--------------------------------------------------------------------------------///
  ProductForYouFlexBox: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  ///------------------------------------------------------------------///
  CategoryProductImageHead: {
    marginTop: 5,
    width,
    height: 'auto',
    aspectRatio: 6 / 1
  },
  CategoryProductImage: {
    width: 100,
    height: 115,
    backgroundColor: 'white',
    margin: 5,
  },
  CategoryProductStoreBox: {
    width: width * 0.48,
    height: 90,
    marginLeft: 5,
  },
  CategoryProductStoreImage: {
    width: '100%',
    height: '100%',
    borderColor: '#ECECEC',
    borderRadius: 8,
  },
  ///------------------------------------------------------------------///
  Banner_Bar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    marginTop: 10,
  },
  Banner_Bar_image: {
    width: width,
    height: 'auto',
    aspectRatio: 7
  },
  Product_for_you: {
    height: 370,
    marginTop: 10,
  },
  ///------------------------------------------------------------------///
  Confidential_A: {
    flexDirection: 'row',
    height: 130,
  },
  ///------------------------------------------------------------------///
  Button_Bar_Box: {
    width: 70,
    alignItems: 'center',
    alignContent: 'center',
    height: 'auto',
    aspectRatio: 0.9,
    paddingVertical: 10,
    paddingHorizontal: 4
  },
  Button_Bar_icon: {
    height: 65,
    width: 65,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    resizeMode: 'stretch',
    borderRadius: 32.5,
  },
  ///------------------------------------------------------------------///
  Second_StoreFin: {
    width,
  },
  Second_StoreFin_BoxHead: {
    flexDirection: 'row',
    width: 'auto',
    height: height * 0.05,
    // height: 'auto',
    // aspectRatio: 6,
    justifyContent: 'space-between',
  },
  Second_StoreFin_Image: {
    marginLeft: 6,
    flexDirection: 'row',
  },
  Second_StoreFin_ImageA: {
    height: 155,
    width: width * 0.64,
    marginTop: 6,
    marginRight: 6,
  },
  Second_StoreFin_ImageB: {
    height: 155,
    marginTop: 6,
  },
  Second_StoreFin_ImageB_T: {
    height: 74,
    width: width * 0.32,
    marginBottom: 3
  },
  Second_StoreFin_ImageB_Ttext: {
    color: '#ffff',
  },
  Second_Storefooter: {
    width,
    paddingBottom: 8,
  },
  Second_Storefooter_image: {
    height: 75,
    width: 155,
    marginLeft: 10,
  },
  Second_Storefooter_Text: {
    color: '#FFF',
    height: 30,
    width: 160,
    marginLeft: 10,
    backgroundColor: '#0A55A6',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  bigSlideImage: {
    height: '75%', width: '100%',
  },
  bigSlideText: {
    backgroundColor: '#0A55A6', height: '23%', width: '100%',
    padding: 2
  },
  litleSlideImage: {
    height: 70, width: '100%',
    borderRadius: 5,
  },
  litleSlideText: {
    backgroundColor: '#0A55A6', height: '30%', width: '100%',
    borderBottomLeftRadius: 5, borderBottomRightRadius: 5,
    paddingTop: 0,
    padding: 2,
  },
  ///------------------------------------------------------------------/// ส่วนลด เปอร์เซ็น
  Box_On_sale: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb3449',
    paddingHorizontal: 5,
    marginLeft: 5
  },
  ///------------------------------------------------------------------/// ส่วน finMall
  FinMall_Box: {
    width,
    justifyContent: 'space-around',
    height: 'auto',
    aspectRatio: 2.8,
    marginBottom: 5,
  },
  FinMall_Box_Image: {
    width: width * 0.50,
    borderColor: '#EDEDED',
    borderWidth: 1
  },
  FinMall_Image: {
    width: 100,
    height: 100
  },
  FinMall_ScrollView: {
    marginLeft: 5,
    backgroundColor: '#EDEDED'
  },
  ///------------------------------------------------------------------/// ส่วน FIN Supermarket
  Supermarket_Product: {
    width: '100%',
    backgroundColor: '#0A55A6',
    paddingVertical: 10
  },
  Supermarket_Store: {
    height: 'auto',
    aspectRatio: 2.5,
    padding: 5,
    justifyContent: 'space-between',
    marginTop: 10
  },
  Supermarket_Image: {
    height: '49%',
    borderColor: '#EAEAEA',
    borderWidth: 1,
  },
  Supermarket_BrandBox: {
    width: '100%',
    flexDirection: 'row',
    height: 'auto',
    aspectRatio: 5.5,
    justifyContent: 'space-around'
  },
  Supermarket_Brand_Image: {
    borderColor: '#EAEAEA',
    borderWidth: 1,
    width: '49%'
  },
  Supermarket_Brand_Shop: {
    borderColor: '#ECECEC',
    borderWidth: 1,
    width: width * 0.30,
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  Supermarket_Brand_Shop2: {
    borderColor: '#ECECEC',
    borderWidth: 1,
    width: 110,
    height: 50,
    borderRadius: 5,
    marginLeft: 5
  },
  ///------------------------------------------------------------------///ส่วน 
  Botton_PopUp_FIN: {
    bottom: '30%',
    left: width - 60,
    marginTop: -60
  },
  Botton_PopUp_Image: {
    height: 60,
    width: 60,
  },
  Botton_PopUp_Box: {
    backgroundColor: 'transparent',
    height: 150,
  },
  Botton_PopUp_Text: {
    marginTop: 50,
    marginLeft: '20%'
  }



});