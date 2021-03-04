import React, { Component } from "react";

//React navigation
import {
  StackNavigator, 
  TabNavigator
} from "react-navigation";

//Components
import { 
  Text,
  Icon,
  Button,
  FooterTab
} from './../../components';

//----------------------------------------------------------------
// Screens

// FooterTab screens
import HomeScreen from './HomeScreen';
import SearchScreen from '../SearchScreen';
import MyEventsScreen from '../MyEventsScreen';
import NotifScreen from '../NotifScreen';

// Stack - screens
import EventScreen from '../EventScreen';
import NextEvent from '../EventScreen/nextevent';
import CategoryScreen from '../CategoryScreen';
import SubcategoryScreen from '../CategoryScreen/SubcategoryScreen';


const FooterTabNavigator = TabNavigator(
  {
      HomeScreen:     { screen: HomeScreen },
      SearchScreen:   { screen: SearchScreen },
      MyEventsScreen: { screen: MyEventsScreen },
      NotifScreen:    { screen: NotifScreen },
  },

  {
      lazy:true,
      swipeEnabled:false,
      tabBarPosition: "bottom",
      tabBarComponent: (props) => {

          return (

              <FooterTab>
                  <Button
                      active={props.navigationState.index === 0}
                      onPress={() => props.navigation.navigate("HomeScreen")}>

                      <Icon name="browse" />

                      <Text>Browse</Text>
                  </Button>


                    <Button
                        active={props.navigationState.index === 1}
                        onPress={() => props.navigation.navigate("SearchScreen")}>

                        <Icon name="search" />

                        <Text>Search</Text>
                    </Button>


                    <Button
                        active={props.navigationState.index === 2}
                        onPress={() => props.navigation.navigate("MyEventsScreen")}>

                        <Icon name="star" />

                        <Text>My events</Text>
                    </Button>


                    <Button
                        active={props.navigationState.index === 3}
                        onPress={() => props.navigation.navigate("NotifScreen")}>

                        <Icon name="notif" />

                        <Text>Notificat</Text>
                    </Button>
                </FooterTab>
            
          );
      }
  }
);

// StackNavigator for Header

const HomeScreenRouter = StackNavigator(
    {
        Root:              { screen: FooterTabNavigator },
        EventScreen:       { screen: EventScreen },
        NextEvent:         { screen: NextEvent },
        CategoryScreen:    { screen: CategoryScreen },
        SubcategoryScreen: { screen: SubcategoryScreen },
    },

    {
        headerMode:"none"
    }
);

export default HomeScreenRouter;
