import React, { Fragment, useState } from "react";
import { getAbilityModifier } from "../constants/statsEnum";
import "../style/EncounterList.css";

const CreatureAction = ({ action = {} }) => {
  const { name, desc } = action;

  return (
    <div>
      <h5>{name}</h5>
      <p>{desc}</p>
    </div>
  );
};

const CreatureActions = ({ actions = [], type = "actions" }) => {
  const [open, setOpen] = useState(false)
  let collapsed = "closed"
  open ? collapsed = "open" : collapsed = "closed"

  let title = "";
  switch (type) {
    case "actions":
      title = "Actions";
      break;
    case "special_abilities":
      title = "Special Abilities";
      break;
    case "legendary_actions":
      title = "Legendary Actions";
      break;
    default:
      break;
  }

  return (
    <Fragment>
      <h3 onClick={() => setOpen(!open)}>{title}</h3>
      <div className={collapsed}>{actions.map(action => (
        <CreatureAction action={action} />
      ))}</div>
    </Fragment>
  );
};

const CreatureAbility = ({ ability = "strength", value = 10 }) => {
  let modifier = getAbilityModifier(value).toString();
  let name = ability.toUpperCase();

  return (
    <div className="abilityGrid">
      <h5 className="abilityName">{name}</h5>
      <p className="abilityValue">{value}</p>
      <p className="abilityModifier">( {modifier} )</p>
    </div>
  );
};

const CreatureAbilities = ({ creature = {} }) => {
  const [open, setOpen] = useState(false)
  let collapsed = "closed"
  open ? collapsed = "open" : collapsed = "closed"

  let abilities = [
    "strength",
    "dexterity",
    "constitution",
    "wisdom",
    "intelligence",
    "charisma"
  ];
  let abilityList = abilities.map(a => {
    return <CreatureAbility ability={a} value={creature[a]} />;
  });
  return (
    <Fragment>
      <h3 onClick={() => setOpen(!open)}>Abilities</h3>
      <div className={collapsed}>{abilityList}</div>
    </Fragment>
  );
};

const CreatureView = ({ creature = {} }) => {
  const [open, setOpen] = useState(false)
  let collapsed = "closed"
  open ? collapsed = "open" : collapsed = "closed"
  
  return (
    <div className="CreatureView">
      <h2 className="smallMargin" onClick={() => setOpen(!open)}>{creature.name}</h2>
      <div className={collapsed}>
      <section className="statsGrid">
        <p className="smallMargin AC">AC: {creature.armor_class}</p>
        <p className="smallMargin HP">HP: {creature.hit_points}</p>
        <p className="smallMargin CR">CR: {creature.challenge_rating}</p>
      </section>
      <CreatureAbilities creature={creature} />
      {creature.actions ? (
        <CreatureActions actions={creature.actions} type="actions" />
      ) : null}
      {creature.special_abilities ? (
        <CreatureActions
          actions={creature.special_abilities}
          type="special_abilities"
        />
      ) : null}
      {creature.legendary_actions ? (
        <CreatureActions
          actions={creature.legendary_actions}
          type="legendary_actions"
        />
      ) : null}
      </div>
    </div>
  );
};

const EncounterList = ({ encounter = [] }) => {
  return (
    <section className="gridItemB">
      {encounter
        ? encounter.map(creature => <CreatureView creature={creature} />)
        : null}
    </section>
  );
};

export default EncounterList;
