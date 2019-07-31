import React, { Component } from 'react'
import { render } from 'react-dom'
import EditControlExample from './edit-control'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {'editing': false}
  }

  render() {
    const {editing} = this.state;
    const backgroundColor = editing ? "fuchsia": "white"

    return (
      <div style={{backgroundColor}}>
        <h1>React-Leaflet-Draw Full Example</h1>
        <p>I do not add polylines. I do not edit rectangles. I do not delete markers.</p>
        <EditControlExample 
          flagStartedEditing={() => {this.setState({'editing': true})}} 
          flagStoppedEditing={() => {this.setState({'editing': false})}} 
        />
    </div>)
  }
}

render(<Index />, document.getElementById('app'))
