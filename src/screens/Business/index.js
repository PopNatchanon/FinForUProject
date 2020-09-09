///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Business from './Business';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Business_Finance from './Finance/Finance';
import Business_Froms from './Froms/Froms';
import Business_Growth from './Growth/Growth';
import Business_IdCard from './IdCard/IdCard';
import Business_Product from './Product/Product';
import Business_Profile from './Profile/Profile';
import Business_Register from './Register/Register';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Business, name: 'Business',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Business_Finance, name: 'Business_Finance',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Business_Froms, name: 'Business_Froms',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Business_Growth, name: 'Business_Growth',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Business_IdCard, name: 'Business_IdCard',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Business_Product, name: 'Business_Product',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Business_Profile, name: 'Business_Profile',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Business_Register, name: 'Business_Register',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];