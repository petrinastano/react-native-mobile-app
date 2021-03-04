import React, { Component } from 'react';

// Components
import { 
    Content,
    Title,
    Text,
    Left,
    Right,
    Section,
    Touchable,
    Thumbnail,
    View,
} 
from './../../components';


export default class MyEventsScreenFollowing extends Component {

    render() {
        
        return (
          
            <Content separator>

                <Touchable itemImageText>
                    <Left touchablePic>
                        <Thumbnail source={ require("./../../assets/images/4.jpg") } />
                    </Left>

                    <Right>
                        <Title>Some item</Title>
                    </Right>
                </Touchable>

                
                <View separator />
                

                <Touchable itemImageText>
                    <Left touchablePic>
                        <Thumbnail source={ require("./../../assets/images/1.jpg") } />
                    </Left>

                    <Right>
                        <Title>Next item</Title>
                    </Right>
                </Touchable>

                
                <View separator />
                

                <Touchable itemImageText>
                    <Left touchablePic>
                        <Thumbnail source={ require("./../../assets/images/3.jpg") } />
                    </Left>

                    <Right>
                        <Title>Next item</Title>
                    </Right>
                </Touchable>

            </Content>
        
        );

    }

}