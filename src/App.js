import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects';
import AddProject from './components/addProject';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
    this.setState(()=>{
      return {projects: [{
        title: "business website",
        category: "web design"
      },{
        title: "social app",
        category: "mobile development"
      },{
        title: "ecommerce shopping cart",
        category: "web development"
      }]}
    })
  }
  render() {
    return (
      <div className="App">
        Project manager
        <hr />
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
