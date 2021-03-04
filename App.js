import Expo from 'expo';
import React from 'react';
import HomeScreen from "./screens/index";
import { StyleProvider } from './components';
import getTheme from './components/styles';
import variables from './components/styles/_variables';

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            isReady: false
        };
    }


    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
          'eventlist': require('./assets/fonts/eventlist.ttf'),
        });

        this.setState({
            isReady: true
        });
    }


    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (
          
          <StyleProvider style={getTheme(variables)}>

              <HomeScreen />

          </StyleProvider>
        
        );
    }
}
