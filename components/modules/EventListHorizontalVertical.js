import React, { Component } from 'react';

// ReactNative components
import { FlatList } from 'react-native';

// Components
import {
    Module,
    Touchable,
    Button, 
    Text, 
    Title, 
    Subtitle,
    View,
    Image,
} from './../../components';

// FakeData
// Fake Data
import { data } from './../../assets/fakeData';

export default class ModuleEventListHorizontalVertical extends Component {

    renderRowSeparator() {

        return( <View style={{ marginBottom:25 }} /> );

    }


    renderItemSeparator() {

        return( <View mrx8 /> );

    }


    renderSeparatorEdge() {

        return( <View mrx8 /> );

    }


    renderItem( data ) {

        //<Image source={{ uri:data.image }} />

        console.log(data);

        return(
            
            <View card>
                <Touchable imagePoster onPress={() => this.props.navigate("EventScreen")}>
                    <View date>
                        <Text day>2</Text>
                        <Text uppercase={true} month>mar</Text>
                    </View>

                    <Image source={{ uri: data.image }} />
                </Touchable>

                <View mtx6 phx5 centerHorizontal>
                    <Title numberOfLines={1} fsx3 fontWeightBold>
                        {data.title}
                    </Title>

                    <View mbx3 />

                    <Subtitle numberOfLines={1} fsx1>
                        Pia - Prievidza, Zimný štadión
                    </Subtitle>
                </View>
            </View>

        );

    };



    renderListHorizontal( data ) {

        return(

            <Module eventListHorizontal>
                <View row mhx8 mbx7>
                    <View colx10>
                        <Title fsx12 fontWeightBolder>{ data.category }</Title>
                    </View>

                    <Button>
                        <Text colorActive>See all</Text>
                    </Button>
                </View>
    
                <FlatList
                    data={ data.events }
                    horizontal
                    keyExtractor={data => data.id}
                    renderItem={data => this.renderItem(data.item)}
                    ListHeaderComponent={this.renderSeparatorEdge}
                    ListFooterComponent={this.renderSeparatorEdge}
                    ItemSeparatorComponent={this.renderItemSeparator}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={2}
                />
            </Module>

        );

    };



    render() {

        return (

            <FlatList
                data={data}
                keyExtractor={data => data.category}
                renderItem={data => this.renderListHorizontal(data.item)}
                ItemSeparatorComponent={this.renderRowSeparator}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={3}
            />

        );
    }
}