import React, { Component } from 'react';

import {
    FlatList, 
    Animated, 
    Platform,
} from 'react-native';

import { View, Title } from './../index';

// Styles
const styles = {

    header:{

        position:"absolute",
        zIndex:1,
        top:0,
        left:0,
        right:0

    },

};

/*

    Animated.add(
        scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
        }),

        //offsetAnim,
    ),

    
    <Flatlist
        data={data}
        keyExtractor={data => data.id}
        renderItem={data => renderItem(data.item)}
        ListHeaderComponent={this.headerSeparator}
        ListFooterComponent={this.footerSeparator}
        ItemSeparatorComponent={() => itemSeparator()}
        bounces={false}
        scrollEventThrottle={1}
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true },
        )}
    />


    <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={1}
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true },
        )}
    >
        {this.props.children[1]}
    </Animated.ScrollView>
*/

// create FlatList as Animated component
const Flatlist = Animated.createAnimatedComponent(FlatList);


export default class ModuleHeaderScroll extends Component {

    constructor(props) {

        super(props);

        const scrollAnim = new Animated.Value(0);
        //const offsetAnim = new Animated.Value(0);

        this.state = {
            headerHeight: 0,
            scrollAnim
        };

    }


    headerSeparator = () => {

        return(

            <View style={{ marginBottom: this.state.headerHeight + 20 }} />

        );

    }


    footerSeparator = () => {

        return(

            <View style={{ marginBottom: 20 }} />

        );

    }


    renderContent() {

        const { headerHeight } = this.state;

        // Content
        if(headerHeight) {

            // catch props
            const { 
                data, 
                renderItem, 
                itemSeparator, } = this.props;

            // ItemSeparatorComponent not work on "horizontal" lists 

            return (

                <View bgColorWhite>

                    <Flatlist
                        data={data}
                        keyExtractor={data => data.id}
                        renderItem={data => renderItem(data.item)}
                        ListHeaderComponent={this.headerSeparator}
                        ListFooterComponent={this.footerSeparator}
                        ItemSeparatorComponent={() => itemSeparator()}
                        bounces={false}
                        scrollEventThrottle={1}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                            { useNativeDriver: true },
                        )}
                        removeClippedSubviews={true}
                        initialNumToRender={3}
                    />

                </View>

            );

        }

        // Preloader
        return (

            <View centerHorizontal style={{ marginTop:200 }}>
                <Title fontWeightBold>Loading...</Title>
            </View>

        );

    }


    headerStyle() {

        const { headerHeight, scrollAnim } = this.state;

        // if height of Header was detected
        if(headerHeight) {

            const clampedScroll = Animated.diffClamp(
                // input value
                scrollAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolateLeft: 'clamp',
                }),

                // Min value
                0,

                // Max value
                // NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
                headerHeight,
            );

            const headerTranslate = clampedScroll.interpolate({
                inputRange: [0, headerHeight],
                outputRange: [0, -headerHeight],
                extrapolate: 'clamp',
            });

            // Return styles
            headerStyle = [ styles.header, { transform: [{ translateY: headerTranslate }] } ];

        }

        else{

            headerStyle = styles.header;

        }


        return headerStyle;

    }


    render() {

        // Get styles for Header
        let headerStyle = this.headerStyle();
        
        return (

            <View>

                <View statusBarStyle />

                <Animated.View
                    onLayout={(event) => { this.setState({ headerHeight: event.nativeEvent.layout.height }) }}
                    style={ headerStyle }>

                    {this.props.children}

                </Animated.View>


                { this.renderContent() }

            </View>
        
        );

    }
}
