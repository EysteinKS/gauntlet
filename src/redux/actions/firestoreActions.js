import { firestore } from "../../firebase/firebase"
const monstersRef = "Creatures/Monsters"

/* FETCHING MONSTERS */
export const FETCH_MONSTERS_BEGIN = 'FETCH_MONSTERS_BEGIN '
export const fetchMonstersBegin = () => ({
  type: FETCH_MONSTERS_BEGIN
})

export const FETCH_MONSTERS_SUCCESS = 'FETCH_MONSTERS_SUCCESS'
export const fetchMonstersSuccess = (monsters) => ({
  type: FETCH_MONSTERS_SUCCESS,
  payload: { monsters }
})

export const FETCH_MONSTERS_FAILURE = 'FETCH_MONSTERS_FAILURE'
export const fetchMonstersFailure = (error) => ({
  type: FETCH_MONSTERS_FAILURE,
  payload: { error }
})

export const getMonsters = () => {
  return dispatch => {
    dispatch(fetchMonstersBegin())

    firestore.doc(monstersRef).get()
      .then(res => {
        let data = res.data()
        let resArray = []
        for (let mon in data){
          resArray.push(data[mon])
        }
        dispatch(fetchMonstersSuccess(resArray))
      })
      .catch(err => {
        dispatch(fetchMonstersFailure(err))
      })
  }
}

/* SAVING MONSTERS */
export const SAVE_MONSTER_BEGIN = 'SAVE_MONSTER_BEGIN'
export const saveMonsterBegin = () => ({
  type: SAVE_MONSTER_BEGIN,
})


export const SAVE_MONSTER_SUCCESS = 'SAVE_MONSTER_SUCCESS'
export const saveMonsterSuccess = () => ({
  type: SAVE_MONSTER_SUCCESS,
})


export const SAVE_MONSTER_FAILURE = 'SAVE_MONSTER_FAILURE'
export const saveMonsterFailure = (error) => ({
  type: SAVE_MONSTER_FAILURE,
  payload: { error }
})

export const saveMonster = (monster) => {
  return dispatch => {
    dispatch(saveMonsterBegin())
    firestore.doc(monstersRef).update({ [monster.index]: monster })
      .then(() => dispatch(saveMonsterSuccess()))
      .catch(err => dispatch(saveMonsterFailure(err)))
  }
}