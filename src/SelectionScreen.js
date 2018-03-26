import React, { Component } from 'react'
import s from './SelectionScreen.css'

class SelectionScreen extends Component {

  onButtonClick(type: string) {
    console.log(this, type)
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
