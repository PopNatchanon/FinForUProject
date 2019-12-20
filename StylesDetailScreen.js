import { StyleSheet, Dimensions } from 'react-native';
import { Row } from 'reactstrap';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

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
      Icon_appbar:{
        marginTop: 5,
      },
      
      Text_All: {
        fontWeight: 'bold',
        fontSize: 16,
      },

      ///--------------------------------------------------------------------------///

      Detail_Image:{
        backgroundColor:'blue',
        width,
        height:300,
      },
      Icon_Back:{
        borderRadius:20,
        width:30,
        marginTop: 5,
        marginLeft:5,
        backgroundColor:'#ECECEC',
      },
})