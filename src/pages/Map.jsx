import React, { Component } from "react";
import FloorGrid from "../components/FloorGrid";
import EncounterList from "../components/EncounterList";
import monsters from "../constants/monsters";
import generateEncounter from "../rng/generateEncounter";
import { DIFFICULTY } from "../constants/generalEnums";
import "../style/Map.css";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encounter: [],
      players: 1,
      level: 1,
      difficulty: DIFFICULTY.EASY,
      boss: false
    };
  }
  static defaultProps = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let encounter = this.state.encounter;

    let playersoptions = [];
    for (let i = 0; i < 11; i++) {
      if(!isNaN(i)){
        playersoptions.push(<option value={i}>{i}</option>);
      }
    }

    let leveloptions = [];
    for (let i = 0; i < 21; i++) {
      if(!isNaN(i)){
        leveloptions.push(<option value={i}>{i}</option>);
      }
    }

    return (
      <main className="Map">
        <div className="gridItemA">
        <div className="Floor">
          <FloorGrid />
        </div>
        <form>
          <label>
            Players:
            <select
              name="players"
              value={this.state.players}
              onChange={e => this.handleChange(e)}
            >
              {playersoptions}
            </select>
          </label>
          <label>
            Level:
            <select
              name="level"
              value={this.state.level}
              onChange={e => this.handleChange(e)}
            >
              {leveloptions}
            </select>
          </label>
          <br/>
          <label>
            Difficulty:
            <select
              name="difficulty"
              value={this.state.difficulty}
              onChange={e => this.handleChange(e)}
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
              value={this.state.boss}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <br/>
          <button
            style={{ marginTop: "2vh" }}
            onClick={event => {
              let ret = generateEncounter(
                this.state.players,
                this.state.level,
                this.state.difficulty,
                [],
                monsters,
                { boss: this.state.boss }
              );
              this.setState({ encounter: ret });
              event.preventDefault()
            }}
          >
            Get random encounter
          </button>
        </form>
        </div>
        {encounter.length ? <EncounterList encounter={encounter} /> : null}
      </main>
    );
  }
}
