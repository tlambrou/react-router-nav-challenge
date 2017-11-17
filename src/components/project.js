import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ProjectDetails from './project-details'


class Project extends Component {

  constructor(props) {
    super(props)
    this.state = {
      titles: ['One', 'Two', 'Three'],
      selected: null
    }
  }

  selected(index) {
    this.setState({selected: index})
  }

  displayLinks() {
    return this.state.titles.map((title, index) => {
      const url = `${this.props.match.url}/${title}`
      return <li key={index}><Link key={index} className={
          (this.state.selected === index) ? `nav-link selected` : `nav-link`
        } onClick={() => this.selected(index)} to={url}>{title}</Link></li>
    })
  }

  render() {
    const url = this.props.match.url

    return (
      <div className="page project">
        <h1>Projects</h1>
        <ul>{this.displayLinks()}</ul>
        <Route path={`${url}/:title`} component={ProjectDetails} />
      </div>
    )
  }
}

export default Project
