import React, { Component } from "react";
import { Image } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "native-base/src/Utils/mapPropsToStyleNames";

class Img extends Component {
  render() {
    return <Image ref={c => (this._root = c)} {...this.props} />;
  }
}

Img.propTypes = {
  ...Image.propTypes,
  style: React.PropTypes.object
};

const StyledImg = connectStyle(
  "NativeBase.Image",
  {},
  mapPropsToStyleNames
)(Img);

export { StyledImg as Image };
