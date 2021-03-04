import { Platform } from 'react-native';

export default (variables) => {
  const platform = variables.platform;

  const moduleTheme = {

    ".categoriesListHorizontal": {

        backgroundColor:variables.darkColor,

        "NativeBase.ViewNB": {

            "NativeBase.Button": {

                ".categoryButton": {

                    paddingHorizontal:25,
                    paddingVertical:6,
                    backgroundColor:"rgba(255,255,255,0.15)",
                    borderRadius:20,

                    "NativeBase.Text": {

                        fontFamily: variables.fontFamilyMedium,
                        fontSize: platform === "ios" ? 12.5 : 14,
                        fontWeight: platform === "ios" ? "700" : "normal",
                        color: "rgba(255,255,255,0.8)"

                    },     

                },

                ".categoryButtonActive": {

                    paddingHorizontal:25,
                    paddingVertical:6,
                    backgroundColor:"rgba(255,255,255,0.25)",
                    borderRadius:20,

                    "NativeBase.Text": {

                        fontFamily: variables.fontFamilyMedium,
                        fontSize: platform === "ios" ? 13.6 : 14,
                        fontWeight: platform === "ios" ? "600" : "normal",
                        color: "white"

                    },     

                },

            },

        }

    },

  };

  return moduleTheme;
};