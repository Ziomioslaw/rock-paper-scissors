import React, { Component } from 'react'
import { turnBegin, endGame } from '../logic/actions'
import store from '../logic/store'


class BattleScreen extends Component {
  onButtonAgainClick() {
    store.dispatch(turnBegin())
  }

  onButtonCloseClick() {
    store.dispatch(endGame())
  }

  render() {
    const data = this.props.data;

    return <section>
        <header>Result of battle</header>
        <div>
          <div className={'sign ' + data.player1.selection}>{data.player1.label}</div>
          <div className={'sign ' + data.player2.selection}>{data.player2.label}</div>
        </div>
        <footer>
          <button onClick={this.onButtonAgainClick.bind(this)}>Again</button>
          <button onClick={this.onButtonCloseClick.bind(this)}>Close</button>
        </footer>
      </section>
  }
}


export default BattleScreen
