
import React, { Component } from "react";
import { View, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "native-base/src/Utils/mapPropsToStyleNames";

class Module extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Module.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object
};

const StyledModule = connectStyle(
  "NativeBase.Module",
  {},
  mapPropsToStyleNames
)(Module);
export { StyledModule as Module };
