import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  ///***------------------------------------------------------------------------------------------------------***///
  BoxProductWarp: {
    width,
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    color: '#C4C4C4',
    textDecorationLine: 'line-through',
  },
  ///------------///
  BoxProduct2: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 8,
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
    width: '100%',
    height: height * 0.25,
    resizeMode: 'stretch',
    padding: 4,
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
    width: 200,
    height: 200,
    resizeMode: 'center',
    padding: 4,
  },
  BoxProduct4ComBox: {
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
  BoxProduct4ComBoxDetail: {
    fontSize: 12,
    marginLeft: 8,
  },
  BoxProduct4ComBoxTag: {
    color: '#0A55A6',
    marginLeft: 8,
  },
  BoxProduct4ComBoxText: {
    color: '#969BA0',
    marginLeft: 8,
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
  BoxProduct5NameofLines: {
    width: '100%',
  },
  BoxProduct5PriceofLines: {
    width: '100%',
  },
  BoxProduct5ImagePrice: {
    color: '#0A55A6',
  },
  BoxProduct5ImagePriceThrough: {
    color: '#C4C4C4',
    textDecorationLine: 'line-through',
  },
  ///------------///
  BoxStore1Box: {
    width: (width * 1 / 2) - 9,
    height: 100,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 8,
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
  BoxStore2Image: {
    width: '100%',
    height: '100%',
    borderColor: '#ECECEC',
    borderRadius: 8,
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
  },
  FrameBackground2: {
    width,
    borderColor: '#ECECEC',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 10,
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
  Time_FlashSale_TimeBox: {
    height: 30,
    width: 30,
    backgroundColor: '#222222',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 5,
  },
  Time_FlashSale_TimeText: {
    color: '#FFFFFF',
    textAlign: 'center',
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
  SafeAreaViewNoBackground: {
    flex: 1,
  },
  LOGO: {
    height: 30,
    width: 50,
    resizeMode: 'stretch',
  },
  TextInput: {
    width: 230,
    height: 40,
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
    marginTop: 10,
    height: 150,
    width,
  },
  childSlide: {
    width,
    height: 150,
  },
  ///------------------------------------------------------------------------------------------///
  Category: {
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  category_A: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 202,
    paddingBottom: 8,
    paddingTop: 8,
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
  ///------------------------------------------------------------------------------------------///
  FrameBackground_Height: {
    height: 150
  },
  FrameBackground_Box: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  Brand_image_RCM: {
    borderColor: '#ECECEC',
    borderWidth: 1,
    height: 50,
    width: 117,
    marginLeft: 2,
    marginTop: 2,
  },
  ImageMargin: {
    marginBottom: -20
  },
  ///------------------------------------------------------------------------------------------///
  Popular_Box_A: {
    height: 150,
    width,
    flexDirection: 'row',
    marginTop: 6,
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
  PopularText_A: {
    backgroundColor: '#ECECEC',
    borderColor: '#ECECEC',
    borderWidth: 0.5,
    height: 20,
    width: 200,
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
    height: 80,
  },
  CategoryProductImage: {
    width: 100,
    height: 115,
    backgroundColor: 'white',
    margin: 5,
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
  ///------------------------------------------------------------------///
  Banner_Bar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    marginTop: 10,
  },
  Banner_Bar_image: {
    width,
    height: 70,
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
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 4
  },
  Button_Bar_icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: '#0A55A6',
    borderWidth: 2,
    resizeMode: 'stretch',
  },
  ///------------------------------------------------------------------///
  Text_Bar_Image: {
    backgroundColor: '#0A55A6',
    height: 22,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  Text_Bar: {
    color: '#FFFFFF',
  },
  ///------------------------------------------------------------------///
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
  Second_StoreFin_Image: {
    height: 230,
    width: width,
    marginLeft: 6,
    flexDirection: 'row',
  },
  Second_StoreFin_ImageA: {
    height: 230,
    width: width * 0.64,
    marginTop: 6,
    marginRight: 6,
  },
  Second_StoreFin_ImageB: {
    height: 190,
    marginTop: 6,
  },
  Second_StoreFin_ImageB_T: {
    height: 112,
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
    backgroundColor: '#0A55A6', height: '25%', width: '100%',
    padding: 2
  },
  litleSlideImage: {
    height: 70, width: '100%',
    borderTopLeftRadius: 5, borderTopRightRadius: 5,
  },
  litleSlideText: {
    backgroundColor: '#0A55A6', height: 40, width: '100%',
    borderBottomLeftRadius: 5, borderBottomRightRadius: 5,
    padding: 2,
  },
});