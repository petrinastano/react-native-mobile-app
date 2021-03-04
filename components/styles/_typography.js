import { Platform } from 'react-native';

/*

Generate range of sizes from "min" to "max" sizes:

//--------------------------
.fsx(n)

*/

function getFontSizes(variables) {

    // .fsx(1,2...n) => fontSize: 13, 14...n
    const { fontMinSize, fontMaxSize } = variables;

    // difference between "minSize" - "maxSize"
    const diff = fontMaxSize - fontMinSize;

    // savepoint :) for generated styles
    let styles = {};

    // get value for fontSize
    let sizeVal;

    for(let size = 0; size < diff; size++){

      // increment if is not a "minSize" value
      sizeVal = fontMinSize + size;

      styles[`.fsx${size+1}`] = { fontSize: sizeVal };

    }

    return styles;

}

export default (variables) => {

  const platform = variables.platform;

  const typography = {

    ...getFontSizes(variables),

	  // ------------------------------------
	  // Font weights

    ".fontWeightBolder": {
        fontFamily: platform === "ios" ? "System" : "Roboto-Black",
        ...Platform.select({
            ios: {
              fontWeight:"800"
            }
        }),
    },

	  ".fontWeightBold": {
	      fontWeight:"bold"
	  },

	  ".fontWeightMedium": {

  	    ...Platform.select({
    	      ios:{
    	        fontWeight:"500"
    	      },

    	      android:{
    	        fontFamily:"Roboto_medium"
    	      }
  	    }),

	  },

  };

  return typography;
};
