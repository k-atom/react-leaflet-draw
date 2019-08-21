import React, { Component } from 'react'
import { render } from 'react-dom'
import EditControlExample from './edit-control'

class Index extends Component {
  render() {
    return (
      <div>
        <h1>React-Leaflet-Draw Custom Example</h1>
        <EditControlExample />
    </div>)
  }
}

render(<Index />, document.getElementById('app'))
