import { StyleSheet } from 'react-native';

/*

Margin:

//--------------------------------------------------------
.mtx(n), .mrx(n), .mbx(n), .mlx(n)

Padding:

//--------------------------------------------------------
.ptx(n), .prx(n), .pbx(n), .plx(n)

*/

// Generate (Margin, Padding) indents
function getSeparator(variables) {

    // separatorBaseSize * separatorSizes(1, 2, ... n)
    const { separatorBaseSize, separatorSizes } = variables;

    // savepoint :) for generated styles
    let styles = {};

    // get values for styles
    let sizeVal;

    for(let size = 1; size <= separatorSizes; size++){

        sizeVal = size * separatorBaseSize;

        // Generate class names

        // Top
        styles[`.mtx${size}`] = { marginTop: sizeVal };
        styles[`.ptx${size}`] = { paddingTop: sizeVal };

        // Bottom
        styles[`.mbx${size}`] = { marginBottom: sizeVal };
        styles[`.pbx${size}`] = { paddingBottom: sizeVal };

        // Left
        styles[`.mlx${size}`] = { marginLeft: sizeVal };
        styles[`.plx${size}`] = { paddingLeft: sizeVal };

        // Right
        styles[`.mrx${size}`] = { marginRight: sizeVal };
        styles[`.prx${size}`] = { paddingRight: sizeVal };

        // Horizontal
        styles[`.mhx${size}`] = { marginHorizontal: sizeVal };
        styles[`.phx${size}`] = { paddingHorizontal: sizeVal };

        // Vertical
        styles[`.mvx${size}`] = { marginVertical: sizeVal };
        styles[`.pvx${size}`] = { paddingVertical: sizeVal };

        // All
        styles[`.mx${size}`] = { margin: sizeVal };
        styles[`.px${size}`] = { padding: sizeVal };


    }

    return styles;

};


export default (variables) => {

    const separator = {
        
        ...getSeparator(variables),

        ".lineSeparator": {
            borderColor:"rgba(0,0,0,0.05)",
            borderBottomWidth:StyleSheet.hairlineWidth,
            //backgroundColor:"rgba(0,0,0,0.03)"
        },

    };

    return separator;
};
