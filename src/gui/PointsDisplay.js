import React, { Component } from 'react'
import { connect } from 'react-redux'
import './PointsDisplay.css'


class PointsDisplay extends Component {
  render() {
    return <header>
      <span>AI: {this.props.ai_points}</span>
      <span>You: {this.props.player_points}</span>
    </header>
  }
}


const mapStateToProps = store => {
  return {
    ai_points: store.ai_points,
    player_points: store.player_points
  }
}

export default connect(mapStateToProps)(PointsDisplay)
