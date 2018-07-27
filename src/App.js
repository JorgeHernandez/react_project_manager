import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects';
import AddProject from './components/addProject';
import Uuid from 'uuid';

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
        id: Uuid.v4(),
        title: "business website",
        category: "web design"
      },{
        id: Uuid.v4(),
        title: "social app",
        category: "mobile development"
      },{
        id: Uuid.v4(),
        title: "ecommerce shopping cart",
        category: "web development"
      }]}
    })
  }
  handleNewProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
    return;
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        Project manager
        <hr />
        <AddProject addProject={this.handleNewProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
