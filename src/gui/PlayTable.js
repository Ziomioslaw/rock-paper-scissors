import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  STAGE_BEFORE,
  STAGE_MIDDLE,
  STAGE_AFTER
} from '../logic/stage'
import SelectionScreen from './SelectionScreen'
import BattleScreen from './BattleScreen'


class PlayTable extends Component {
  render() {
    const stage = this.renderForStage(this.props
        ? (this.props.stage || STAGE_BEFORE)
        : STAGE_BEFORE)

    return <div>{stage}</div>
  }

  renderForStage(stage) {
    switch (stage) {
      case STAGE_BEFORE:
        return <SelectionScreen />

      case STAGE_MIDDLE:
        return <BattleScreen player1selection={this.props.ai_selection}
                             player2selection={this.props.player_selection} />

      case STAGE_AFTER:
        return <div>dsfsdfsdf</div>

      default:
        throw new Error(`Unregonise stage: ${stage}`)
    }
  }
}

const mapStateToProps = store => {
  return {
    stage: store.stage,
    ai_selection: store.ai_selection,
    player_selection: store.player_selection
  }
}

export default connect(mapStateToProps)(PlayTable)
