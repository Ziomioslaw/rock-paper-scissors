import { createStore } from 'redux'
import reducer from './reducer'


const initialState = {
  ai_points: 0,
  player_points: 0,
  ai_selected: null,
  history: null
}

const store = createStore(reducer, initialState)

export default store
