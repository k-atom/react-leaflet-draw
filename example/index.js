import React from 'react'
import { render } from 'react-dom'
import EditControlExample from './edit-control'

const example = (
  <div>
    <h1>React-Leaflet-Draw example</h1>
    <p>
      I do not add polylines. I do not edit rectangles. I do not delete markers.
    </p>
    <EditControlExample />
  </div>
)

render(example, document.getElementById('app'))
