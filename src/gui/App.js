import React, { Component } from 'react'
import History from './History'
import SelectionScreen from './SelectionScreen'
import PointsDisplay from './PointsDisplay'


class App extends Component {
  render() {
    return (
      <div className="App">
        <PointsDisplay />
        <SelectionScreen />
        <History />
      </div>
    )
  }
}

export default App
