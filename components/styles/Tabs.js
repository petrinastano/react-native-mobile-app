
export default (variables) => {
  const tabsTheme = {
    
    flexDirection:"row",
    backgroundColor:"white",

    // ------------------------------------
    // Global styles

    "NativeBase.Tab": {

      "NativeBase.Button": {

          ".active": {
              "NativeBase.Icon": {
                  color: variables.brandPrimary,
              },

              "NativeBase.Text": {
                  color: variables.brandPrimary,
                  //fontWeight: "bold"
              }
          },

      }

    },
    

    // ------------------------------------
    // Tab + Icon + Text

    ".tabIconText": {

        "NativeBase.Tab": {

            "NativeBase.Button": {

                paddingVertical:20,

                "NativeBase.Icon": {
                    fontSize:26,
                    marginBottom:2,
                    color:"rgba(0,0,0,0.6)"
                },

                "NativeBase.Text": {
                    //fontFamily: variables.fontFamilyMedium,
                    alignSelf: "center",
                    color: "rgba(0,0,0,0.6)",
                    fontSize: 12,
                },

            }

        }

    },


    // ------------------------------------
    // Tab + Text

    ".tabText": {

        borderBottomWidth:1,
        borderColor:"rgba(0,0,0,0.05)",

        "NativeBase.Tab": {

            "NativeBase.Button":{

                paddingVertical: 20,

                "NativeBase.Text": {
                  //fontFamily: variables.fontFamilyMedium,
                  alignSelf: "center",
                  color: "rgba(0,0,0,0.53)",
                  fontSize: 11.5,
                  fontWeight:"bold",
                },

            },

        }

    }

  };
  return tabsTheme;
};
