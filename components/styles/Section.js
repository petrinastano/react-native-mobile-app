import { Platform } from 'react-native';

export default (variables) => {
  const platform = variables.platform;

  const sectionTheme = {

    //-------------------------------------------------------------------------------------------------
    // .options

    ".boxSection": {

        padding:variables.separator,
        backgroundColor:"white",

    },


    //-------------------------------------------------------------------------------------------------
    // .header

    "NativeBase.ViewNB": {

        ".headerSection": {

            flexDirection:"row",

            "NativeBase.Title":{

                flex:1,

            }

        }

    },
    
    
  };

  return sectionTheme;
};
