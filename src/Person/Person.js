import React from 'react';
import './Person.css'

const person = (props) => {
return(
    <div className="Person">
        <p onClick={props.click}>Im {props.name} and i'm {props.age}</p>
        <p>{props.children}</p>
        <input type="text"  value={props.name} onChange={props.changed}></input>
    </div>
)
};
export default person;