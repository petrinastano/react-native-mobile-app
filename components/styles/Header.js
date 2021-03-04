import { Platform } from 'react-native'

export default (variables) => {
  const platform = variables.platform;
  const platformVersion = variables.platformVersion;

  const toolbarHeight = platform === "ios" ? 75 : 60;
  const toolbarHeightFix = 90; //androids below API 21

  const headerTheme = {

    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: platform === "ios" || platform === "android" && platformVersion < 21 ? 20:0,
    height: platform === "android" && platformVersion < 21 ? toolbarHeightFix : toolbarHeight,
    backgroundColor: variables.darkColor,

    ".transparent": {

        backgroundColor: "transparent"

    },
    
    //-------------------------------------------------------------------------------------------------
    // .hasSubtitle

    ".hasSubtitle": {

      "NativeBase.Body": {

        alignItems: "center",
        alignSelf: "center",

        "NativeBase.Title": {
          marginBottom: 3,
          fontSize: platform === "ios" ? 15 : 16,
          textAlign: "center",
          fontWeight: "600",
          color:"white",
        },

        "NativeBase.Subtitle": {
          fontSize: 13,
          textAlign: "center",
          color: "rgba(255,255,255,0.6)",
        }

      }

    },

    //-------------------------------------------------------------------------------------------------
    // .hasTitle

    ".hasTitle": {

      "NativeBase.Left": {
          flex:0.2,
      },

      ...Platform.select({

        android: {

          "NativeBase.Body": {

            "NativeBase.Title": {
                marginTop:-4,
            }

          }

        },

      }),

    },

    //-------------------------------------------------------------------------------------------------
    // .searchBar

    ".searchBar": {
     
      "NativeBase.Left": {
          flex:0.2
      },

      "NativeBase.Body": {
          flexDirection:"row",

          "NativeBase.Input": {
              paddingLeft:5,
              fontSize:16,
              fontWeight:"bold",
              color:"white"
          },

          //Android fix :)
          "NativeBase.Button": {
              alignSelf:"center"
          },
      }

    },


    //-------------------------------------------------------------------------------------------------
    // Left

    "NativeBase.Left": {

      alignItems: "flex-start",

      "NativeBase.Button": {
        paddingHorizontal: 6
      },

    },


    "NativeBase.Right": {

      alignItems: "flex-end",

      "NativeBase.Button": {
        paddingHorizontal: 6
      },

    },
    
  };

  return headerTheme;
};
