import React, { Component } from "react";
import { TabNavigator } from "react-navigation";

//----------------------------------------------------------------
// Screens


import SearchScreenEvents from './SearchScreenEvents';
import SearchScreenOrganizers from './SearchScreenOrganizers';
import SearchScreenPlaces from './SearchScreenPlaces';


import {
  Container,
  View,
  Header,
  Left,
  Body,
  Input,
  Button,
  Icon,
  Text,
  Tab,
  TabContainer,
} from './../../components';


export default (SearchScreenTabRouter = TabNavigator(
  {
      SearchScreenEvents:     { screen: SearchScreenEvents },
      SearchScreenOrganizers: { screen: SearchScreenOrganizers },
      SearchScreenPlaces:     { screen: SearchScreenPlaces }
  },

  {
      lazy:true,
      swipeEnabled:false,
      tabBarPosition: "top",
      tabBarComponent: (props) => {

          return (

            <View>
                 <Header searchBar>
                        <Left>
                            <Button onPress={() => props.navigation.goBack()}>
                                <Icon name="back" />
                            </Button>
                        </Left>

                        <Body>
                            <Input header 
                                   placeholder="Search..." 
                                   placeholderTextColor="#B8B8B8"
                                   selectionColor="#FF0058" />

                            <Button>
                                <Icon name="reset" />
                            </Button>
                        </Body>
                  </Header>


                  <TabContainer tabText>
                      <Tab>
                          <Button
                              active={props.navigationState.index === 0}
                              onPress={() => props.navigation.navigate("SearchScreenEvents")}
                          >
                              <Text>EVENTS</Text>
                          </Button>
                      </Tab>

                      <Tab>
                          <Button
                              active={props.navigationState.index === 1}
                              onPress={() => props.navigation.navigate("SearchScreenOrganizers")}
                          >
                              <Text>ORGANIZERS</Text>
                          </Button>
                      </Tab>

                      <Tab>
                          <Button
                              active={props.navigationState.index === 2}
                              onPress={() => props.navigation.navigate("SearchScreenPlaces")}
                          >
                              <Text>PLACES</Text>
                          </Button>
                      </Tab>
                  </TabContainer>
              </View>
            
          );

      }
  }
));

