import React, { Component } from 'react'
import FloorGrid from "../components/FloorGrid"
import monsters from "../constants/monsters"
import generateEncounter from "../rng/generateEncounter"
import { DIFFICULTY } from "../constants/generalEnums"
import "../style/Map.css"

export default class Map extends Component {
  static defaultProps = {

  }

  render() {
    return (
      <div className="Map">
        <FloorGrid/>
        <button onClick={() => generateEncounter(4, 1, DIFFICULTY.NORMAL, [], monsters )}>Get random encounter</button>
      </div>
    )
  }
}
