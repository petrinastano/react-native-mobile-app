//import color from "color";

import { Platform, Dimensions, StatusBar } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformVersion = Platform.Version;
const statusBarHeight = platform === "ios" ? 20 : StatusBar.currentHeight;


export default {

  /*

  * ------------------------------------------------------------------------

  * Options

  * ------------------------------------------------------------------------

  */

  /*

  * <Touchable> component options

  */

  touchableOpacityButton:0.5,
  touchableOpacity:0.8,

  /*

  * file => "_grid.js"
  * generate /.colx(n)/ sizes
  * (n) - size level of column

  */

  gridBaseSize:0.1,
  gridSizes:10,

  /*

  * file => "_typography.js"
  * generate /.fsx(n)/ range of sizes from "min" to "max" sizes
  * (n) - size level of font

  */

  fontMinSize:13,
  fontMaxSize:30,

  /*

  * file => "_separator.js"
  * generate /.m(s)x(n); .p(s)x(n) - (.mtx1; ptx1)/
  * (s) - top, left, bottom, right
  * (n) - size level of separator

  */

  separatorBaseSize:2,
  separatorSizes:10,

  /*

  * iOS status bar color

  */

  iosStatusbar: "light-content",

  separator:16,

  //-------------------------------------------------------------------------------------------------
  // Colors

  brandPrimary: "#FF0058",
  darkColor: "#292929",
  lightColor: "#C4C4C4",


  //-------------------------------------------------------------------------------------------------
  // Font

  fontFamily: platform === "ios" ? "System" : "Roboto",
  fontFamilyMedium : platform === "ios" ? "System" : "Roboto_medium",

  //-------------------------------------------------------------------------------------------------
  // Spinner

  // ---------------

  //-------------------------------------------------------------------------------------------------
  // Variables

  platform,
  platformVersion,
  deviceWidth,
  deviceHeight,
  statusBarHeight,
};
