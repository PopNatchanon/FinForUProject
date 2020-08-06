///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Animated, Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Image, PanResponder,
} from 'react-native';
import { PanGestureHandler, State, gestureHandlerRootHOC } from 'react-native-gesture-handler';
///----------------------------------------------------------------------------------------------->>>> Import
import Animateds from 'react-native-reanimated';
const { cond, eq, add, set, Value, event } = Animateds;
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GenArray, NavigationNavigate } from '..';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>>
const NUM_OF_DUP = 3;
const approximatelyEqualTo = (a, b, epsilon = 0.01) => Math.abs(a - b) < epsilon;
export default class Carousel extends Component {
    scrollView1 = React.createRef();
    scrollView2 = React.createRef();
    translationXRef = new Animated.Value(0);
    translationYRef = new Animated.Value(0);
    state = {
        aNextPage: 0,
        animatedNextPage: new Animated.Value(0),
        aPrevPage: 0,
        currentPage: 1,
        childHeight: 0,
        childWidth: 0,
        zoomActiveAnimated: false,
        zoomModal: false,
        zoomUpdate: false,
    };
    componentWillUnmount() {
        this.setAutoPlay(false);
    }
    isLooped = () => {
        const { data, loop } = this.props;
        return loop && data.length > 1;
    }
    setAutoPlay = (start) => {
        if (start) {
            this.setAutoPlay(false);
            const { data, autoplayInterval } = this.props;
            this.autoplayTimeout = setTimeout(() => {
                const isLooped = this.isLooped();
                const { childWidth, currentPage, zoomModal } = this.state;
                const isLastPage = data.length === currentPage;
                // compute new scroll x
                let scrollX;
                if (isLooped) {
                    const loopOffset = data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
                    scrollX = childWidth * (currentPage + loopOffset);
                } else {
                    scrollX = isLastPage ? 0 : childWidth * currentPage;
                }
                this.scrollView1.current.scrollTo({ x: scrollX, animated: true, });
            }, autoplayInterval);
        } else {
            clearTimeout(this.autoplayTimeout);
        }
    }
    onScroll = ({
        nativeEvent: { contentOffset: { x } },
    }) => {
        this.setAutoPlay(false);
        const { data, autoplay } = this.props;
        const { animatedNextPage, currentPage: prevPage, childWidth, zoomModal } = this.state;
        const isLooped = this.isLooped();
        // compute loop offset
        let loopOffset = 0;
        if (isLooped) {
            loopOffset = data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
        }
        // raw float page number
        const rawCurrentPage = x / childWidth;
        // rounded page number
        const roundCurrentPage = Math.round(rawCurrentPage);
        // cut front dup
        const normalizedPage = roundCurrentPage - loopOffset;
        // normalize page number
        let currentPage = normalizedPage + 1;
        if (normalizedPage < 0) {
            currentPage = data.length + normalizedPage + 1;
        } else if (normalizedPage >= data.length) {
            currentPage = (normalizedPage % data.length) + 1;
        }
        const isScrollEnd = approximatelyEqualTo(rawCurrentPage, roundCurrentPage);
        // reset loop offset
        if (
            isLooped
            && isScrollEnd
            && (
                normalizedPage < 0
                || normalizedPage >= data.length
            )
        ) {
            this.scrollView1.current.scrollTo({ x: (currentPage - 1 + loopOffset) * childWidth, animated: false, });
        }
        // restart autoplay
        if (isScrollEnd && autoplay && !zoomModal) {
            this.setAutoPlay(true);
        }
        // page number changes
        if (currentPage !== prevPage) {
            this.setState({
                currentPage,
            });
            const { onPage } = this.props;
            onPage({
                prev: prevPage,
                current: currentPage,
            });
        }
    }
    onContentSizeChange = (contentWidth, contentHeight) => {
        const { data, autoplay } = this.props;
        const { zoomModal } = this.state;
        const isLooped = this.isLooped();
        const loopOffset = data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
        // compute total number of children
        const childrenNum = isLooped ? data.length + loopOffset * 2 : data.length;
        this.setState({
            childHeight: contentHeight, childWidth: contentWidth / childrenNum,
        }, () => {
            // set loop initial offset
            if (isLooped) {
                const { childWidth } = this.state;
                this.scrollView1.current.scrollTo({ x: childWidth * loopOffset, animated: false, });
            }
            if (autoplay && !zoomModal) {
                this.setAutoPlay(true);
            }
        });
    }
    renderItems = () => {
        const { activeZoom, data, navigation, renderItem, zoom } = this.props;
        const { childHeight, childWidth, currentPage, zoomModal } = this.state;
        const translationXRef = new Animated.Value(0);
        const translationYRef = new Animated.Value(0);
        const _lastOffset = { x: 0, y: 0 };
        const _onGestureEvent = Animated.event(
            [{ nativeEvent: { translationX: translationXRef, translationY: translationYRef, }, },],
            { useNativeDriver: false }
        );
        let _onHandlerStateChange = event => {
            if (event.nativeEvent.oldState === State.ACTIVE) {
                _lastOffset.x += event.nativeEvent.translationX;
                _lastOffset.y += event.nativeEvent.translationY;
                translationXRef.setOffset(_lastOffset.x < -(width * 0.5) ? -(width - 126) : 0);
                translationXRef.setValue(0);
                translationYRef.setOffset(_lastOffset.y > 0 ? 0 : _lastOffset.y < -(height - 215) ? -(height - 215) : _lastOffset.y);
                translationYRef.setValue(0);
            };
        };
        let normalizedData = data;
        const isLooped = this.isLooped();
        let loopOffset = 0;
        if (isLooped) {
            const frontDup = data.slice(-NUM_OF_DUP);
            const endDup = data.slice(0, NUM_OF_DUP);
            loopOffset = frontDup.length;
            normalizedData = frontDup.concat(data, endDup);
        }
        return normalizedData.map((item, index) => {
            const normalizedIndex = index - loopOffset;
            // renderIndex should be within the range of [0, data.length - 1]
            let renderIndex = normalizedIndex % data.length;
            renderIndex = renderIndex < 0 ? data.length + renderIndex : renderIndex;
            const renderedItem = renderItem(item, renderIndex);
            // avoid duplicated keys
            let { key } = renderedItem;
            if (normalizedIndex < 0) {
                key = `${key}-front-dup`;
            } else if (normalizedIndex >= data.length) {
                key = `${key}-end-dup`;
            }
            return <React.Fragment key={key}>
                <PanGestureHandler enabled={zoom} onGestureEvent={_onGestureEvent} onHandlerStateChange={_onHandlerStateChange}>
                    <Animated.View style={{
                        overflow: 'hidden', transform: [{ translateX: translationXRef }, { translateY: translationYRef }]
                    }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => {
                            activeZoom ? NavigationNavigate({ goScreen: 'ImageZoom', setData: { currentPage, data }, navigation, }) :
                                console.log(key);
                        }}>
                            {renderedItem}
                        </TouchableOpacity>
                    </Animated.View>
                </PanGestureHandler>
            </React.Fragment>
        });
    }
    defaultPropsDots = {
        activeBGColor: '#ffffff66', activeBorderColor: '#ffffffff', activeHeight: 10, activeWidth: 10, borderRadius: 20, borderWidth: 3,
        height: null, inactiveBGColor: '#99999966', inactiveBorderColor: '#999999ff', inactiveHeight: 10, inactiveWidth: 10, marginHorizontal: 4, width: null,
    }
    renderPaginationDots = () => {
        const { data, dotsStyle, paginationPosition, paginationType, } = this.props
        const {
            aNextPage, animatedNextPage, aPrevPage, animatedPrevPage, childHeight, childWidth, currentPage, prevPage, zoomModal
        } = this.state;
        const isLooped = this.isLooped();
        let loopOffset = 0;
        if (isLooped) {
            loopOffset = data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
        };
        const translateY = childHeight - 40;
        if (childHeight != 0) {
            return <View style={{
                flexDirection: 'row', position: 'absolute', width, height: 50, alignContent: 'center', alignItems: 'center',
                justifyContent: paginationPosition == 'down' ? 'center' : paginationPosition == 'down-left' ? 'flex-start' :
                    paginationPosition == 'down-right' ? 'flex-end' : 'center'
            }}>
                {GenArray(data.length).map((value, index) => {
                    const bgColor = index == currentPage - 1 ?
                        dotsStyle.activeBGColor ? dotsStyle.activeBGColor : this.defaultPropsDots.activeBGColor :
                        dotsStyle.inactiveBGColor ? dotsStyle.inactiveBGColor : this.defaultPropsDots.inactiveBGColor;
                    const borderColor = index == currentPage - 1 ?
                        dotsStyle.activeBorderColor ? dotsStyle.activeBorderColor : this.defaultPropsDots.activeBorderColor :
                        dotsStyle.inactiveBorderColor ? dotsStyle.inactiveBorderColor : this.defaultPropsDots.inactiveBorderColor;
                    const borderRadius = dotsStyle.borderRadius ? dotsStyle.borderRadius : this.defaultPropsDots.borderRadius;
                    const borderWidth = dotsStyle.borderWidth ? dotsStyle.borderWidth : this.defaultPropsDots.borderWidth;
                    const heightBox = dotsStyle.height ? dotsStyle.height : index == currentPage - 1 ?
                        dotsStyle.activeHeight ? dotsStyle.activeHeight : this.defaultPropsDots.activeHeight :
                        dotsStyle.inactiveHeight ? dotsStyle.inactiveHeight : this.defaultPropsDots.inactiveHeight;
                    const marginHorizontal = dotsStyle.marginHorizontal ? dotsStyle.marginHorizontal :
                        this.defaultPropsDots.marginHorizontal;
                    const widthBox = dotsStyle.width ? dotsStyle.width : index == currentPage - 1 ?
                        dotsStyle.activeWidth ? dotsStyle.activeWidth : this.defaultPropsDots.activeWidth :
                        dotsStyle.inactiveWidth ? dotsStyle.inactiveWidth : this.defaultPropsDots.inactiveWidth;
                    return <TouchableOpacity activeOpacity={1} key={index} style={{
                        zIndex: 1, backgroundColor: bgColor, borderColor: borderColor, borderRadius: borderRadius,
                        borderWidth: borderWidth, height: heightBox, marginHorizontal: marginHorizontal,
                        marginLeft: paginationPosition == 'down-left' && index == 0 ? 4 + marginHorizontal : marginHorizontal,
                        marginRight: paginationPosition == 'down-right' && index == data.length - 1 ? 4 + marginHorizontal :
                            marginHorizontal, transform: [{ translateY: translateY }], width: widthBox,
                    }} onPress={() => {
                        this.scrollView1.current.scrollTo({ x: (index + loopOffset) * childWidth, animated: true, });
                        this.setState({ currentPage: index + 1, });
                        console.log('selectIndex'); console.log(index);
                    }} />
                })
                }
            </View>
        };
    }
    renderPaginationNumber = () => {
        const { data, paginationPosition, } = this.props
        const { childHeight, childWidth, currentPage, } = this.state;
        const translateX = paginationPosition == 'down' ? (childWidth * 0.5) - 22.5 :
            paginationPosition == 'down-left' ? 5 : paginationPosition == 'down-right' ? childWidth * 0.875 :
                paginationPosition == 'left' ? 5 : paginationPosition == 'right' ? childWidth * 0.875 :
                    paginationPosition == 'up' ? (childWidth * 0.5) - 22.5 : paginationPosition == 'up-left' ? 5 :
                        paginationPosition == 'up-right' ? childWidth * 0.875 : (childWidth * 0.5) - 22.5;
        const translateY = paginationPosition == 'down' ? childHeight - 30 : paginationPosition == 'down-left' ? childHeight - 30 :
            paginationPosition == 'down-right' ? childHeight - 30 : paginationPosition == 'left' ? (childHeight * 0.5) - 12.5 :
                paginationPosition == 'right' ? (childHeight * 0.5) - 12.5 : paginationPosition == 'up' ? childHeight * 0.025 :
                    paginationPosition == 'up-left' ? childHeight * 0.025 : paginationPosition == 'up-right' ? childHeight * 0.025 :
                        childHeight - 30;
        if (childHeight != 0) {
            return <View style={{
                position: 'absolute', transform: [{ translateX: translateX }, { translateY: translateY }],
            }}>
                <Text style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize6, {
                    backgroundColor: '#fff', borderRadius: 20, height: 25, textAlign: 'center', textAlignVertical: 'center',
                    width: 45
                }]}>
                    {`${currentPage}/${data.length}`}</Text>
            </View>
        };
    }
    render = () => {
        const { activeZoom, data, pagination, paginationType, } = this.props
        const { childHeight, childWidth, currentPage, zoomActiveAnimated, zoomModal, zoomUpdate, } = this.state;
        const isLooped = this.isLooped();
        let loopOffset = 0;
        if (isLooped) {
            loopOffset = data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
        };
        if (activeZoom && zoomUpdate) {
            setTimeout(() => {
                !zoomModal && this.scrollView1.current.scrollTo({ x: (currentPage - 1 + loopOffset) * childWidth, animated: false, });
                // zoomModal && this.scrollView2.current.scrollTo({ x: (currentPage - 1 + loopOffset) * childWidth, animated: false, });
                this.setState({ zoomUpdate: zoomActiveAnimated });
            }, zoomModal ? 1 : 0);
        };
        return <View>
            <ScrollView
                ref={this.scrollView1}
                style={[styles.scrollView1, { width: childWidth },]}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                bounces={false}
                // iOS & Android should have used onMomentumScrollEnd
                // the issue https://github.com/facebook/react-native/issues/21718
                // onMomentumScrollEnd={this.onMomentumScrollEnd}
                onScrollEndDrag={this.onScrollEndDrag}
                scrollEventThrottle={16}
                onScroll={this.onScroll}
                onContentSizeChange={this.onContentSizeChange}>
                {this.renderItems()}
            </ScrollView>
            {pagination && (paginationType == 'dots' ? this.renderPaginationDots() : this.renderPaginationNumber())}
        </View>;
    };
}
const styles = StyleSheet.create({
    scrollView1: {
        flexGrow: 0,
    },
});
Carousel.propTypes = {
    renderItem: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    autoplayInterval: PropTypes.number,
    onPage: PropTypes.func,
    pagination: PropTypes.bool,
    paginationPosition: PropTypes.oneOf(['down', 'down-left', 'down-right', 'left', 'right', 'up', 'up-left', 'up-right',]),
    paginationType: PropTypes.oneOf(['number', 'dots']),
    zoom: PropTypes.bool,
};
Carousel.defaultProps = {
    data: [],
    dotsStyle: {},
    loop: false,
    autoplay: false,
    autoplayInterval: 3000,
    onPage: () => { },
    pagination: false,
    paginationPosition: 'down',
    paginationType: 'dots',
    zoom: false,
};