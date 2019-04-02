import { ROOMTYPE, WALLTYPE, LIGHTING, ENCOUNTERS, CONTENT } from "./roomEnums"

//LEVELS
export const levelOne = [
  [aa, ab, ac, ad],
  [ba, bb, bc, bd],
  [ca, cb, cc, cd],
  [da, db, dc, dd]
]

//ROOMS
const aa = {
  type: ROOMTYPE.ROOM,
  walls: {
    N: WALLTYPE.WALL,
    S: WALLTYPE.WALL,
    E: WALLTYPE.DOOR,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.EMPTY,
    content: CONTENT.EMPTY
  },
  description: ""
}

const ab = {
  type: ROOMTYPE.HALLWAY,
  walls: {
    N: WALLTYPE.WALL,
    S: WALLTYPE.OPEN,
    E: WALLTYPE.DOOR,
    W: WALLTYPE.DOOR
  },
  lighting: LIGHTING.BRIGHT,
  encounter: {
    type: ENCOUNTERS.TRAP,
    content: CONTENT.TRAP
  },
  description: ""
}

const ac = {
  type: ROOMTYPE.LARGEROOM,
  walls: {
    N: WALLTYPE.WALL,
    S: WALLTYPE.OPEN,
    E: WALLTYPE.DOOR,
    W: WALLTYPE.OPEN
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.CREATURES,
    content: CONTENT.CREATURES
  },
  description: ""
}

const ad = {
  type: ROOMTYPE.LARGEROOM,
  walls: {
    N: WALLTYPE.WALL,
    S: WALLTYPE.OPEN,
    E: WALLTYPE.OPEN,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.CREATURES,
    content: CONTENT.CREATURES
  },
  description: ""
}

const ba = {
  type: ROOMTYPE.VOID
}

const bb = {
  type: ROOMTYPE.HALLWAY,
  walls: {
    N: WALLTYPE.OPEN,
    S: WALLTYPE.DOOR,
    E: WALLTYPE.WALL,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.BRIGHT,
  encounter: {
    type: ENCOUNTERS.TRAP,
    content: CONTENT.TRAP
  },
  description: ""
}

const bc = {
  type: ROOMTYPE.LARGEROOM,
  walls: {
    N: WALLTYPE.OPEN,
    S: WALLTYPE.DOOR,
    E: WALLTYPE.OPEN,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.CREATURES,
    content: CONTENT.CREATURES
  },
  description: ""
}

const bd = {
  type: ROOMTYPE.LARGEROOM,
  walls: {
    N: WALLTYPE.OPEN,
    S: WALLTYPE.WALL,
    E: WALLTYPE.OPEN,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.CREATURES,
    content: CONTENT.CREATURES
  },
  description: ""
}

const ca = {
  type: ROOMTYPE.SECRET,
  walls: {
    N: WALLTYPE.WALL,
    S: WALLTYPE.WALL,
    E: WALLTYPE.SECRET,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DARK,
  encounter: {
    type: ENCOUNTERS.TREASURE,
    content: CONTENT.TREASURE
  }
}

const cb = {
  type: ROOMTYPE.ROOM,
  walls: {
    N: WALLTYPE.DOOR,
    S: WALLTYPE.DOOR,
    E: WALLTYPE.SECRET,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DARK,
  encounter: {
    type: ENCOUNTERS.CREATURES,
    content: CONTENT.CREATURES
  }
}

const cc = {
  type: ROOMTYPE.ROOM,
  walls: {
    N: WALLTYPE.DOOR,
    S: WALLTYPE.DOOR,
    E: WALLTYPE.WALL,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.CREATURES,
    content: CONTENT.CREATURES
  }
}

const cd = {
  type: ROOMTYPE.EXIT,
  walls: {
    N: WALLTYPE.WALL,
    S: WALLTYPE.OPEN,
    E: WALLTYPE.WALL,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.BOSS,
    content: CONTENT.BOSS
  }
}

const da = {
  type: ROOMTYPE.VOID
}

const db = {
  type: ROOMTYPE.ENTRANCE,
  walls: {
    N: WALLTYPE.DOOR,
    S: WALLTYPE.WALL,
    E: WALLTYPE.WALL,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.BRIGHT,
  encounter: {
    type: ENCOUNTERS.VOID,
    content: CONTENT.VOID
  }
}

const dc = {
  type: ROOMTYPE.ROOM,
  walls: {
    N: WALLTYPE.DOOR,
    S: WALLTYPE.WALL,
    E: WALLTYPE.DOOR,
    W: WALLTYPE.WALL
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.CREATURES,
    content: CONTENT.CREATURES
  }
}

const dd = {
  type: ROOMTYPE.EXIT,
  walls: {
    N: WALLTYPE.OPEN,
    S: WALLTYPE.WALL,
    E: WALLTYPE.WALL,
    W: WALLTYPE.DOOR
  },
  lighting: LIGHTING.DIM,
  encounter: {
    type: ENCOUNTERS.BOSS,
    content: CONTENT.BOSS
  }
}

//ENCOUNTERS

