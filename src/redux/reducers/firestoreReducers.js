import * as FS from "../actions/firestoreActions"

const initialState = {
  monsters: [],
  loading: false,
  error: null
}

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case FS.FETCH_MONSTERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FS.FETCH_MONSTERS_SUCCESS:
      console.log("Got monsters: ", payload.monsters)
      return {
        ...state,
        loading: false,
        monsters: payload.monsters
      }
    case FS.FETCH_MONSTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        monsters: []
      }
    default:
      return state
  }
}