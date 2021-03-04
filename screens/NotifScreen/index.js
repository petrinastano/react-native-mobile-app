import React, { Component } from 'react';
import {
  View, 
  Text } from './../../components';

// Styles
const styles = {

    screen:{
        marginTop:50,
        marginLeft:30
    }

};


export default class NotifScreen extends Component {

    render() {
        
        return (
          
            <View style={ styles.screen }>
                <Text>NotifScreen</Text>
            </View>
        
        );

    }
    
}