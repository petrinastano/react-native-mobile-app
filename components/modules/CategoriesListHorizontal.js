import React, { Component } from 'react';

// ReactNative components
import { FlatList } from 'react-native';

// NativeBase components
import {
    Module,
    Button,
    View,
    Text,
} 
from './../';


 export default class ModuleCategoriesListHorizontal extends Component {

  //Edges of content
  renderContentSeparator() {

    return( <View mrx4 /> );

  }

  //Space between items
  renderItemSeparator() {

    return( <View mrx10 /> );

  }
    

  
  renderItem( data ) {

    return(
          <View mhx4>
              <Button categoryButton onPress={() => this.props.navigate(this.props.screen)}>
                  <Text>{data.text}</Text>
              </Button>
          </View>
    );

  };


  render() {

    return (

        <Module categoriesListHorizontal>
            <FlatList
                style={{ paddingVertical:19, paddingTop:8 }}
                data={this.props.items}
                keyExtractor={items => items.text}
                renderItem={items => this.renderItem(items.item)}
                ListHeaderComponent={this.renderContentSeparator}
                ListFooterComponent={this.renderContentSeparator}
                horizontal 
                showsHorizontalScrollIndicator={false}
            />
        </Module>

    );

  }
}
