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
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  SafeAreaView: {
    flex: 1,
  },
  // SafeAreaViewSub: {
  //   flex: 1,
  //   height:height*(1-0.82),
  // },
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
    height: 50,
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'transparent',
  },
  Text_All: {
    fontWeight: 'bold',
    fontSize: 16,

  },
  ///--------------------------------------------------------------------///
  StoreHead: {
    width,
    height: 132,
  },
  StoreHeadImage: {
    width,
    height: 132,
    opacity: 0.9,
    flex: 1,
    // justifyContent: 'space-around',
  },
  StoreHeadBox: {
    flexDirection: 'row',
  },
  StoreHeadFace: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 60,
    marginLeft: 19,
  },
  StoreHeadText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 70,
    marginLeft: 23,
  },
  StoreHeadTextOther: {
    fontSize: 10,
    marginLeft: 23,
    color: '#BEBDBD',
  },
  StoreHeadTextOther2: {
    fontSize: 10,
    marginLeft: 23,
    color: '#FFFFFF',
  },
  StoreHeadButtom: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    width: 70,
    height: 20,
    marginLeft: 30,
    marginTop: 6,
  },
  StoreHeadButtomText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  StoreHeadDetails: {
    width,
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderBottomWidth: 1,
    paddingBottom: 14,
  },
  StoreHeadDetailsText1: {
    fontSize: 11,
    marginLeft: 20,
    marginTop: 8,
  },
  StoreHeadDetailsText2_1: {
    fontSize: 11,
    marginLeft: 30,
    marginTop: 8,
  },
  StoreHeadDetailsText2_2: {
    fontSize: 11,
    color: '#0A55A6',
    marginLeft: 30,
    marginTop: 8,
  },
  StoreHeadDetailsText2_3: {
    fontSize: 9,
    color: '#A5A5A5',
    marginLeft: 6,
    marginTop: 8,
  },
  ///-------------------------------------------------------///
  Menubar: {
    width,
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
  },
  ///---------------------------------------------------///

  Banner: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    width,
    padding: 8,
  },
  BannerBox: {
    width,
    height: 138,
  },
  BannerSlide: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    marginBottom: 8,
  },
  BannerTextHead: {
    marginTop: 8,
  },
  BannerTextTail: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderTopWidth: 0,
    borderWidth: 1,
    padding: 8,
  },
  ///-------------------------------------------------------------///
  TicketLine: {
    width,
    backgroundColor: '#FFFFFF',
    // borderColor: '#ECECEC',
    // borderWidth: 1,
    // marginTop: 10,
    padding: 8,
  },
  TicketLineBox: {
    flex: 1,
    width: 155,
    height: 70,
    padding: 8,
  },
  TicketLineText: {
    fontSize: 12,
    marginTop: 10,
    color: '#FFFFFF',
  },

  TicketLineText2: {
    fontSize: 8,
    marginTop: 6,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  TicketEnd: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderTopWidth: 1,
  },
  TicketLineButtom: {
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    width: 40,
    height: 20,
    marginLeft: 15,
    marginTop: 7,
  },
  TicketLineButtomText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  ///----------------------------------------------------------------------------///
  DealTop: {
    width,
    // borderColor: '#ECECEC',
    // backgroundColor: '#FFFFFF',
    // borderWidth: 1,
    borderRadius: 5,
    marginTop: 6,
  },
  DealTopTextBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DealTopText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 6,
  },
  DealTopTextEnd: {
    fontSize: 10,
    color: '#0A55A6',
    marginRight: 8,
    marginTop: 10,
  },
  DealTopBox: {
    width: 106,
    borderColor: '#ECECEC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
  DealTopImage: {
    width: 99,
    height: 98,
    resizeMode: 'contain',
    // borderColor: '#ECECEC',
    borderRadius: 5,
  },
  DealTopImageName: {
    fontSize: 10,
    marginTop: 6,
    marginLeft: 6,
  },
  DealTopIconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DealTopIcon: {
    paddingTop: 4,
    marginBottom: 4,
    marginRight: 6,
  },
  DealTopIconStar: {
    paddingTop: 5,
    marginBottom: 5,
  },
  DealTopIconBoxI: {
    flexDirection: 'row',
  },
  DealTopIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 6,
  },
  DealTopImagePrice: {
    fontSize: 8,
    marginTop: 6,
    marginLeft: 6,
    color: '#0A55A6',
  },
  ///----------------------------------------------------------------------------///
  NewProduct: {
    width,
    // borderColor: '#ECECEC',
    // backgroundColor: '#FFFFFF',
    // borderWidth: 1,
    borderRadius: 5,
    marginTop: 6,
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
  ///----------------------------------------------------------------------------///

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

  PopularProduct: {
    backgroundColor: '#FFFFFF',
    // borderColor: '#ECECEC',
    // borderWidth: 1,
    marginTop: 8,
    padding: 8,
  },
  PopularProductText: {
    width,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 9,
    // marginBottom:8,
  },
  PopularProductBoxProduct: {
    width,
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  PopularProductBox: {
    width: width * 0.442,
    height: height * 0.355,
    borderColor: '#ECECEC',
    borderWidth:1,
    margin:8,

  },
  PopularProductImage: {
    width: '100%',
    height: '65%',
    resizeMode: 'stretch',
    padding: 4,
  },
  PopularProductImageName: {
    fontSize: 12,
    marginTop: 12,
    marginLeft: 8,
  },
  PopularProductImagePrice: {
    fontSize: 10,
    marginTop: 12,
    marginLeft: 8,
    color: '#0A55A6',
  },
  PopularProductIconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PopularProductIcon: {
    marginBottom: 5,
    marginRight: 8,
  },
  PopularProductIconStar: {
    paddingTop: 8,
    marginBottom: 5,
  },
  PopularProductIconBoxI: {
    flexDirection: 'row',
  },
  PopularProductIconBoxStar: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  ///------------------------------------------------------------------///
})