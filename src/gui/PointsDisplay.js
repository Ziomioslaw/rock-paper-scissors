import React, { Component } from 'react'
import { connect } from 'react-redux'


class PointsDisplay extends Component {
  render() {
    return <div>
      <span>AI: {this.props.ai_points}</span>
      <span>You: {this.props.player_points}</span>
    </div>
  }
}


const mapStateToProps = store => {
  return {
    ai_points: store.ai_points,
    player_points: store.player_points
  }
}

export default connect(mapStateToProps)(PointsDisplay)
