/*

Generate grid styles:

//--------------------------
.colx(n)

*/

function getGrid(variables) {

	// gridBaseSize * gridSizes(1, 2, ... x)
	const { gridBaseSize, gridSizes } = variables;

    // savepoint :) for generated styles
    let styles = {};

    // get values for styles
    let sizeVal;

    for(let size = 1; size <= gridSizes; size++){

        sizeVal = size * gridBaseSize;

        styles[`.colx${size}`] = { flex: sizeVal };

    }

    return styles;

}

export default (variables) => {

    const grid = {

    	...getGrid(variables),

    	".row": {

    		flexDirection: "row"

    	},

    	".centerHorizontal": {

    		alignItems: "center"

    	},

    	".centerVertical": {

    		justifyContent: "center"

    	},

        ".centerXY": {

            alignItems: "center",
            justifyContent: "center"

        }

    };

    return grid;
};