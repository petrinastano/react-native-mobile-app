
export default (variables) => {
    const { platform, platformVersion, statusBarHeight } = variables;

    // StatusBar background for iOS + Android SDK < 21
    const statusBarStyle = {

        height:statusBarHeight,
        position:"absolute",
        zIndex:2,
        top:0,
        left:0,
        right:0,
        backgroundColor:"#292929",

    };

    const barStyle = platform === "ios" || platformVersion < 21 ? statusBarStyle : { display:"none" };
    

    const viewTheme = {

        // StatusBar background for iOS + Android SDK < 21
        ".statusBarStyle": {

            ...barStyle,

        },

        // Background colors

        ".bgColorWhite": {

            backgroundColor: "white"

        },

        ".bgColorLight": {

            backgroundColor: "#F1F1F1"

        }

  };

  return viewTheme;
};
