import { Platform, StyleSheet } from 'react-native';

// View
import viewTheme from "./View";

// Header
import headerTheme from "./Header";

// Section
import sectionTheme from "./Section";

// Modules
import moduleTheme from "./../modules/styles";

// Touchable
import touchableTheme from "./Touchable";

// Button
import buttonTheme from "./Button";

// FooterTab
import footerTabTheme from "./FooterTab";

// TabContainer
import tabsTheme from "./Tabs";

// Thumbnail
import thumbnailTheme from "./Thumbnail";

//-------------------------------------------------
// Global styles

// _grid
import grid from "./_grid";

// _typography
import typography from "./_typography";

// _separator
import separator from "./_separator";

// _colors
import colors from "./_colors";


export default (variables) => {

  const gridStyles = grid(variables);
  const fontStyles = typography(variables);
  const separatorStyles = separator(variables);
  const colorsStyles = colors(variables); 


  const theme = {

    variables,

    //-------------------------------------------------------------------------------------------------
    // Text

    "NativeBase.Text": {
      fontSize: 14,
      fontFamily: variables.fontFamily,
      color: "#000",

      ".paragraph": {
          lineHeight: variables.platform === "ios" ? 22 : 25
      },

      ...fontStyles,
      ...colorsStyles,
    },


    //-------------------------------------------------------------------------------------------------
    // Icon

    "NativeBase.Icon": {
      fontSize:30,
      color: variables.lightColor,

      ...colorsStyles,
    },


    //-------------------------------------------------------------------------------------------------
    // Title

    "NativeBase.Title": {
      fontSize: 16,

      ...fontStyles,
      ...colorsStyles,
    },



    //-------------------------------------------------------------------------------------------------
    // Subtitle
    
    "NativeBase.Subtitle": {
      fontSize: 14,
      color: "rgba(0,0,0,0.6)",

      ...fontStyles,
    },



    //-------------------------------------------------------------------------------------------------
    // Input

    "NativeBase.Input": {
      flex: 1,
    },



    //-------------------------------------------------------------------------------------------------
    // Image

    "NativeBase.Image": {
      width:null
    },



    //-------------------------------------------------------------------------------------------------
    // Container

    "NativeBase.Container": {
      flex: 1,
      height: variables.platform === "ios" ? variables.deviceHeight : variables.deviceHeight - 20
    },



    //-------------------------------------------------------------------------------------------------
    // Content

    "NativeBase.Content": {
      flex: 1,
    },



    //-------------------------------------------------------------------------------------------------
    // View

     "NativeBase.ViewNB": {
        ...gridStyles,

        ...separatorStyles,

        ...viewTheme(variables)
     },
    

    //-------------------------------------------------------------------------------------------------
    // Left

    "NativeBase.Left": {
      flex: 1,
    },



    //-------------------------------------------------------------------------------------------------
    // Right

    "NativeBase.Right": {
      flex: 1,
    },



    //-------------------------------------------------------------------------------------------------
    // Body

    "NativeBase.Body": {
      flex: 1,
    },


    //-------------------------------------------------------------------------------------------------
    // Tabs

    "NativeBase.TabContainer": {
      ...tabsTheme(variables),
    },



    "NativeBase.Tab": {
      flex: 1,
    },



    //-------------------------------------------------------------------------------------------------
    // Spinner

    "NativeBase.Spinner": {
      height: 80
    },


    //----------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------------------------
    // Header

    "NativeBase.Header": {
      ...headerTheme(variables),
    },



    //-------------------------------------------------------------------------------------------------
    // Section

    "NativeBase.Section": {
      ...sectionTheme(variables),

      flex:1
    },



    //-------------------------------------------------------------------------------------------------
    // Module

    "NativeBase.Module": {
      ...moduleTheme(variables),
    },



    //-------------------------------------------------------------------------------------------------
    // Touchable

    "NativeBase.Touchable": {
      ...touchableTheme(variables),
    },



    //-------------------------------------------------------------------------------------------------
    // Button
      
    "NativeBase.Button": {
      ...buttonTheme(variables)
    },



    //-------------------------------------------------------------------------------------------------
    // FooterTab

    "NativeBase.FooterTab": {
      ...footerTabTheme(variables)
    },



    //-------------------------------------------------------------------------------------------------
    // Thumbnail

    "NativeBase.Thumbnail": {
      ...thumbnailTheme(variables)
    }
  };


  return theme;
};
