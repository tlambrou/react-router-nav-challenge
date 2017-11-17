import React, { Component } from 'react'

class ProjectDetails extends Component {

  render() {

    const title = this.props.match.params.title

    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

export default ProjectDetails
