import { USER_CHOOSE, TURN_BEGIN } from './actions'
import { resolve_fight } from './logic'


const reducer = (state, action) => {
  switch (action.type) {
    case TURN_BEGIN:
      return {
        ...state,
        ai_selected: action.ai_select
      }

    case USER_CHOOSE:
      const [ ai_point, player_point ] = resolve_fight(state.ai_selected, action.value)

      return {
        ...state,
        ai_points: state.ai_points + ai_point,
        player_points: state.player_points + player_point
      }

    default:
      return state
  }
}

export default reducer
