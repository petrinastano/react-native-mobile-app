import React, { Component } from 'react';

// Components
import { 
    Content,
    Title,
    Subtitle,
    Left,
    Right,
    Touchable,
    Thumbnail,
    View
} 
from './../../components';


export default class SearchScreenOrganizers extends Component {

    render() {
        
        return (
          
            <Content separator>

                <Touchable itemImageText>
                    <Left touchablePoster>
                        <Thumbnail source={require('./../../assets/images/2.jpg')} />
                    </Left>

                    <Right>
                        <Title numberOfLines={1}>DJ Tiesto</Title>
                        <Subtitle>Hudobník - skupina</Subtitle>
                    </Right>
                </Touchable>


                <View separator />


                <Touchable itemImageText>
                    <Left touchablePoster>
                        <Thumbnail source={{ uri:"https://cdn-az.allevents.in/banners/014ce0d4f8854965b529fa96d827b49f" }} />
                    </Left>

                    <Right>
                        <Title>Rytmus</Title>
                        <Subtitle>This is subtitle</Subtitle>
                    </Right>
                </Touchable>


                <View separator />


                <Touchable itemImageText>
                    <Left touchablePoster>
                        <Thumbnail source={{ uri:"https://cdn-az.allevents.in/banners/b942596e74587cb9629b904ef70477df" }} />
                    </Left>

                    <Right>
                        <Title>Bruno Mars</Title>
                        <Subtitle>Mars subtitle</Subtitle>
                    </Right>
                </Touchable>

            </Content>
        
        );

    }

}