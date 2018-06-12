import React, { Component } from 'react'
import { completeEnd } from '../logic/actions'
import store from '../logic/store'


class BattleScreen extends Component {
  onButtonClick() {
    store.dispatch(completeEnd())
  }

  render() {
    const result = 'Result of battle'

    return <section>
        <header>{result}</header>
        <div>
          <div className={'sign ' + this.props.player1selection}></div>
          <div className={'sign ' + this.props.player2selection}></div>
        </div>
        <button onClick={this.onButtonClick.bind(this)}>Continue</button>
      </section>
  }
}


export default BattleScreen
