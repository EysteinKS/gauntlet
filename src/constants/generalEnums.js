export const DIFFICULTY = {
  EASY: "EASY",
  NORMAL: "NORMAL",
  HARD: "HARD"
}

export const DIFFMOD = {
  EASY: 1,
  NORMAL: 2,
  HARD: 3
}

export const PLAYER_AMOUNT_MULTIPLIER = {
  0: 1,
  1: 1,
  2: 1.125,
  3: 1.25,
  4: 1.375,
  5: 1.5,
  6: 1.75,
  7: 2,
  8: 2.5,
  9: 3,
  10: 4
}

export const CR_TO_XP = {
  "0": 5,
  "0.125": 25,
  "0.25": 50,
  "0.5": 100,
  "1": 200,
  "2": 450,
  "3": 700,
  "4": 1100,
  "5": 1800,
  "6": 2300,
  "7": 2700,
  "8": 3900,
  "9": 5000,
  "10": 5900,
  "11": 7200,
  "12": 8400,
  "13": 10000,
  "14": 11500,
  "15": 13000,
  "16": 15000,
  "17": 18000,
  "18": 20000,
  "19": 22000,
  "20": 25000,
  "21": 33000,
  "22": 41000,
  "23": 50000,
  "24": 62000,
  "25": 75000,
  "30": 155000
}

export const XP_ARRAY = [
  5,
  25,
  50,
  100,
  200,
  450,
  700,
  1100,
  1800,
  2300,
  2700,
  3900,
  5000,
  5900,
  7200,
  8400,
  10000,
  11500,
  13000,
  15000,
  18000,
  20000,
  22000,
  25000,
  33000,
  41000,
  50000,
  62000,
  75000,
  155000
]

export const CREATURE_AMOUNT_MULTIPLIER = {
  0: 1,
  1: 1,
  2: 1.5,
  3: 2,
  4: 2,
  5: 2,
  6: 2,
  7: 2.5,
  8: 2.5,
  9: 2.5,
  10: 2.5
}

export const getCreatureAmountMultiplier = (amount) => {
  if(amount <= 1){
    return 1
  }
  if(amount === 2){
    return 1.25
  }
  else {
    return 1.5
  }
  
  //return CREATURE_AMOUNT_MULTIPLIER[amount]
}