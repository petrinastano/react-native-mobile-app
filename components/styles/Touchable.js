
export default (variables) => {
  const platform = variables.platform;

  const touchableTheme = {

    // ------------------------------------
    // Default options
    
    flex:1,

    ".itemDateText": {

        flexDirection:"row",

        "NativeBase.Left": {

            flex:0,
            marginLeft:6,
            marginRight:21,
            justifyContent:"center",
            alignItems:"center",

            "NativeBase.Text": {

                ".day": { 
                    fontSize:27,
                    lineHeight:30
                },

                ".month": { 
                    color:variables.brandPrimary,
                    fontSize:14
                }

            }

        },

        "NativeBase.Right": {

            justifyContent: "center"

        }

    },

    ".itemImageText": {

          flexDirection:"row",

          // ------------------------------------
          // Styles

          "NativeBase.Left": {

                flex:0,

                // ------------------------------------
                // Item + poster thumbnail image

              ".touchablePoster": {

                  marginRight:12,

                  "NativeBase.Thumbnail": {

                      width:54,
                      height:52,
                      borderRadius:8

                  }

              },

                // ------------------------------------
                // Item + album thumbnail image

              ".touchableAlbum":{

                  marginRight:10,

                  "NativeBase.Thumbnail": {

                      width:50,
                      height:50,
                      borderRadius:0

                  }

              },

                // ------------------------------------
                // Item + profile pic. thumbnail image

              ".touchablePic":{

                  marginRight:15,

                  "NativeBase.Thumbnail": {

                      width:40,
                      height:40,
                      borderRadius:20

                  }

              },

          },

          "NativeBase.Right": {

              justifyContent:"center",

              "NativeBase.Subtitle": {

                  lineHeight:21,
                  fontSize:13

              }

          }

      }

  };

  return touchableTheme;
};
