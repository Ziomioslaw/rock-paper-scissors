import React, { Component } from 'react'

class SelectionScreen extends Component {

  onButtonClick(type: string) {
    console.log(this, type)
  }

  render() {
    return (
      <div>
        <div onClick={this.onButtonClick.bind(this, 'rock')} className="rock">Rock</div>
        <div onClick={this.onButtonClick.bind(this, 'paper')} className="paper">Paper</div>
        <div onClick={this.onButtonClick.bind(this, 'scissors')} className="scissors">Scissors</div>
      </div>
    )
  }
}

export default SelectionScreen
