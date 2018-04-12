import { USER_CHOOSE } from './actions'

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case USER_CHOOSE:
    default:
      return state
  }
}

export default reducer
