///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import FinService from './FinService';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import ContentMarketing from './Menu_Service/ContentMarketing';
import Admin from './Menu_Service/Admin';
// import Photograph from './Photograph';
// import VideoContent from './VideoContent';
// import GraphicDesign from './GraphicDesign'
///----------------------------------------------------------------------------------------------->>>>
import Workpiece from './Workpiece/Workpiece';
export default [
    { component: FinService, name: 'FinService', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: ContentMarketing, name: 'ContentMarketing', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Admin, name: 'Admin', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>>
    { component: Workpiece, name: 'Workpiece', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
];