import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { mainColor } from './StylesMainScreen';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  ///--------------------------------------------------------------------///
  StoreHeads: {
    width: width,
    // height: 132,
    // aspectRatio: 2.0850,
  },
  StoreHeadImage: {
    width: width,
    height: 'auto',
    aspectRatio: 2.5,
    // flex: 1,
  },
  StoreHeadBox: {
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  StoreHeadFace: {
    width: 80,
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 80,
    // marginTop: 60,
  },
  StoreHeadText: {
    color: '#111111',
    // marginTop: 62,
    marginLeft: 6,
  },
  StoreHeadTextOther: {
    marginLeft: 6,
    color: '#64696F',
  },
  StoreHeadTextOther2: {
    marginLeft: 6,
    color: '#111111',
  },
  HeadButtom: {
    // marginTop: 48,
    // justifyContent: 'flex-end',
    marginRight: 8,
    // flexDirection: 'row'
  },
  StoreHeadButtom: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    width: 100,
    height: 25,
    // marginLeft: 30,
    marginTop: 4,
  },
  StoreHeadButtomText: {
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  StoreHeadDetailss: {
    width,
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    // borderBottomWidth: 1,
    paddingBottom: 3,
  },
  StoreHeadDetailsText1: {
    marginLeft: 21,
    marginTop: 3,
  },
  StoreHeadDetailsText2_1: {
    marginLeft: 30,
    marginTop: 8,
  },
  StoreHeadDetailsText2_2: {
    color: mainColor,
    marginLeft: 30,
    marginTop: 3,
  },
  StoreHeadDetailsText2_3: {
    color: '#A5A5A5',
    marginLeft: 6,
    marginTop: 3,
  },
  ///-------------------------------------------------------///
  Menubars: {
    width,
    padding: 4,
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    flexDirection: 'row'
  },
  ///---------------------------------------------------///
  Banner: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    width,
    padding: 3,
  },
  BannerBox: {
    width,
    height: height * 0.25,
    paddingHorizontal: 5
  },
  BannerSlide: {
    width: '100%',
    height: '100%',
    marginBottom: 8,
  },
  BannerTextTail: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderTopWidth: 0,
    borderWidth: 1,
    padding: 8,
  },
  SlideBox: {
    marginTop: -60,
    marginBottom: -10
  },
  ///-------------------------------------------------------------///
  TicketLineBox: {
    flex: 1,
    width: 160,
    height: 70,
    padding: 8,
  },
  TicketLineText: {
    marginTop: 10,
    color: '#FFFFFF',
  },
  TicketLineText2: {
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
    marginTop: 7,
  },
  TicketLineButtomText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  ///----------------------------------------------------------------------------///
  Banner_Bar_Box: {
    width,
  },
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
  SubMenu: {
    width,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ///------------------------------FeedScreen------------------------------------///
  AppbarMenu: {
    backgroundColor: mainColor,
    width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  Appbar: {
    backgroundColor: mainColor,
    width,
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  Icon_appbar_Text: {
    flexDirection: 'row',
  },
  Icon_appbar: {
    color: '#FFFF',
  },
  Text_appbar: {
    color: '#FFFF',
    marginTop: 6,
    marginLeft: 20,
  },
  ///-------------------------------------------------------------------------///
  Button_Bar: {
    backgroundColor: mainColor,
    height: 50,
    width,
    flexDirection: 'row',
  },
  ///-------------------------------------------------------------------------///
  Toolbar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  ///-------------------------------------------------------------------------///
  StoreFeedBoxProduct: {
    width,
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ///----------------------------NewsScreen-----------------------------------///
  Button_Bar: {
    backgroundColor: mainColor,
    height: 50,
    width,
    flexDirection: 'row',
  },
  ///-------------------------------------------------------------------------///
  header_icon_Box: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  header_icon: {
    marginLeft: 5,
  },
  header_Box: {
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginHorizontal: 3,
  },
  body_Box: {
    backgroundColor: '#FFF',
    marginTop: 3,
    marginHorizontal: 3,
    padding: 5,
  },
  body_Box_A: {
    flexDirection: 'row',
    width,
  },
  body_image: {
    height: 100,
    width: width * 0.35,
    borderColor: '#ECECEC',
    borderWidth: 1,
    backgroundColor: '#ECECEC'
  },
})