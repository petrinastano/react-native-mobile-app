
import React, { Component } from 'react';

// ReactNative components
import { FlatList } from 'react-native';

// Components
import { 
  	Content,
    Section,
    Left,
    Right,
  	Title,
  	Subtitle,
    Text,
    Thumbnail,
    Image,
    Touchable,
    Button,
    View
} 
from './../../components';

// Modules
import { ModuleEventListHorizontal } from './../../components/modules';

// Fake Data
import { dataGroupFirst, dataGroupSecond, dataGroupThird } from './../../assets/fakeData';


/*
export default class SearchEvents extends Component {

	renderItem( data ) {

		<CardItem 
			data={ data } />

	}

    render() {
        
        return (
          
            <View>
                <FlatList
                    data={this.props.items}
                    keyExtractor={items => items.text}
                    renderItem={data => this.renderItem(data.item)}
                    ListHeaderComponent={this.renderSeparator}
                    ListFooterComponent={this.renderSeparator}
                    ItemSeparatorComponent={this.renderSeparator}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        
        );

    }
    
}
*/


export default class MyEventsScreenEvents extends Component {

	render() {
        
        return (
          
          	<Content background>


                <View separator />


                <Section boxSection>
                    <View row mbx8>
                        <View colx10>
                            <Title fsx2 fontWeightBold>Upcoming events</Title>
                        </View>

                        <Button>
                            <Text uppercase={false} colorActive>See all</Text>
                        </Button>
                    </View>

                    <Touchable itemImageText>
                        <Left touchablePoster>
                            <Thumbnail source={{ uri:"https://cdn-az.allevents.in/banners/1673613c68141de78df7f10f44457f05" }} />
                        </Left>

                        <Right>
                            <Title fsx2 fontWeightMedium>Tomorrowland Belgium 2017</Title>
                            <View mbx1 />
                            <Subtitle>16 Jan, Mon • Belgium lorem ipsum</Subtitle>
                        </Right>
                    </Touchable>


                    <View mbx6 />


                    <Touchable itemImageText>
                        <Left touchablePoster>
                            <Thumbnail source={{ uri:"https://cdn-az.allevents.in/banners/b942596e74587cb9629b904ef70477df" }} />
                        </Left>

                        <Right>
                            <Title fsx2 fontWeightMedium>SOLID Festival 2017</Title>
                            <View mbx1 />
                            <Subtitle>16 Jan, Mon • Belgium lorem ipsum</Subtitle>
                        </Right>
                    </Touchable>
                </Section>


                <View mbx10 />


                <View pvx10 bgColorWhite>
                    <ModuleEventListHorizontal 
                        type="author"
                        content={{
                            image:"https://cdn-az.allevents.in/banners/c4a9fd3103641f4a4e347949426db891",
                            text:"Barracuda Club..."
                        }}
                        items={ dataGroupFirst } />


                    <View style={{ marginBottom:35 }} />


                    <ModuleEventListHorizontal 
                        type="author"
                        content={{
                            image:"https://cdn-az.allevents.in/banners/f10a36f654c5a3fafb15c2c1c582e71d",
                            text:"Tiesto"
                        }}
                        items={ dataGroupSecond } />


                    <View style={{ marginBottom:35 }} />


                    <ModuleEventListHorizontal 
                        type="author"
                        content={{
                            image:"https://cdn-az.allevents.in/banners/5e6d53b05305c8d65ecf68bbdd61d417",
                            text:"Ministry of Fun"
                        }}
                        items={ dataGroupThird } />
                </View>

	        </Content>
        
        );

    }

}
