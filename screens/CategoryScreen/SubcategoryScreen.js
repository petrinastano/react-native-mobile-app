import React, { Component } from 'react';

// Components
import {
    Container, 
    Header, 
    Left, 
    Right, 
    Body, 
    Button, 
    Icon,
    Text, 
    Title, 
    Subtitle,
    View,
} from './../../components';


// Modules
import { 
	ModuleEventListVertical,
	ModuleHeaderScroll,
} from './../../components/modules';


// Fake Data
import { 
	events,
} from './../../assets/fakeData';



export default class SubcategoryScreen extends Component {

  	render() {
        
        return (

        	<Container>

        		<ModuleHeaderScroll>

                    <View>

				     	<Header hasSubtitle>
							<Left>
								<Button onPress={() => this.props.navigation.goBack()}>
									<Icon name="back" />
								</Button>
							</Left>

							<Body>
								<Title>Subcategory</Title>
								<Subtitle>Topoľčany</Subtitle>
							</Body>

							<Right>
								<Button>
								    <Icon name="location" colorActive />
								</Button>
							</Right>
				      	</Header>

  					</View>


                    <View pbx5 bgColorWhite>

                        <ModuleEventListVertical
                            items={ events } />

                    </View>

                </ModuleHeaderScroll>

        	</Container>
        
        );

    }

}