import { Animated } from 'react-native';
import {
    IMAGE_IS_DRAGGING, IMAGE_IS_SCALING, IMAGE_LOAD_DATA, IMAGE_OFFSET_GESTURE_POSITION, IMAGE_VALUE_GESTURE_POSITION,
    IMAGE_VALUE_SCALE_VALUE, IMAGE_ZOOM
} from '../actions/constants';

const initialState = {
    data: [],
    isDragging: false,
    isScaling: false,
    gesturePosition: new Animated.ValueXY(),
    scaleValue: new Animated.Value(0),
    selectedData: {},
};
export default (state = initialState, action) => {
    const { gesturePosition, scaleValue } = state;
    switch (action.type) {
        case IMAGE_IS_DRAGGING:
            return { ...state, isDragging: action.payload };
        case IMAGE_IS_SCALING:
            return { ...state, isScaling: action.payload };
        case IMAGE_LOAD_DATA:
            return { ...state, data: action.payload, };
        case IMAGE_OFFSET_GESTURE_POSITION:
            gesturePosition.setOffset(action.payload);
            return { ...state, gesturePosition: gesturePosition };
        case IMAGE_VALUE_GESTURE_POSITION:
            gesturePosition.x.setValue(action.x);
            gesturePosition.y.setValue(action.y);
            return { ...state, gesturePosition: gesturePosition };
        case IMAGE_VALUE_SCALE_VALUE:
            scaleValue.setValue(action.payload);
            return { ...state, gesturePosition: gesturePosition };
        case IMAGE_ZOOM:
            return { ...state, selectedData: action.payload };
        default:
            return state;
    };
};