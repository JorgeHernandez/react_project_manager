import React, { Component } from 'react';
import '../App.css';
import ProjectItem from './projectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map((project)=>{
        console.log(project);
        return <ProjectItem key={project.title} project={project} />
      });
    }

    console.log(this.props);
    return (
      <div className="Projects">
      My Projects
      {projectItems}
      </div>
    );
  }
}

export default Projects;
