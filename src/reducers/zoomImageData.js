import { Animated } from 'react-native';
import {
    IMAGE_IS_DRAGGING, IMAGE_IS_SCALING, IMAGE_IS_GESTURE, IMAGE_LOAD_DATA, IMAGE_OFFSET_GESTURE_POSITION, IMAGE_SELECT,
    IMAGE_SELECT_CLEAR, IMAGE_VALUE_GESTURE_POSITION, IMAGE_VALUE_SCALE_VALUE,
} from '../actions/constants';

const initialState = {
    data: [],
    isActiveData: false,
    isDragging: false,
    isGesture: false,
    isScaling: false,
    gesturePosition: new Animated.ValueXY(),
    scaleValue: new Animated.Value(1),
    selectedData: {},
};
export default (state = initialState, action) => {
    const { gesturePosition, scaleValue } = state;
    switch (action.type) {
        case IMAGE_IS_DRAGGING:
            if (action.console) {
                console.log(`===================================================${action.type}`);
                console.log(action.payload);
            };
            return { ...state, isDragging: action.payload };
        case IMAGE_IS_GESTURE:
            if (action.console) {
                console.log(`===================================================${action.type}`);
                console.log(action.payload);
            };
            return { ...state, isGesture: action.payload };
        case IMAGE_IS_SCALING:
            if (action.console) {
                console.log(`===================================================${action.type}`);
                console.log(action.payload);
            };
            return { ...state, isScaling: action.payload };
        case IMAGE_LOAD_DATA:
            if (action.console) {
                console.log(`===================================================${action.type}`);
                console.log(action.payload);
            };
            return { ...state, data: action.payload, isActiveData: true, };
        case IMAGE_OFFSET_GESTURE_POSITION:
            if (action.console) {
                console.log(`===================================================${action.type}`);
                console.log(action.payload);
            };
            gesturePosition.setOffset(action.payload);
            return { ...state, gesturePosition: gesturePosition };
        case IMAGE_SELECT:
            if (action.console) {
                console.log(`===================================================${action.type}`);
                console.log(action.payload);
            };
            return { ...state, selectedData: action.payload };
        case IMAGE_SELECT_CLEAR:
            gesturePosition.x.setValue(0);
            gesturePosition.y.setValue(0);
            scaleValue.setValue(1);
            return {
                ...state, isDragging: false, isGesture: false, isScaling: false, gesturePosition: gesturePosition, scaleValue: scaleValue,
                selectedData: {}
            };
        case IMAGE_VALUE_GESTURE_POSITION:
            if (action.console) {
                console.log(`===================================================${action.type}`);
                console.log(action.x);
                console.log(action.y);
            };
            gesturePosition.x.setValue(action.x);
            gesturePosition.y.setValue(action.y);
            return { ...state, gesturePosition: gesturePosition };
        case IMAGE_VALUE_SCALE_VALUE:
            if (action.console) {
                console.log(`===================================================${action.type}`);
                console.log(action.payload);
            };
            scaleValue.setValue(action.payload);
            return { ...state, gesturePosition: gesturePosition };
        default:
            return state;
    };
};