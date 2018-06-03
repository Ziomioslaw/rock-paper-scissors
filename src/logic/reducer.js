import HistoryManager from './historyManager'
import { resolve_fight } from './logic'
import {
    USER_CHOOSE,
    TURN_BEGIN,
    TURN_COMPLETE
} from './actions'
import {
  STAGE_BEFORE,
  STAGE_MIDDLE,
  STAGE_AFTER
} from './stage'


const historyManager = HistoryManager()


const reducer = (state, action) => {
  switch (action.type) {
    case TURN_BEGIN:
      return {
        ...state,
        ai_selection: action.ai_selected,
        stage: STAGE_BEFORE
      }

    case USER_CHOOSE:
      const [ ai_point, player_point ] = resolve_fight(state.ai_selection, action.value)

      historyManager.addToHistory(state.ai_selection, action.value, [ai_point, player_point])

      return {
        ...state,
        player_selection: action.value,
        ai_points: state.ai_points + ai_point,
        player_points: state.player_points + player_point,
        history: historyManager.returnHistory(),
        stage: STAGE_MIDDLE
      }

    case TURN_COMPLETE:
      return {
        ...state,
        ai_select: null,
        player_select: null,
        stage: STAGE_AFTER
      }

    default:
      return state
  }
}

function consoleWrapper(state, action) {
  console.log('Stage before action:', state)
  console.log('Action:', action)

  let newStage
  try
  {
    newStage = reducer(state, action)
    return newStage
  }
  finally
  {
      console.log('Stage after action:', newStage)
      console.log('-----------------------------------------------------------')
  }
}

export default consoleWrapper
