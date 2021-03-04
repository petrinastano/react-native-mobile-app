
import React, { Component } from "react";
import { View, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "native-base/src/Utils/mapPropsToStyleNames";

class Section extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Section.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object
};

const StyledSection = connectStyle(
  "NativeBase.Section",
  {},
  mapPropsToStyleNames
)(Section);
export { StyledSection as Section };
