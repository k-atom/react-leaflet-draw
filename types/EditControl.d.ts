import * as PropTypes from 'prop-types';
import * as Draw from 'leaflet-draw';
import { withLeaflet, MapControl } from 'react-leaflet';
import * as L from 'leaflet';

declare const eventHandlers: {
  onEdited: 'draw:edited';
  onCreated: 'draw:created';
  onDeleted: 'draw:deleted';
  onDrawStart: 'draw:drawstart';
  onDrawStop: 'draw:drawstop';
  onDrawVertex: 'draw:drawvertex';
  onEditStart: 'draw:editstart';
  onEditMove: 'draw:editmove';
  onEditResize: 'draw:editresize';
  onEditVertex: 'draw:editvertex';
  onEditStop: 'draw:editstop';
  onDeleteStart: 'draw:deletestart';
  onDeleteStop: 'draw:deletestop';
  onToolbarOpened: 'draw:toolbaropened';
  onToolbarCloser: 'draw:toolbarclosed';
  onMarkerContext: 'draw:markercontext';
}

declare type DrawPropTypes = {
  polyline?: PropTypes.Requireable<object | boolean>;
  polygon?: PropTypes.Requireable<object | boolean>;
  rectangle?: PropTypes.Requireable<object | boolean>;
  circle?: PropTypes.Requireable<object | boolean>;
  marker?: PropTypes.Requireable<object | boolean>;
}
export declare const DrawPropTypes: DrawPropTypes;

declare type EditPropTypes = {
  edit?: PropTypes.Requireable<object | boolean>;
  remove?: PropTypes.Requireable<object | boolean>;
  poly?: PropTypes.Requireable<object | boolean>;
  allowIntersection?: PropTypes.Requireable<boolean>;
}
export declare const EditPropTypes: EditPropTypes;

declare type PositionPropType = PropTypes.Requireable<'topright' | 'topleft' | 'bottomright' | 'bottomleft'>;
export declare const PositionPropType: PositionPropType;

declare class EditControl extends MapControl {
  static propTypes: {
    onEdited: PropTypes.Requireable<(...args: any[]) => any>;
    onCreated: PropTypes.Requireable<(...args: any[]) => any>;
    onDeleted: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawStart: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawStop: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawVertex: PropTypes.Requireable<(...args: any[]) => any>;
    onEditStart: PropTypes.Requireable<(...args: any[]) => any>;
    onEditMove: PropTypes.Requireable<(...args: any[]) => any>;
    onEditResize: PropTypes.Requireable<(...args: any[]) => any>;
    onEditVertex: PropTypes.Requireable<(...args: any[]) => any>;
    onEditStop: PropTypes.Requireable<(...args: any[]) => any>;
    onDeleteStart: PropTypes.Requireable<(...args: any[]) => any>;
    onDeleteStop: PropTypes.Requireable<(...args: any[]) => any>;
    onToolbarOpened: PropTypes.Requireable<(...args: any[]) => any>;
    onToolbarCloser: PropTypes.Requireable<(...args: any[]) => any>;
    onMarkerContext: PropTypes.Requireable<(...args: any[]) => any>;
    onMounted: PropTypes.Requireable<(...args: any[]) => any>;
    onWillUnmount: PropTypes.Requireable<(...args: any[]) => any>;
    draw: DrawPropTypes;
    edit: EditPropTypes;
    position: PositionPropType;
  }

  static contextTypes: {
    map: L.Map;
    layerContainer: {
      addLayer: PropTypes.Requireable<(...args: any[]) => any>;
      removeLayer: PropTypes.Requireable<(...args: any[]) => any>;
    }
  }

  componentDidMount(): void;
  componentWillUnmount(): void;
  createLeafletElement: () => L.Control.Draw;
  componentDidUpdate: (prevProps: any) => void;
}

declare function createDrawControl(props: any): L.Control.Draw;

declare const _default: React.ComponentType<Pick<import("react-leaflet").MapControlProps, "position">>;
export default _default;
