import * as React from 'react'
import * as PropTypes from 'prop-types'

import { FeatureGroup } from 'react-leaflet'
import LeafletDrawControl, {
  DrawPropTypes,
  EditPropTypes,
  PositionPropType
} from './EditControl'

export default class EditControlFeatureGroup extends React.Component {
  static propTypes: {
    children?: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    onActivityStarted?: PropTypes.Requireable<(...args: any[]) => any>;
    onActivityStopped?: PropTypes.Requireable<(...args: any[]) => any>;
    onCreated?: PropTypes.Requireable<(...args: any[]) => any>;
    onEdited?: PropTypes.Requireable<(...args: any[]) => any>;
    onDeleted?: PropTypes.Requireable<(...args: any[]) => any>;
    controlProps?: {
      draw?: typeof DrawPropTypes;
      edit?: typeof EditPropTypes;
      position?: typeof PositionPropType;
    }
  };
  constructor();
  _createStoreRef(elem: any): (ref: any) => void;
  _onCreated(e: any): void;
  _onEdited(e: any): void;
  _onDeleted(e: any): void;
  _onActivityStarted(e: any): void;
  _onActivityStopped(e: any): void;
  render(): JSX.Element;
}
