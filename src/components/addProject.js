import React, { Component } from 'react';
import '../App.css';
import Uuid from 'uuid';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {
        title: "",
        category: ""
      }
    }
  }
  static defaultProps = {
    categories: ["Web Design", "Web Developement", "Mobile Developement"]
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.title.value===''){
      alert("Title is required");
    }else{
      this.setState({
        newProject: {
          id: Uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      },()=>{
        //callback
        this.props.addProject(this.state.newProject);
      })
    }
  }
  render() {
    let categoryOptions = this.props.categories.map((category)=>{
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
      Add Project
      <br />
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label><br />
          <input type="text" ref="title" />
          <label>Category</label><br />
          <select ref="category">
            {categoryOptions}
          </select>
          <input type="submit" value="Submit" />
        </div>
      </form>
      </div>
    );
  }
}

export default AddProject;
