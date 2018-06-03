import React, { Component } from 'react'
import History from './History'
import PointsDisplay from './PointsDisplay'
import PlayTable from './PlayTable'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <PointsDisplay />
        <PlayTable />
        <History />
      </div>
    )
  }
}

export default App
