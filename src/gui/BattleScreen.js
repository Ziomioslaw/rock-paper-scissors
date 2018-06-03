import React, { Component } from 'react'

class BattleScreen extends Component {
  render() {
    return <div>
        <div className={'sign ' + this.props.player1selection}></div>
        <div className={'sign ' + this.props.player2selection}></div>
      </div>
  }
}

export default BattleScreen
