export const getAbilityModifier = (value) => {
  switch(value){
    case(1):
      return -5
    case(2 || 3):
      return -4
    case (4 || 5):
      return -3
    case (6 || 7):
      return -2
    case (8 || 9):
      return -1
    case 10:
      return 0
    case (11 || 12):
      return 1
    case (13 || 14):
      return 2
    case (15 || 16):
      return 3
    case (17 || 18):
      return 4
    case (19 || 20):
      return 5
    case (21 || 22):
      return 6
    case (23 || 24):
      return 7
    case (25 || 26):
      return 8
    case (27 || 28):
      return 9
    case (29 || 30):
      return 10
    default:
      return 0
  }
}