
export default (variables) => {

  const footerTabTheme = {
    "NativeBase.Button": {

      ".active": {
          "NativeBase.Icon": {
            color: variables.brandPrimary,
          },

          "NativeBase.Text": {
            color: variables.brandPrimary,
            fontWeight:"600"
          }
      },

      "NativeBase.Text": {
          color: "#C4C4C4",
          fontSize: 10.5,
          lineHeight: 16
      },

      flex:1,
      justifyContent: "center",
      
    },

    flexDirection: "row",
    backgroundColor: variables.darkColor,
    height: 60,
  };

  return footerTabTheme;
};
