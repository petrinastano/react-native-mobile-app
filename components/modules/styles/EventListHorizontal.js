import { Platform } from 'react-native';

export default (variables) => {
  const platform = variables.platform;

  const moduleTheme = {

    ".eventListHorizontal": {

        "NativeBase.ViewNB": {

            //------------------------------
            // .listCard

            ".card": {

                width: 215,

                "NativeBase.Touchable": {

                    "NativeBase.ViewNB": {

                        ".date": {
                            width:52,
                            height:50,
                            position:"absolute",
                            zIndex:1,
                            bottom:9,
                            left:9,
                            justifyContent:"center",
                            backgroundColor:"rgba(255,255,255,0.92)",
                            borderRadius:6,

                            "NativeBase.Text":{

                                alignSelf:"center",

                                ".day": { 
                                    fontSize:18,
                                    marginTop:-1,
                                    lineHeight:20
                                },

                                ".month": { 
                                    fontSize:11,
                                    color:variables.brandPrimary 
                                }

                            }
                        },

                    },

                    ".imagePoster": {

                        "NativeBase.Image": {
                            height:"100%",
                            height:145,
                            borderRadius:6
                        },

                    }

                }       

            }


        },

    },

  };

  return moduleTheme;
};
