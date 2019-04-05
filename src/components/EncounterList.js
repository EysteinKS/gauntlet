import React from "react"

const CreatureAction = ({ action = {} }) => {
  return(
    <div>

    </div>
  )
}

const CreatureActions = ({ actions = [] }) => {
  return(
    <div>
      {actions.map(action => <CreatureAction action={action}/>)}
    </div>
  )
}

const CreatureAbilities = ({ creature = {} }) => {
  return(
    <div>

    </div>
  )
}

const CreatureView = ({ creature = {} }) => {
  return(
    <div>
      <p>{creature.name}</p>
      <p>AC: {creature.armor_class}</p>
      <p>HP: {creature.hit_points}</p>
    </div>
  )
}

const EncounterList = ({
  encounter = []
}) => {
  return(
    <section>
      {encounter.map(creature => <CreatureView creature={creature}/>)}
    </section>
  )
}

export default EncounterList