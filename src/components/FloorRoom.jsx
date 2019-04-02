import React from "react"
import PropTypes from "prop-types"

import "../style/Room.css"
import { WALLTYPE, STATUS, ROOMTYPE } from "../constants/roomEnums"

const FloorRoom = ({ 
  status,
  type,
  walls,
  setActive
}) => {

  let styledStatus = styleStatus(status)
  let styledType = styleType(type)
  let styledWalls = styleWalls(walls)

  let classes = `${styledType} ${styledWalls}`

  return(
    <section className={classes} onClick={setActive}>
      <p>{styledStatus}</p>
    </section>
  )
}

FloorRoom.propTypes = {
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  walls: PropTypes.shape({
    N: PropTypes.string.isRequired,
    S: PropTypes.string.isRequired,
    E: PropTypes.string.isRequired,
    W: PropTypes.string.isRequired
  }).isRequired,
  setActive: PropTypes.func.isRequired
}

const styleStatus = (status) => {
  switch(status){
    case STATUS.ACTIVE:
      return "X"
    case STATUS.EXPLORED:
      return "O"
    case STATUS.UNEXPLORED:
      return "?"
    default:
      return ""
  }
}

const styleType = (type) => {
  switch(type){
    case ROOMTYPE.HALLWAY:
      return "Hallway"
    case ROOMTYPE.VOID:
      return "Void"
    case ROOMTYPE.ENTRANCE:
      return "Entrance"
    case ROOMTYPE.EXIT:
      return "Exit"
    case ROOMTYPE.SHOP:
      return "Shop"
    case ROOMTYPE.FOUNTAIN:
      return "Fountain"
    case ROOMTYPE.ROOM:
      return "Room"
    case ROOMTYPE.LARGEROOM:
      return "Room"
    case ROOMTYPE.SECRET:
      return "Secret"
  }
}

const styleWalls = (walls) => {
  let { N, S, E, W } = walls
  let north = styleWall(N);
  let south = styleWall(S);
  let east = styleWall(E);
  let west = styleWall(W);

  let ret = `North${north} South${south} East${east} West${west}`

  return ret
}

const styleWall = (wall) => {
  switch(wall){
    case WALLTYPE.WALL:
      return "Wall"
    case WALLTYPE.DOOR:
      return "Door"
    case WALLTYPE.SECRET:
      return "Secret"
    case WALLTYPE.OPEN:
      return "Open"
    default:
      break
  }
}

export default FloorRoom