import React, { Component } from 'react'
import './SelectionScreen.css'
import store from './store'
import {
  chooseRock,
  choosePaper,
  chooseScissors,
  turnBegin
} from './actions'

class SelectionScreen extends Component {

  onButtonClick(type: string) {
    switch (type) {
      case 'rock':
        store.dispatch(chooseRock())
        break

      case 'paper':
        store.dispatch(choosePaper())
        break

      case 'scissors':
        store.dispatch(chooseScissors())
        break

      default:
        throw new Error('Unknown button: ' + type)
    }

    store.dispatch(turnBegin())
  }

  render() {
    return (
      <section>
        <header>Choose your sign:</header>
        <section>
          <div className="sign rock" onClick={this.onButtonClick.bind(this, 'rock')}>Rock</div>
          <div className="sign paper" onClick={this.onButtonClick.bind(this, 'paper')}>Paper</div>
          <div className="sign scissors" onClick={this.onButtonClick.bind(this, 'scissors')}>Scissors</div>
        </section>
      </section>
    )
  }
}

export default SelectionScreen
