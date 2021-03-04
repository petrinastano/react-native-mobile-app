
export default (variables) => {
  const platform = variables.platform;

  const buttonTheme = {

    // ------------------------------------
    // Default options
    
    alignItems: "center",
    justifyContent: "center",

    "NativeBase.Text": {
        fontSize:14,
    },
    

    ".item": {

        alignItems:"flex-start",
        padding:16

    },

  };

  return buttonTheme;
};
