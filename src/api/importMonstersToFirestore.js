import { firestore } from "../firebase"

const between = (x, min, max) => {
  return x >= min && x <= max
}

const tagsByAbility = (monster) => {
  let ret = []
  let abilities = ["strength", "dexterity", "wisdom", "charisma", "intelligence", "constitution"]
  for (let ability in abilities){
    let tag
    let current = abilities[ability]
    let monsterAbility = monster[current]

    if(between(monsterAbility, 1, 3)){
      tag = "min"
    } else if (between(monsterAbility, 4, 7)){
      tag = "low"
    } else if (between(monsterAbility, 8, 13)){
      tag = "normal"
    } else if (between(monsterAbility, 14, 19)){
      tag = "high"
    } else if (between(monsterAbility, 20, 27)){
      tag = "greater"
    } else if (between(monsterAbility, 28, 30)){
      tag = "max"
    }

    let sub = current.substring(0, 3)
    ret.push(`abi_${sub}_${tag}`)

  }
  return ret
}

const tagsBySize = (monster) => {
  let size = monster.size.toLowerCase()
  return `size_${size}`
}

const tagsByType = (monster) => {
  let type = monster.type.toLowerCase()
  return `type_${type}`
}

const importMonsters = ( monsters = []) => {
  /*if(!monsters.isArray){
    throw new Error("Could not import monsters, input is not an array")
  }*/

  let monstersReference = "Creatures/Monsters"

  for (let monster in monsters){

    let newMonster = monsters[monster]
    newMonster.tags = []

    // Adding tags
    if (newMonster.type){
      newMonster.tags.push(tagsByType(newMonster))  
    }
    if (newMonster.size){
      newMonster.tags.push(tagsBySize(newMonster))
    }
    let abilityTags = tagsByAbility(newMonster)
    for (let abi in abilityTags){
      newMonster.tags.push(abilityTags[abi])
    }
    
    let data = { [newMonster.index]: newMonster }
    console.log(data)
    console.log(`Adding ${newMonster.name} to Firestore with index ${newMonster.index}`)
    firestore.mergeDataToFirestore(monstersReference, data)
  }  

}

export default importMonsters

const exampleMonsterWithTags = {
  "index": 1,
  "name": "Aboleth",
  "tags": [

  ]
}