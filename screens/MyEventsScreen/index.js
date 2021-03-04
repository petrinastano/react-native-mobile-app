import React, { Component } from "react";
import { TabNavigator } from "react-navigation";

//----------------------------------------------------------------
// Screens

import MyEventsScreenEvents from './MyEventsScreenEvents';
import MyEventsScreenUpcoming from './MyEventsScreenUpcoming';
import MyEventsScreenFollowing from './MyEventsScreenFollowing';


/*
import {
  MyEventsScreenEvents,
  MyEventsScreenUpcoming,
  MyEventsScreenFollowing,
} from './../routes';
*/


import {
  View,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  Text,
  Tab,
  TabContainer,
} from './../../components';


export default (MyEventsScreenTabRouter = TabNavigator(
  {
      MyEventsScreenEvents:    { screen: MyEventsScreenEvents },
      MyEventsScreenUpcoming:  { screen: MyEventsScreenUpcoming },
      MyEventsScreenFollowing: { screen: MyEventsScreenFollowing }
  },

  {
      lazy:true,
      swipeEnabled:false,
      tabBarPosition: "top",
      tabBarComponent: (props) => {

          return (

            <View>
                  <Header hasSubtitle>
                      <Left>
                          <Button onPress={() => props.navigation.goBack()}>
                              <Icon name="back" />
                          </Button>
                      </Left>

                      <Body>
                          <Title>My events</Title>
                      </Body>

                      <Right />
                  </Header>


                  <TabContainer tabText>
                      <Tab>
                          <Button
                              active={props.navigationState.index === 0}
                              onPress={() => props.navigation.navigate("MyEventsScreenEvents")}
                          >

                              <Text uppercase={true}>
                                  Events
                              </Text>
                          </Button>
                      </Tab>

                      <Tab>
                          <Button
                              active={props.navigationState.index === 1}
                              onPress={() => props.navigation.navigate("MyEventsScreenUpcoming")}
                          >

                              <Text uppercase={true}>
                                  Upcoming
                              </Text>
                          </Button>
                      </Tab>

                      <Tab>
                          <Button
                              active={props.navigationState.index === 2}
                              onPress={() => props.navigation.navigate("MyEventsScreenFollowing")}
                          >

                              <Text uppercase={true}>
                                  Following
                              </Text>
                          </Button>
                      </Tab>
                  </TabContainer>
              </View>
            
          );

      }
  }
));

