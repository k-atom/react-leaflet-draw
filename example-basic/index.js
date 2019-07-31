import React from 'react'
import { render } from 'react-dom'
import EditControlExample from './edit-control'

const example = (
  <div>
    <h1>React-Leaflet-Draw-v2 Basic</h1>
    <p style={{margin: "0 10%"}}>
      This example demonstrates that the EditControlFeatureGroup "cooperates" with the shapes added to it as children. However, since this basic example does not really implement any state management, it does not save any added shapes (i.e. you have to have an `onCreated` handler and then add the shape the handler provides to your React app state). Have a look at the console to see the event handlers firing.
    </p>

    <EditControlExample />
  </div>
)

render(example, document.getElementById('app'))
