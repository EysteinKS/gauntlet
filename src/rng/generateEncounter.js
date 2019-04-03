import { DIFFICULTY, CR_TO_XP, DIFFMOD } from "../constants/generalEnums"

//Checks if creature is below max xp, returns array of all matching creatures
const filterByCR = (creatures = [], xp = 100) =>  creatures.filter(c => CR_TO_XP[c.challenge_rating] < xp )

//Checks if creature contains all required tags, returns array of all matching creatures
//https://stackoverflow.com/questions/15514907/determining-whether-one-array-contains-the-contents-of-another-array-in-javascri 
const filterByTags = (creatures = [], tags = []) => creatures.filter(c => tags.every(tag => c.tags.includes(tag)))

//Targets a random creature within creature array
const getRandomCreature = (length) => Math.floor(Math.random() * Math.floor(length))

//Checks if currentxp is within the maxrange around targetxp
const withinRange = (currentxp, targetxp, maxrange) => {
  let min = targetxp - maxrange
  let max = targetxp + maxrange
  return currentxp >= min && currentxp <= max
}

//Creates an array of creatures within maxrange
const addCreatures = (creatures = [], targetxp = 100, maxrange = 20) => {
  let encounter = []
  let currentxp = 0

  while(!withinRange(currentxp, targetxp, maxrange)){
    let ran = getRandomCreature(creatures.length)
    let nextcreature = creatures[ran]

    //If currentxp doesn't exceed maxtarget, try to add creature
    if(currentxp + CR_TO_XP[nextcreature.challenge_rating] < targetxp + maxrange){

      //TODO:
      //CHECK SPAWN RULES TO SEE IF CREATURE SHOULD SPAWN WITH DUPLICATES

      encounter.push(nextcreature)
    }
  }
  
  return encounter
}

const defaultOptions = {
  filterByTags: false,
  creaturesIsFiltered: false
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
  let targetxp = partyxp * diffmod
  let maxrange = 12.5 * level * diffmod
  let filteredCreatures = []

  if (!options.creaturesIsFiltered){
    filteredCreatures = filterByCR(creatures, targetxp)
  }
  if (options.filterByTags){
    filteredCreatures = filterByTags(filteredCreatures, tags)
  }

  let encounter = addCreatures(filteredCreatures, targetxp, maxrange)

  return encounter
}

export default generateEncounter