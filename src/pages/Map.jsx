import React, { Component, useState } from "react";
import FloorGrid from "../components/FloorGrid";
import EncounterList from "../components/EncounterList";
//import monsters from "../constants/monsters";
import generateEncounter from "../rng/generateEncounter";
import generateFloor from "../rng/generateFloor";
import getMonsters from "../api/getMonsters";

import { DIFFICULTY } from "../constants/generalEnums";
import "../style/Map.css";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encounter: [],
    };
  }

  setEncounter = (encounter) => {
    this.setState({ encounter: encounter })
  }

  render() {
    let encounter = this.state.encounter;
    let monsters = this.props.monsters

    return (
      <main className="Map">
        <div className="gridItemA">
          <div className="Floor">
            <FloorGrid />
          </div>
          <EncounterForm setEncounter={(e) => this.setEncounter(e)} monsters={monsters}/>
          <button
            onClick={e => {
              generateFloor();
              e.preventDefault();
            }}
          >
            Check shortest path throught floor
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              getMonsters();
            }}
          >
            Get monsters
          </button>
        </div>
        {encounter.length ? <EncounterList encounter={encounter} /> : null}
      </main>
    );
  }
}

const EncounterForm = ({ setEncounter, monsters }) => {
  const [players, setPlayers] = useState(1)
  const [level, setLevel] = useState(1)
  const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY)
  const [boss, setBoss] = useState(false)

  let playersoptions = [];
  for (let i = 0; i < 11; i++) {
    if (!isNaN(i)) {
      playersoptions.push(<option value={i}>{i}</option>);
    }
  }

  let leveloptions = [];
  for (let i = 0; i < 21; i++) {
    if (!isNaN(i)) {
      leveloptions.push(<option value={i}>{i}</option>);
    }
  }

  return (
    <form>
      <label>
        Players:
        <select
          name="players"
          value={players}
          onChange={e => setPlayers(e.value)}
        >
          {playersoptions}
        </select>
      </label>
      <label>
        Level:
        <select
          name="level"
          value={level}
          onChange={e => setLevel(e.value)}
        >
          {leveloptions}
        </select>
      </label>
      <br />
      <label>
        Difficulty:
        <select
          name="difficulty"
          value={difficulty}
          onChange={e => setDifficulty(e.value)}
        >
          <option value={DIFFICULTY.EASY}>Easy</option>
          <option value={DIFFICULTY.NORMAL}>Normal</option>
          <option value={DIFFICULTY.HARD}>Hard</option>
        </select>
      </label>
      <label>
        Boss?
        <input
          name="boss"
          type="checkbox"
          placeholder="boss?"
          value={boss}
          onChange={e => setBoss(e.value)}
        />
      </label>
      <br />
      <button
        style={{ marginTop: "2vh" }}
        onClick={event => {
          event.preventDefault();
          let ret = generateEncounter(
            players,
            level,
            difficulty,
            [],
            monsters,
            { boss: boss }
          );
          setEncounter(ret);
        }}
      >
        Get random encounter
      </button>
    </form>
  );
};
