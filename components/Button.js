
import React, { Component } from "react";

import { TouchableOpacity } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "native-base/src/Utils/mapPropsToStyleNames";

import variables from "./styles/_variables";

class Button extends Component {
 
  render() {
    
      return (

          <TouchableOpacity
              ref={c => (this._root = c)}
              {...this.props}
              activeOpacity={variables.touchableOpacityButton}
          >

              {this.props.children}

          </TouchableOpacity>

      );

  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  active: React.PropTypes.bool
};

const StyledButton = connectStyle(
  "NativeBase.Button",
  {},
  mapPropsToStyleNames
)(Button);
export { StyledButton as Button };
