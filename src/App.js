import React, { Component } from 'react';
import Home from './components/home'
import Project from './components/project'
import Info from './components/info'
import ProjectDetails from './components/project-details'
import { BrowserRouter, Link, Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Projects",
          path: "/projects"
        },
        {
          name: "Info",
          path: "/info"
        }
      ],
      selected: 0
    }
  }

  selected(index) {
    this.setState({selected: index})
  }

  displayLinks() {
    return this.state.links.map((item, index) => {
      return (
        <Link
          key={index}
          className={(this.state.selected==index) ? "nav-link selected" : "nav-link"}
          onClick={() => this.selected(index)}
          to={item.path}>
            {item.name}
        </Link>
      )
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.displayLinks()}
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Project} />
          <Route path='/info' component={Info} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
