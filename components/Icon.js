import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './../assets/fonts/selection.json';

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "native-base/src/Utils/mapPropsToStyleNames";

const createIconComponent = createIconSetFromIcoMoon(icoMoonConfig, 'eventlist');

/*
createIconComponent.propTypes = {
  style: React.PropTypes.object
};
*/

const Icon = connectStyle( "NativeBase.Icon", {}, mapPropsToStyleNames )( createIconComponent );

export default Icon;
