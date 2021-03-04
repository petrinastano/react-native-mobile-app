import React, { Component } from 'react';

// ReactNative components
import { FlatList } from 'react-native';

// Components
import {
    Module,
    Touchable,
    Thumbnail,
    Title,
    Subtitle,
    Text,
    Image,
    Button,
    View,
} 
from './../';


export default class ModuleEventListHorizontal extends Component {


    renderSeparator() {

        return( <View mrx4 /> );

    }


    renderItem( data ) {

        //<Image source={{ uri:data.image }} />

        return(
            
            <View card mhx4>
                <Touchable imagePoster onPress={() => this.props.navigate("EventScreen")}>
                    <View date>
                        <Text day>2</Text>
                        <Text uppercase={true} month>mar</Text>
                    </View>

                    <Image source={{ uri:data.image }} />
                </Touchable>

                <View mtx6 phx5 centerHorizontal>
                    <Title numberOfLines={1} fsx3 fontWeightBold>
                        {data.text}
                    </Title>

                    <View mbx3 />

                    <Subtitle numberOfLines={1} fsx1>
                        Pia - Prievidza, Zimný štadión
                    </Subtitle>
                </View>
            </View>

        );

    };


    renderDynamicPart() {

        switch(this.props.type){

            case "category":

                return(

                    <View colx10>
                        <Title fsx12 fontWeightBolder>{ this.props.content }</Title>
                    </View>

                );

            break;


            case "author":

                return(

                    <Touchable>
                        <View row>
                            <Thumbnail sizex1 source={{ uri:this.props.content.image }} />

                            <View mrx4 />

                            <View centerVertical>
                                <Title fsx3 fontWeightBold>{ this.props.content.text }</Title>
                            </View>
                        </View>
                    </Touchable>

                );

            break;

        }

    }



    render() {

        return (

            <Module eventListHorizontal style={this.props.style}>
                <View row mhx8 mbx7>
                    {this.renderDynamicPart()}

                    <Button>
                        <Text colorActive>See all</Text>
                    </Button>
                </View>
    
                <FlatList
                    data={this.props.items}
                    horizontal
                    keyExtractor={items => items.text}
                    renderItem={data => this.renderItem(data.item)}
                    ListHeaderComponent={this.renderSeparator}
                    ListFooterComponent={this.renderSeparator}
                    showsHorizontalScrollIndicator={false}
                />
            </Module>

        );
    }
}
