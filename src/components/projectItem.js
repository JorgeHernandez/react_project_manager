import React, { Component } from 'react';
import '../App.css';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Projects">
          <b>{this.props.project.title}:</b> {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
