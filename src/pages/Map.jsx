import React, { Component } from 'react'
import FloorGrid from "../components/FloorGrid"
import monsters from "../constants/monsters"
import generateEncounter from "../rng/generateEncounter"
import { DIFFICULTY } from "../constants/generalEnums"
import "../style/Map.css"

export default class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      encounter: []
    }
  }
  static defaultProps = {

  }

  render() {
    let encounter = this.state.encounter
    return (
      <div className="Map">
        <FloorGrid/>
        <button onClick={async () => {
          let ret = await generateEncounter(4, 10, DIFFICULTY.NORMAL, [], monsters )
          console.log(ret)
          this.setState({ encounter: ret })
          }}>Get random encounter</button>
        <ul>{encounter.map(creature => <li>{creature.name}</li>)}</ul>
      </div>
    )
  }
}