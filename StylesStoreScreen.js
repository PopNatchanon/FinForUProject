import { StyleSheet, Dimensions } from 'react-native';
import { Row } from 'reactstrap';

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
})