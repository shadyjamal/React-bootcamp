import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "shady", age: 28}
    ]
  }

  switchNameHandler = () => {
    this.setState({})
  } 
  render() {
    return (
      <div className="App">
        <h1>Hi first app</h1>
        <button onClick={this.switchNameHandler}>switch Person</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>special</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi first app'));
  }
}

export default App;
