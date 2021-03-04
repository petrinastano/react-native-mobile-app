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
    View,
    Section
} 
from './../../components';


export default class SearchScreenPlaces extends Component {

    render() {
        
        return (
          
            <Content separator>

                <Section boxSection>
                    <Touchable itemImageText>
                        <Left touchablePoster>
                            <Thumbnail source={{ uri:"https://cdn-az.allevents.in/banners/9370cab513f4bc3ddf60d1aee8d1fe10" }} />
                        </Left>

                        <Right>
                            <Title fsx2 fontWeightMedium>Ministry of Fun</Title>
                            <View mbx1 />
                            <Subtitle>Banská Bystrica a presna adresa</Subtitle>
                        </Right>
                    </Touchable>


                    <View mbx6 />


                    <Touchable itemImageText>
                        <Left touchablePoster>
                            <Thumbnail source={{ uri:"https://cdn-az.allevents.in/banners/c4a9fd3103641f4a4e347949426db891" }} />
                        </Left>

                        <Right>
                            <Title fsx2 fontWeightMedium>Barracuda Club</Title>
                            <View mbx1 />
                            <Subtitle>Niekde v Nitre</Subtitle>
                        </Right>
                    </Touchable>

                    <View mbx6 />


                    <Touchable itemImageText>
                        <Left touchablePoster>
                            <Thumbnail source={{ uri:"https://cdn-az.allevents.in/banners/ab251f9bc2ba177fd3ea764dac3af3f3" }} />
                        </Left>

                        <Right>
                            <Title fsx2 fontWeightMedium>Great Club Bratislava</Title>
                            <View mbx1 />
                            <Subtitle>Bratislava, hlavné mesto</Subtitle>
                        </Right>
                    </Touchable>
                </Section>

            </Content>
        
        );

    }

}