import React, { Component } from 'react';

// Components
import { 
    Content,
    Section,
    Touchable,
    View,
    Left,
    Right,
    Title,
    Subtitle,
    Text,
    Thumbnail,
    Image,
} 
from './../../components';


export default class MyEventsScreenUpcoming extends Component {

    render() {
        
        return (
          
            <Content separator>

                <Section boxSection>
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

                    <View mbx6 />


                    <Touchable itemImageText>
                        <Left touchablePoster>
                            <Thumbnail source={{ uri:"https://cdn-az.allevents.in/banners/ec0bec67fa2f01226bb30b8b8c358269" }} />
                        </Left>

                        <Right>
                            <Title fsx2 fontWeightMedium>Great event</Title>
                            <View mbx1 />
                            <Subtitle>16 Jan, Mon • Belgium lorem ipsum</Subtitle>
                        </Right>
                    </Touchable>
                </Section>

            </Content>
        
        );

    }

}