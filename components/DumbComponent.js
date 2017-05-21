import React, { Component } from 'react'

export default class DumbComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { mood: 'happy' }
  }

  handleClick() {
    const newMood = this.state.mood == 'happy' ? 'sad' : 'happy'
    this.setState({ mood: newMood })
  }

  render() {
    return (
      <div onClick={ this.handleClick.bind(this) }>
        {this.state.mood}
      </div>
    )
  }
}
