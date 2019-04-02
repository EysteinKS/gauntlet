import React, { Component } from 'react'
import FloorGrid from "../components/FloorGrid"
import "../style/Map.css"

export default class Map extends Component {
  static defaultProps = {

  }

  render() {
    return (
      <div className="Map">
        <FloorGrid/>
      </div>
    )
  }
}
