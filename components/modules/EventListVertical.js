import React, { Component } from 'react';

// ReactNative components
import { FlatList } from 'react-native';

// Components
import {
    Module,
    Touchable,
    Title,
    Subtitle,
    Text,
    Image,
    View,
} 
from './../';

export default class ModuleEventListVertical extends Component {

    headerSeparator = () => {

        return(

            <View mbx5 />

        );

    }

    renderItem( data ) {

        return(
            
            <View px8 cardStyle>
                <Touchable imageStyle onPress={() => this.props.navigate("NextEvent")}>
                    <View centerXY dateStyle>
                        <Text dayStyle>2</Text>
                        <Text uppercase={true} monthStyle>mar</Text>
                    </View>

                    <Image source={{ uri:data.image }} />
                </Touchable>

                <View mtx7 phx10 centerHorizontal>
                    <Title fsx3 fontWeightMedium numberOfLines={1} fontWeightMedium>
                        {data.text}
                    </Title>

                    <View mbx3 />

                    <Subtitle numberOfLines={1}>
                        Pia - Prievidza, Zimný štadión
                    </Subtitle>
                </View>
            </View>

        );

    };



    render() {

        return (

            <Module eventListVerticalStyle>
                <FlatList
                    data={this.props.items}
                    keyExtractor={items => items.text}
                    ListHeaderComponent={this.headerSeparator}
                    renderItem={data => this.renderItem(data.item)}
                />
            </Module>

        );
    }
}