import React, { Component } from 'react';
import '../App.css';

class ProjectItem extends Component {
  deleteProyect(id) {
    this.props.onDelete(id)
    return;
  }
  render() {
    return (
      <li className="Projects">
          <b>{this.props.project.title}:</b>
          {this.props.project.category}
          <a href="#" onClick={this.deleteProyect.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
