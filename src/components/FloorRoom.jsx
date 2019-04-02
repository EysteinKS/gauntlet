import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import "../style/FloorRoom.css"
import { WALLTYPE, STATUS, ROOMTYPE } from "../constants/roomEnums"

const FloorRoom = ({ 
  type,
  walls,
  setActive,
  id,
  current
}) => {
  const [ status, setStatus ] = useState(STATUS.UNEXPLORED)
  const [ explored, setExplored ] = useState(false)
  const [ selected, setSelected ] = useState(false)


  useEffect(() => {
    if(type === ROOMTYPE.ENTRANCE && !explored){
      setActive()
    }

    if(!explored && id === current){
      console.log(`Selecting ${id} for the first time`)
      setExplored(true)
      setSelected(true)
      setStatus(STATUS.ACTIVE)
    }
  
    if(explored && id === current){
      console.log(`Setting ${id} as Active`)
      setSelected(true)
      setStatus(STATUS.ACTIVE)
    }
  
    if(explored && id !== current && selected){
      console.log(`Setting ${id} as Explored`)
      setSelected(false)
      setStatus(STATUS.EXPLORED)
    }
  })

  let styledType = styleType(type)
  let styledStatus = ""
  let styledActive = ""
  let styledWalls = ""


  if (type !== ROOMTYPE.VOID){
    styledStatus = styleStatus(status)
    styledWalls = styleWalls(walls)
  }

  if(selected){
    styledActive = "Active"
  }

  let classes = `${styledType} ${styledWalls} ${styledActive} FloorRoom`

  return(
    <section className={classes} onClick={() => {
      setStatus(STATUS.ACTIVE)
      setActive()}}>
      <h1>{styledStatus}</h1>
    </section>
  )
}

FloorRoom.propTypes = {
  type: PropTypes.string.isRequired,
  walls: PropTypes.shape({
    N: PropTypes.string.isRequired,
    S: PropTypes.string.isRequired,
    E: PropTypes.string.isRequired,
    W: PropTypes.string.isRequired
  }),
  setActive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired
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
    default:
      break
  }
}

const styleWalls = walls => {
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
      break
    default:
      break
  }
}

export default FloorRoom