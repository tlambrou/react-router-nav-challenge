import React, { Component } from 'react'
import Button from './button'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedButton: 0 }
  }

  handleClick() {

  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} butt={0}>Home</Button>
        <Button onClick={this.handleClick} butt={1}>Project</Button>
        <Button onClick={this.handleClick} butt={2}>Info</Button>
      </div>
    )
  }
}
