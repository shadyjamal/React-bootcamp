import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log('apps.js constructor');
  }
  state = {
    persons: [
      {id:'eee', name: "Max", age: 28},
      {id:'effee', name: "shady", age: 28}
    ],
    otherState: 'other',
    showPersons: false,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state){
    console.log('apps.js getDerivedStateFromProps');
    return state;
  }
  // componentWillMount(){
  //   console.log('apps.js componentWillMount');
  // }
  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('App.js shouldComponentUpdate');

      return true;
  }
  componentDidUpdate(){
      console.log('App.js ComponentdidUpdate')
  }
  componentDidMount(){
    console.log('Apps.js componentDidMount');
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person =  {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
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
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  render() { 

    let persons= null;

    if (this.state.showPersons){
      persons = (
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />
        );
        console.log(persons);
    }
    return (
      <div className={classes.App}>
        <Cockpit
          title= {this.props.appTitle}
          persons= {this.state.persons}
          showPersons= {this.state.showPersons}
          toggled= {this.togglePersonHandler}
        />
          {persons}
      </div>
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
export default App;
 