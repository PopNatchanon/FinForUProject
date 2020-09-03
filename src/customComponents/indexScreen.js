///----------------------------------------------------------------------------------------------->>>> Custom Screen
import { BrowerScreen } from '.';
import ImageZoom from '../customComponents/imageComponents/ImageZoom/ImageZoom'
///----------------------------------------------------------------------------------------------->>>> Custom options
const opacityTransition: object = {
    gestureDirection: 'horizontal', // we will swipe right if we want to close the screen;  
    transitionSpec: {
        open: { animation: 'timing', },
        close: {
            animation: 'timing',
            config: { duration: 300, },
        },
    },
    cardStyleInterpolator: ({ current }: { current: { progress: number } }) => ({
        cardStyle: { opacity: current.progress, }, // updates the opacity depending on the transition progress value of the current screen
    }),
};
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: BrowerScreen, name: 'BrowerScreen', options: { ...opacityTransition } },
    { component: ImageZoom, name: 'ImageZoom', options: { ...opacityTransition } }];