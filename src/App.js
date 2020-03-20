import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {id:'eee', name: "Max", age: 28},
      {id:'effee', name: "shady", age: 28}
    ],
    otherState: 'other',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person =  {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }
  switchNameHandler = (name) => {
    this.setState({
      persons: [
        {name: name, age: 28},
        {name: "JAMAL", age: 28}
      ]
    })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({showPersons : !doesShow});
    console.log('test',this.state.showPersons);
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  render() { 
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color: 'black'
      }
    };

    let persons= null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
          </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color: 'black'
      };
    }

    let classes = [];

    if (this.state.persons.length <= 1)
      classes.push('red');
    if (this.state.persons.length < 1)
      classes.push('bold');
    return (
      <StyleRoot>
      <div className="App">
        <h1 className= {classes}>Hi first app</h1>
        <button
          style= {style} 
          onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi first app'));
  }
}


// Assignement - Chars

// class App extends Component {
//   state = {
//     userinput: ''
//   }
//   inputChangeHandler = (event) =>{
//     this.setState({userinput : event.target.value});
//   };
//   deleteCharHandler = (index) => {
//     const inp = this.state.userinput.split('');
//     inp.splice(index, 1);
//     const text = inp.join('');
//     this.setState({userinput: text});
//   }
//   render() {
//     const charList = this.state.userinput.split('').map((char,index) => {
//         return <Char 
//         charTyped={char} 
//         key={index} 
//         click={() => this.deleteCharHandler(index)}
//         />;
//       });
//     return (
//       <div>
//         <input 
//           type="text" 
//           onChange={this.inputChangeHandler} 
//           value={this.state.userinput}/>
//           <p>{this.state.userinput}</p>
//           <Validation inputLength={this.state.userinput.length}/>
//           {charList}
//       </div>
//     )
//   }
// }
export default Radium(App);
 