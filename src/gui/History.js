import React, { Component } from 'react'
import { connect } from 'react-redux'
import './History.css'


class History extends Component {
  render() {
    const history = this.props.history.map((item, index) => (
      <p key={index}>
        {item[0]} {item[1]} {item[2]}
      </p>
    ))

    return (
      <section>
        <header>Header</header>
        <section>
          {history}
        </section>
      </section>
    )
  }
}

const mapStateToProps = store => {
  return {
    history: store.history ? store.history.slice() : []
  }
}

export default connect(mapStateToProps)(History)
