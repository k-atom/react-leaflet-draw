import React, { Component } from 'react'
import {
  Map as LeafletMap,
  TileLayer,
  Circle,
} from 'react-leaflet'

import L from 'leaflet'
import { EditControlFeatureGroup } from '../src'

export default class EditControlExample extends Component {

  render () {
    console.log('state', this.state)
    return (
      <LeafletMap center={{ lat: 51.5, lng: -0.048 }} zoom={13}>
        <TileLayer
          attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <EditControlFeatureGroup
          onCreated={(e) => console.log("onCreated", e)}
          onEdited={(e) => console.log("onEdited", e)}
          onDeleted={(e) => console.log("onDeleted", e)}
        >
          <Circle center={[51.5, -0.05]} radius={600} />
        </EditControlFeatureGroup>
      </LeafletMap>
    )
  }
}
