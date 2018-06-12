import React, { Component } from 'react'

class BattleScreen extends Component {
  render() {
    const result = 'Result of battle'

    return <section>
        <header>{result}</header>
        <div>
          <div className={'sign ' + this.props.player1selection}></div>
          <div className={'sign ' + this.props.player2selection}></div>
        </div>
        <button>Continue</button>
      </section>
  }
}

export default BattleScreen
