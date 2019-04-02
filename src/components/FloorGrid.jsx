import React, { useState } from 'react'
import { levelOne } from "../constants/mock"
import FloorRoom from "./FloorRoom"
import "../style/FloorGrid.css"

const FloorGrid = () => {
  const [current, setCurrent] = useState(false)

  return (
    <div className="FloorGrid">
      {levelOne.map((i, x) => {
        return i.map((j, y) => {
          let thisRoom = j
          return <FloorRoom
            key={`${x},${y}`}
            id={`${x},${y}`}
            type={thisRoom.type}
            walls={thisRoom.walls}
            setActive={() => {
              console.log(`Clicked levelOne[${x}][${y}]`)
              setCurrent(`${x},${y}`)
            }}
            current={current}
          />
        })
      })}
    </div>
  )
}

export default FloorGrid