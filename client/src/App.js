import React, { Component } from 'react';
import axios from 'axios';
import Projects from './components/Projects';



class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:9000/projects')
    .then( response => this.setState( { projects: response.data }))
    .catch(error => console.log(error));
  }


  render() {
    return (
      <div>
        <Projects projects={this.state.projects}/>

      </div>
    );
  }
}

export default App;
