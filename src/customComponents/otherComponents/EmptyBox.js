import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, } from 'react-native';
export const { width, height, } = Dimensions.get('window');
import stylesLayout from '../../style/stylesLayout';
import stylesMain from '../../style/StylesMainScreen';
import { IconLoading, GenArray } from "..";
import { ProductBox } from '../Tools';
const { FRow, HxW75p, } = stylesLayout;
const { BoxProduct1Box2, ItemCenter, } = stylesMain;
function BoxEmpty(props) {
    const { colunmsOfNumber, rowsOfNumber } = props;
    return GenArray(rowsOfNumber).map((_, i) => <View style={FRow}>
        {GenArray(colunmsOfNumber).map((_, i) => <View key={i} style={[ItemCenter, BoxProduct1Box2,
            { borderColor: '#9C9C9C', borderWidth: 0.5, marginTop: 0, marginLeft: 0, }]}>
            <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 113 }]}>
                <View style={[HxW75p, ItemCenter, { marginVertical: height * 0.010, }]}>
                    <IconLoading />
                </View>
            </View>
            <View style={{ height: 40, paddingHorizontal: 3, }} />
        </View>)}
    </View>);
};
function BoxEmpty2(props) {
    const { colunmsOfNumber } = props;
    return <ProductBox dataService={GenArray(colunmsOfNumber)} mode='row2colall_new' nodata />;
};

function MainBox(props) {
    const { rowsOfNumber } = props;
    return rowsOfNumber != 0 ? BoxEmpty(props) : BoxEmpty2(props);
}
MainBox.propTypes = {
    colunmsOfNumber: PropTypes.number,
    rowsOfNumber: PropTypes.number,
};
MainBox.defaultProps = {
    colunmsOfNumber: 10,
    rowsOfNumber: 1,
};
export default MainBox;