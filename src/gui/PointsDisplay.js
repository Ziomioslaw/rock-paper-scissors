import React, { Component } from 'react'
import { connect } from 'react-redux'
import './PointsDisplay.css'


class PointsDisplay extends Component {
  render() {
    console.log('x', this.props  )
    const percentage_span = this.props.all_plays
      ? (this.props.player_points / this.props.all_plays).toFixed(2) + '%'
      : '-'

    return <header>
      <span>AI: {this.props.ai_points}</span>
      <span>You: {this.props.player_points}</span>
      <span>{percentage_span}</span>
    </header>
  }
}

const mapStateToProps = store => {
  console.log(store.history)
  return {
    ai_points: store.ai_points,
    player_points: store.player_points,
    all_plays: (store.history || false)
      ? store.history.length
      : 0
  }
}

export default connect(mapStateToProps)(PointsDisplay)
