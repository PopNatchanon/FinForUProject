///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import FinService from './FinService';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import FinService_About from './About/About';
import FinService_Blog from './Blog/Blog';
import FinService_Content from './Content/Content';
import FinService_Review from './Review/Review';
import FinService_ContentMarketing from './ContentMarketing/ContentMarketing';
import FinService_Admin from './Admin/Admin';
import FinService_Photograph from './Photograph/Photograph';
import FinService_VideoContent from './VideoContent/VideoContent';
import FinService_GraphicDesign from './GraphicDesign/GraphicDesign'
///----------------------------------------------------------------------------------------------->>>>
import ContentMarketing_Workpiece from './ContentMarketing/Workpiece/Workpiece';
export default [
    { component: FinService, name: 'FinService', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinService_About, name: 'FinService_About', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinService_Blog, name: 'FinService_Blog', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinService_Content, name: 'FinService_Content', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinService_Review, name: 'FinService_Review', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>>
    { component: FinService_ContentMarketing, name: 'FinService_ContentMarketing', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinService_Admin, name: 'FinService_Admin', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinService_Photograph, name: 'FinService_Photograph', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinService_VideoContent, name: 'FinService_VideoContent', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinService_GraphicDesign, name: 'FinService_GraphicDesign', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>>
    { component: ContentMarketing_Workpiece, name: 'ContentMarketing_Workpiece', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
];