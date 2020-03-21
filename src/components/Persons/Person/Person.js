import React,{Component} from 'react';
import classes from './Person.css'

class Person extends Component {
    render(){
        console.log('Person.js Compoment rendering')
        return(
            <div className={classes.Person}>
                <p onClick={this.props.click}>Im {this.props.name} and i'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text"  value={this.props.name} onChange={this.props.changed}></input>
            </div>
            )
    }
    
};
export default Person;