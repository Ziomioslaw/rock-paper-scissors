import { USER_CHOOSE, TURN_BEGIN } from './actions'


function resolve_fight(one, two) {
  if (one === two) {
    return [0, 0]
  }

  switch (one) {
    case 'rock':
      if (two === 'paper')
        return [0, 1]
      else
        return [1, 0]

    case 'paper':
      if (two === 'scissors')
        return [0, 1]
      else
        return [1, 0]

    case 'scissors':
      if (two === 'rock')
        return [0, 1]
      else
        return [1, 0]

    default:
      throw Error(`Unknown value: "${one}"`)
  }
}


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
