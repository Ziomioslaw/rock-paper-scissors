import React, { Component } from 'react'
import './SelectionScreen.css'
import store from '../logic/store'
import {
  chooseRock,
  choosePaper,
  chooseScissors
} from '../logic/actions'


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
        throw new Error(`Unknown button: ${type}`)
    }
  }

  render() {
    return (
      <section>
        <header>Choose your sign:</header>
        <section className="signs">
          <div className="sign rock" onClick={this.onButtonClick.bind(this, 'rock')}></div>
          <div className="sign paper" onClick={this.onButtonClick.bind(this, 'paper')}></div>
          <div className="sign scissors last" onClick={this.onButtonClick.bind(this, 'scissors')}></div>
        </section>
      </section>
    )
  }
}

export default SelectionScreen
