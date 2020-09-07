
///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Detail from './Detail';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Detail_Reviews from './Reviews/Reviews';
import Detail_SameStore from './SameStore/SameStore';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Detail, name: 'Detail',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Detail_Reviews, name: 'Detail_Reviews',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Detail_SameStore, name: 'Detail_SameStore',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];