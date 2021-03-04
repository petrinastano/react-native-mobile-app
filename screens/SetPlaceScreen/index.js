import React, { Component } from 'react';
import {
    Container, 
    Content,
    Header,
    Left,
    Right,
    Input,
    Button,
    Icon,
    Text }
from './../../components';

import variables from './../../components/styles/_variables';


export default class SearchScreenPlaces extends Component {

    render() {
        
        return (
          
            <Container>
                <Header searchBar>
                    <Left>
                        <Button onPress={() => this.props.navigation.navigate("HomeScreen")}>
                            <Icon name="back" lightColor />
                        </Button>
                    </Left>

                      <Right>
                        <Input header 
                               placeholder="Search..." 
                               placeholderTextColor="#B8B8B8"
                               selectionColor="#FF0058" />

                        <Button>
                            <Icon name="reset" lightColor />
                        </Button>
                      </Right>
                </Header>

                <Content>
                    <Button item style={{ marginTop:15 }}>
                        <Text>Bratislava</Text>
                    </Button>

                    <Button item>
                        <Text>Banská Bystrica</Text>
                    </Button>

                    <Button item>
                        <Text>Bánovce nad Bebravou</Text>
                    </Button>
                </Content>
            </Container>
        
        );

    }
    
}