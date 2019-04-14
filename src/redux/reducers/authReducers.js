import * as AU from "../actions/authActions"

const initialState = {
  user: {
    username: null,
    email: null,
    uid: null,
    permission: null,
  },
  loading: false,
  error: null
}

export default (state = initialState, {type, payload}) => {
  switch(type){
    default:
      return state
  }
}