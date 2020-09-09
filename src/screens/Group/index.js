///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Group from './Group';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Group_About from './About/About';
import Group_Create from './Create/Create';
import Group_Image from './Image/Image';
import Group_Notification from './Notification/Notification';
import Group_Popular from './Popular/Popular';
import Group_Search from './Search/Search';
import Group_Total from './Total/Total';
///----------------------------------------------------------------------------------------------->>>> Sub Profile
import Group_Profile_Customer from './Profile/Customer/Customer';
import Group_Profile_Edit from './Profile/Edit/Edit';
import Group_Profile_Store from './Profile/Store/Store';
///----------------------------------------------------------------------------------------------->>>> Sub Save
import Group_Save_Activity from './Save/Activity/Activity';
import Group_Save_Post from './Save/Post/Post';
///----------------------------------------------------------------------------------------------->>>>
export default [{  ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Group, name: 'Group',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {  ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Group_About, name: 'Group_About',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Create, name: 'Group_Create',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Image, name: 'Group_Image',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Notification, name: 'Group_Notification',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Popular, name: 'Group_Popular',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Search, name: 'Group_Search',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Total, name: 'Group_Total',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {  ///----------------------------------------------------------------------------------------------->>>> Sub Profile
    component: Group_Profile_Customer, name: 'Group_Profile_Customer',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Profile_Edit, name: 'Group_Profile_Edit',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Profile_Store, name: 'Group_Profile_Store',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {  ///----------------------------------------------------------------------------------------------->>>> Sub Save
    component: Group_Save_Activity, name: 'Group_Save_Activity',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Group_Save_Post, name: 'Group_Save_Post',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];