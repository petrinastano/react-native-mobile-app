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
	ModuleCategoriesListHorizontal,
	ModuleHeaderScroll,
} from './../../components/modules';


// Fake Data
import { 
	subdata,
	nextcategories,
} from './../../assets/fakeData';



export default class CategoryScreen extends Component {

  	render() {

  		const navigate = this.props.navigation.navigate;
        
        return (

        	<Container>

		     	<Header hasSubtitle>
					<Left>
						<Button onPress={() => this.props.navigation.goBack()}>
							<Icon name="back" />
						</Button>
					</Left>

					<Body>
						<Title>Music</Title>
						<Subtitle>Near by Topoľčany</Subtitle>
					</Body>

					<Right>
						<Button>
						    <Icon name="location" colorActive />
						</Button>
					</Right>
		      	</Header>

		      	<ModuleCategoriesListHorizontal
		      		navigate={ navigate }
		      		screen={"SubcategoryScreen"}
		            items={ nextcategories } 
		      	/>


				<View pbx5 bgColorWhite>

	                <ModuleEventListVertical
	                	navigate={ navigate }
	                	items={ subdata } />

            	</View>

        	</Container>
        
        );

    }

}