import { firestore } from "../firebase"

const getMonsters = async () => {
  let monsters = await firestore.getFirestoreDoc("Creatures/Monsters")
  let ret = []

  for (const mon in monsters){
    ret.push(monsters[mon])
  }

  console.log(ret)
}

export default getMonsters