import { Platform } from 'react-native';

export default (variables) => {
  const platform = variables.platform;

  const moduleTheme = {

    ".eventListVerticalStyle": {

        "NativeBase.ViewNB": {

            //------------------------------
            // .listCard

            ".cardStyle": {

                "NativeBase.Touchable": {

                    "NativeBase.ViewNB": {

                        ".dateStyle": {
                            width:52,
                            height:50,
                            position:"absolute",
                            zIndex:1,
                            bottom:9,
                            left:9,
                            borderRadius:6,
                            backgroundColor:"rgba(255,255,255,0.92)",

                            "NativeBase.Text":{

                                ".dayStyle": { 
                                    fontSize:18,
                                    marginTop:-1,
                                    lineHeight:20
                                },

                                ".monthStyle": { 
                                    fontSize:11,
                                    color:variables.brandPrimary 
                                }

                            }

                        },

                    },

                    ".imageStyle": {

                        "NativeBase.Image": {
                            height:165,
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
