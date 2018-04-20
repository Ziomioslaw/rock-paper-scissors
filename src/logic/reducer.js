import { USER_CHOOSE, TURN_BEGIN } from './actions'
import { resolve_fight } from './logic'
import HistoryManager from './historyManager'

const historyManager = HistoryManager()

const reducer = (state, action) => {
  switch (action.type) {
    case TURN_BEGIN:
      return {
        ...state,
        ai_selected: action.ai_select
      }

    case USER_CHOOSE:
      const [ ai_point, player_point ] = resolve_fight(state.ai_selected, action.value)
      historyManager.addToHistory(state.ai_selected, action.value, [ai_point, player_point])

      return {
        ...state,
        ai_points: state.ai_points + ai_point,
        player_points: state.player_points + player_point,
        history: historyManager.returnHistory()
      }

    default:
      return state
  }
}

export default reducer