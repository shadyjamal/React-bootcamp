import React,{Component} from 'react';
import classes from './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'
import WithClass from '../../../hoc/WithClass'

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render(){
        console.log('Person.js Compoment rendering')
        return(
            <WithClass>
            <div className={classes.Person}>
                <p onClick={this.props.click}>Im {this.props.name} and i'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" 
                    value={this.props.name} 
                    onChange={this.props.changed}
                    // ref= {(inputEl) => {this.inputElement = inputEl}}
                    ref= {this.inputElementRef}
                    >  
                    
                </input>
            </div>
            </WithClass>
            )
    }
    
};
export default Person;