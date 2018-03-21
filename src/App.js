import React, { Component } from 'react'
import History from './History'
import SelectionScreen from './SelectionScreen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectionScreen />
        <History />
      </div>
    )
  }
}

export default App
