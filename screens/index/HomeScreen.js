import React, { Component } from 'react';

import{ FlatList } from 'react-native';

// Components
import {
    Container,
    Module,
    Header, 
    Left, 
    Right, 
    Body, 
    Button, 
    Text, 
    Title, 
    Subtitle,
    View,
    Image,
    Touchable,
    Icon,
} from './../../components';


// Modules
import {
    ModuleHeaderScroll,
    ModuleCategoriesListHorizontal,
    ModuleEventListHorizontalVertical 
} from './../../components/modules';


// Fake Data
import { subcategories, data } from './../../assets/fakeData';


export default class HomeScreen extends Component {

    // event card separator
    renderSeparator = () => {

        return( <View mrx4 /> );

    }


    // row seeparator in ModuleHeaderScroll
    itemSeparator() {

        return( <View style={{ marginBottom: 30 }} /> );

    }


    renderComponent( data ) {

        return(
            
            <View card mhx4>
                <Touchable imagePoster onPress={() => this.props.navigation.navigate("EventScreen")}>
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



    renderItem = ( data ) => {

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
                    horizontal={true}
                    keyExtractor={data => data.id}
                    renderItem={data => this.renderComponent(data.item)}
                    ListHeaderComponent={this.renderSeparator}
                    ListFooterComponent={this.renderSeparator}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={2}
                    removeClippedSubviews={true}
                />
            </Module>

        );

    };



    render() {

        const navigate = this.props.navigation.navigate;
        
        return (

            <Container>

                <ModuleHeaderScroll
                    data={data} 
                    renderItem={this.renderItem}
                    itemSeparator={this.itemSeparator}
                >

                    <View>

                        <Header hasSubtitle>
                            <Left>
                                <Button>
                                    <Icon name="invite-friend" />
                                </Button>
                            </Left>

                            <Body>
                                <Title>Browse</Title>
                                <Subtitle>Topoľčany</Subtitle>
                            </Body>

                            <Right>
                                <Button>
                                    <Icon name="location" colorActive />
                                </Button>
                            </Right>
                        </Header>


                        <ModuleCategoriesListHorizontal
                                screen={"CategoryScreen"}
                                navigate={ navigate }
                                items={ subcategories }
                        />

                    </View>

                </ModuleHeaderScroll>

            </Container>
        
        );

    }
}
