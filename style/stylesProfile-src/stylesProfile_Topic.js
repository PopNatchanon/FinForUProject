import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    ///-----------------------------------ChatScreen-------------------------------------------///
    AppbarChat: {
        height: 50,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    Chat_Tag: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#ECECEC',
        borderWidth: 1,
        marginTop: 5,
    },
    Chat_Tag_image: {
        height: 60,
        width: 60,
        // marginTop: 10,
        borderRadius: 40,
    },
    Chat_Tag_online: {
        height: 20,
        width: 60,
        alignItems: 'flex-end',
        marginTop: -20
    },
    Chat_Tag_online_point: {
        height: 15,
        width: 15,
        backgroundColor: '#1BE72F',
        borderRadius: 10,
    },
    Chat_Tag_text: {
        marginLeft: 10,
        marginTop: 10,
    },
    Chat_Tag_icon: {
        flexDirection: 'row',
        marginTop: 10,
    },
    Chat_Detail: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        padding: 10
    },
    Message_BoxProfile: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    Message_Box: {
        borderColor: '#0A55A6',
        borderWidth: 1,
        maxWidth: '70%',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    Chat_Box: {
        width: '100%',
        maxHeight: 150,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    Chat_Box_TextInput: {
        width: '80%',
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    ///-----------------------------------Follow_storeScreen-----------------------------------///
    Follow_store_Box: {
        backgroundColor: '#FFF',
        height: 'auto',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    Follow_store_Box_image: {
        height: 70,
        width: 70,
        marginTop: 10,
        borderRadius: 40,
    },
    Follow_store_Box_text: {
        marginLeft: 10,
        marginTop: 10,
    },
    Follow_store_Button: {
        height: 30,
        width: 100,
        backgroundColor: '#0A55A6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    Might_like_Store: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#FFFF'
    },
    Might_like_Store_Box: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Might_like_Store_BoxP: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Might_like_Store_BoxPro: {
        width: 95,
        borderColor: '#ECECEC',
        borderWidth: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Might_like_Store_BoxImage: {
        height: 100,
        width: 90,
    },
    Might_like_Store_Total: {
        borderColor: '#0A55A6',
        borderWidth: 1,
        borderRadius: 30,
    },
    ///-----------------------------------Review_me-----------------------------------///
    Review_me: {
        marginVertical: 10,
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFF',
        padding: 10,
    },
    Review_me_Box: {
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    Review_me_Box_head: {
        height: 30,
        width: 60,
        backgroundColor: '#0A55A6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    Review_me_Box_image: {
        width: '100%',
        height: 100,
        backgroundColor: '#E9E9E9',
        paddingTop: 20,
        padding: 10,
    },
    Review_me_Box_imageA: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Review_me_image: {
        height: 60,
        width: 60,
    },
    Review_From: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 10
    },
    Review_From_Boximage: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        alignItems: 'center',
    },
    Review_From_image: {
        backgroundColor: '#F4F4F4',
        padding: 10,
        flexDirection: 'row',
        width: '100%'
    },
    Review_From_Star_Box: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    Review_From_TextInput: {
        backgroundColor: '#F4F4F4',
        marginTop: 10,
        height: 150,
        width: '100%'
    },
    Review_From_Buttonshare: {
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#0A55A6',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ///-----------------------------------Help_me-----------------------------------///
    Help_me_ImageBackground: {
        height: 180,
        width: '100%',
    },
    Help_me_Box_text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    Question_Box: {
        justifyContent: 'center',
        marginTop: 5,
        width: '100%',
        height: 40,
        backgroundColor: '#FFF',
    },
    Topic_Box: {
        paddingTop: 10,
        marginTop: 10,
        width: '90%',
        height: 50,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        flexDirection: 'row',
    },
    Topic_Box_icon: {
        color: '#0A55A6',
        marginLeft: 10,
        marginRight: 10,
    },
    Account_Help: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#ffffff'
    },
    Account_Help_TextInput: {
        borderColor: '#E5E5E5',
        borderWidth: 1,
        flexDirection: 'row',
        width: '95%',
        paddingLeft: 10,
        borderRadius: 5,
    },
    Topic_DetailHelp_BoxText: {
        width: '100%',
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    Topic_DetailHelp_Tag: {
        width: '100%',
        borderColor: '#EAEAEA',
        borderWidth: 1,
        padding: 10
    },
    Topic_DetailHelp_ButtonChat: {
        width: 100,
        height: 50,
        backgroundColor: '#0A55A6',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    ///-----------------------------------Total_Order-----------------------------------///
    Button_bar: {
        height: 40,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
    },
    Order_BoxStore: {
        paddingHorizontal: 10,
        borderColor: '#EAEAEA',
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingVertical: 5,
    },
    Order_StorePro: {
        margin: 5,
        height: 40,
        width: 40,
        backgroundColor: '#A2A2A2',
        borderRadius: 20,
    },
    Order_Box_Button: {
        marginTop: 5,
        flexDirection: 'row',
    },
    Order_Button: {
        padding: 5,
        borderRadius: 5,
        marginLeft: 5,
        flexDirection: 'row',
    },
    Order_Product: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    Order_Product_Pro: {
        height: 80,
        width: 80,
        margin: 10,
    },
    Order_Box_price: {
        borderColor: '#EAEAEA',
        borderTopWidth: 1,
        padding: 10,
    },
    Order_Box_priceText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    ///-----------------------------------Return_products-----------------------------------///
    // Return_products_pro Class
    products_pro: {
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 700,
    },
    // Return_products_From Class
    Return: {
        height: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    Return_Detail_Box: {
        height: 40,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderColor: '#D5D5D5',
        borderWidth: 1,
    },
    Return_Detail_TextInput: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 150,
        borderColor: '#D5D5D5',
        borderWidth: 1,
    },
    Up_Image_Box: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 100,
        height: 80,
        borderColor: '#0A55A6',
        borderWidth: 1,
    },
    Return_ButtonBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    Return_Button: {
        height: 40,
        width: 120,
        backgroundColor: '#FFFFFF',
        borderColor: '#0A55A6',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ///-----------------------------------CancelScreen-----------------------------------///
    Cancel_Detail: {
        alignItems: 'center',
        marginTop: 10,
    },
    Cancel_Detail_Box: {
        borderColor: 'black',
        borderWidth: 1,
        width: '60%',
        height: 35,
        alignItems: 'flex-end',
        borderRadius: 5,
    },
    Cancel_Detail_ButtonBox: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    Cancel_Detail_Button: {
        height: 30,
        width: 100,
        borderColor: '#0A55A6',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ///-----------------------------------Setting-----------------------------------///
    BoxTopic: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#EAEAEA',
        borderWidth: 0.5,
    },
    SettingIcon: {
        marginTop: 6,
        marginRight: 8,
    },
    Button_Logout: {
        width: '100%',
        height: 50,
        alignContent: 'center',
        alignItems: 'center'
    },
    Button_LogoutBox: {
        width: width - 30,
        height: 40,
        backgroundColor: '#0A55A6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    ///-----------------------------------Setting_Topic-----------------------------------///
    Edit_Profile: {
        width: '100%',
        alignItems: 'center',
        flex: 1
    },
    Edit_Profile_Box: {
        height: 40,
        width: '70%',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    Edit_Profile_Button_Save: {
        height: 40,
        backgroundColor: '#0A55A6',
        width: 350,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    Edit_Pass: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingBottom: 20,
        marginTop: 10,
    },
    Edit_Pass_TextInput: {
        height: 40,
        width: '100%',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Address_Customar: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 10
    },
    Address_Customar_Box: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    ///-----------------------------------Order_Detail-----------------------------------///
    Order_Detail: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 5,
    },
    Order_Detail_ICON: {
        height: 30,
        width: 50,
        borderColor: '#FC8D00',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Order_Detail_Address: {
        justifyContent: 'center',
        padding: 10,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
    },
})