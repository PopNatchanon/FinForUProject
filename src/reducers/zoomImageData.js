import { Animated } from 'react-native';
import {
    IMAGE_IS_DRAGGING, IMAGE_IS_SCALING, IMAGE_LOAD_DATA, IMAGE_OFFSET_GESTURE_POSITION, IMAGE_SELECT, IMAGE_VALUE_GESTURE_POSITION,
    IMAGE_VALUE_SCALE_VALUE,
} from '../actions/constants';

const initialState = {
    data: [],
    isActiveData: false,
    isDragging: false,
    isScaling: false,
    gesturePosition: new Animated.ValueXY(),
    scaleValue: new Animated.Value(1),
    selectedData: {},
};
export default (state = initialState, action) => {
    const { gesturePosition, scaleValue } = state;
    switch (action.type) {
        case IMAGE_IS_DRAGGING:
            console.log(`===================================================${action.type}`)
            console.log(action.payload)
            return { ...state, isDragging: action.payload };
        case IMAGE_IS_SCALING:
            console.log(`===================================================${action.type}`)
            console.log(action.payload)
            return { ...state, isScaling: action.payload };
        case IMAGE_LOAD_DATA:
            console.log(`===================================================${action.type}`)
            console.log(action.payload)
            return { ...state, data: action.payload, isActiveData: true, };
        case IMAGE_OFFSET_GESTURE_POSITION:
            console.log(`===================================================${action.type}`)
            console.log(action.payload)
            gesturePosition.setOffset(action.payload);
            return { ...state, gesturePosition: gesturePosition };
        case IMAGE_SELECT:
            console.log(`===================================================${action.type}`)
            console.log(action.payload)
            return { ...state, selectedData: action.payload };
        case IMAGE_VALUE_GESTURE_POSITION:
            console.log(`===================================================${action.type}`)
            console.log(action.x)
            console.log(action.y)
            gesturePosition.x.setValue(action.x);
            gesturePosition.y.setValue(action.y);
            return { ...state, gesturePosition: gesturePosition };
        case IMAGE_VALUE_SCALE_VALUE:
            console.log(`===================================================${action.type}`)
            console.log(action.payload)
            scaleValue.setValue(action.payload);
            return { ...state, gesturePosition: gesturePosition };
        default:
            return state;
    };
};