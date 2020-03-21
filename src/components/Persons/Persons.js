import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component
{
    static getDerivedStateFromProps(props, state){
        console.log('Persons.js getDerivedStateFromProps');
        return state;
      }
      shouldComponentUpdate(nextProps, nextState)
      {
        console.log('Persons.js shouldComponentUpdate');

          return true;
      }
      getSnapshotBeforeUpdate(prevProps,prevState)
      {
          console.log('Persons.js getsnap');
          return null;
      }
      componentDidUpdate(){
          console.log('Persons.js ComponentdidUpdate')
      }
    render(){
        console.log('Persons.js component rendering')
        return this.props.persons.map((person, index) => {
            return <Person
            key={person.id}
            click={() => this.props.clicked(index)} 
            name={person.name} 
            age={person.age}
            changed={(event) => this.props.changed(event, person.id)} />
        }); 
    }
} 
  export default Persons;