import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "native-base/src/Utils/mapPropsToStyleNames";

import variables from './styles/_variables';

class Touchable extends Component {
  render() {

      return (

          <TouchableOpacity
              ref={c => (this._root = c)}
              {...this.props}
              activeOpacity={this.props.opacity ? this.props.opacity : variables.touchableOpacity}
          >
              {this.props.children}
          </TouchableOpacity>

      );

  }
}

Touchable.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  opacity: React.PropTypes.number,
};

const StyledTouchable = connectStyle(
  "NativeBase.Touchable",
  {},
  mapPropsToStyleNames
)(Touchable);

export { StyledTouchable as Touchable };
