import React, { Component } from 'react';
import axios from 'axios';
import Action from './Action';



class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:9000/actions')
    .then( response => this.setState( { actions: response.data }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
            {this.state.actions.map(action => {
                return (
                    <div key={action.id}>
                        <Action action={action}/>
                </div> )})}
        </div>
    );
  }
}

export default Actions;