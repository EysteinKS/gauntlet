import { DIFFICULTY, CR_TO_XP, XP_ARRAY, DIFFMOD, getCreatureAmountMultiplier, PLAYER_AMOUNT_MULTIPLIER } from "../constants/generalEnums"

//Checks if creature is below max xp, returns array of all matching creatures
const filterByCR = (creatures = [], xp = 100) => {
  console.log("List of creatures length: ", creatures.length)
  return creatures.filter(c => {
    let cr = c.challenge_rating.toString()
    let creaturexp = CR_TO_XP[cr]
    return creaturexp < xp })
}

//Checks if creature contains all required tags, returns array of all matching creatures
//https://stackoverflow.com/questions/15514907/determining-whether-one-array-contains-the-contents-of-another-array-in-javascri 
const filterByTags = (creatures = [], tags = []) => creatures.filter(c => tags.every(tag => c.tags.includes(tag)))
// eslint-disable-next-line
const filterByType = (creatures = [], type = "") => creatures.filter(c => c.type === type)

//Targets a random creature within creature array
const getRandomCreature = (length) => Math.floor(Math.random() * Math.floor(length))

//Checks if currentxp is within the maxrange around targetxp
//Increases currentxp modifier based on amount of enemies
const withinRange = (currentxp, targetxp, maxrange, length = 1) => {
  let min = targetxp - maxrange
  let max = targetxp + maxrange
  let calculatedxp = currentxp * getCreatureAmountMultiplier(length)
  console.log(`Checking if ${calculatedxp} is between ${min} and ${max}`)
  let retBool = calculatedxp >= min && calculatedxp <= max
  console.log(retBool ? "retBool === true" : "retBool === false")
  return retBool
}

//Creates an array of creatures within maxrange
const addCreatures = (creatures = [], targetxp = 100, maxrange = 20) => {
  let encounter = []
  let currentxp = 0

  //TODO:
  //CHECK WHY IT JUMPS OUT OF WHILE LOOP WHEN CURRENTXP ISNT IN RANGE
  while(true){
    let ran = getRandomCreature(creatures.length)
    //console.log("Trying to add creature with index ", ran)
    let nextcreature = creatures[ran]
    let creaturexp = CR_TO_XP[nextcreature.challenge_rating]

    //If currentxp doesn't exceed maxtarget, try to add creature
    if((currentxp + creaturexp) * getCreatureAmountMultiplier(encounter.length + 1) < (targetxp + maxrange)){
      console.log(`${currentxp+creaturexp} is less than ${targetxp + maxrange} `)
      //TODO:
      //CHECK SPAWN RULES TO SEE IF CREATURE SHOULD SPAWN WITH DUPLICATES
      console.log(`Adding ${nextcreature.name} to encounter with CR${nextcreature.challenge_rating}`)
      currentxp += creaturexp
      encounter.push(nextcreature)
    }
    if(withinRange(currentxp, targetxp, maxrange, encounter.length)){
      console.log("Created encounter with total xp", currentxp * getCreatureAmountMultiplier(encounter.length))
      return encounter
    }
  }
}

const getBossMaxXP = (targetxp) => {
  let ret = []
  let foundmax = false
  XP_ARRAY.forEach((cr, i) => {
    if(cr > targetxp && !foundmax){
      foundmax = true
      ret = [XP_ARRAY[i - 1], XP_ARRAY[i], XP_ARRAY[i + 1]]
      console.log("Boss Max XP: ", ret)
    }
  })
  return ret
}

const addBoss = (creatures = [], targetxp = 100, maxrange = 20) => {
  let encounter = []
  let max = getBossMaxXP(targetxp)

  //TODO
  //FILTER TO ONLY RETURN LIST OF CREATURES MATCHING THE CR
  //IF NO CREATURES MATCH CR, TRY TO INCREASE AND REDUCE CR BY ONE AND CHECK IF ANY MONSTERS ARE RETURNED 

  while(true){
    let ran = getRandomCreature(creatures.length)
    let newboss = creatures[ran]
    let creaturexp = CR_TO_XP[newboss.challenge_rating]
    //console.log(`Trying to add ${newboss.name}`)

    if(max.includes(creaturexp)){
      console.log(`Adding ${newboss.name} to encounter with CR${newboss.challenge_rating}`)
      encounter.push(newboss)
      return encounter
    }
  }
}

//MAIN FUNCTION
const defaultOptions = {
  filterByTags: false,
  creaturesIsFiltered: false,
  boss: false
}
const generateEncounter = (
  players = 4,
  level = 1,
  difficulty = DIFFICULTY.EASY,
  tags = [],
  creatures = [],
  options = defaultOptions
) => {

  let diffmod = DIFFMOD[difficulty]
  let partyxp = (25 * level) * players
  let targetxp = partyxp * diffmod * PLAYER_AMOUNT_MULTIPLIER[players]
  let maxrange = 12.5 * level * diffmod
  let filteredCreatures = []

  if (!options.creaturesIsFiltered){
    console.log("Filtering monsters by CR")
    console.log("Target XP: ", targetxp)
    filteredCreatures = filterByCR(creatures, targetxp + maxrange)
  }
  if (options.filterByTags){
    filteredCreatures = filterByTags(filteredCreatures, tags)
  }
  //filteredCreatures = filterByType(filteredCreatures, "humanoid")
  console.log(`Returned array of ${filteredCreatures.length} creatures`)

  let encounter
  if(options.boss){
    encounter = addBoss(creatures, targetxp, maxrange)
  } else {
    encounter = addCreatures(filteredCreatures, targetxp, maxrange)
  }
  console.log("Random encounter: ", encounter)
  return encounter
}

export default generateEncounter