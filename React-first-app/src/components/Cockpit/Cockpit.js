import React, { useRef, useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const togglebtnRef = useRef(null);

    useEffect(() => {
      console.log('Cockpit useeffect')
      togglebtnRef.current.click();
    }, []);
    let assignedClasses = [];
    let btnClass= '';

    if (props.showPersons)
        btnClass = classes.Red;
    if (props.persons.length <= 1)
      assignedClasses.push(classes.bold);
    if (props.persons.length < 1)
      assignedClasses.push(classes.red);
    return (
        <div className={classes.Cockpit}>
            <h1 className= {assignedClasses.join(' ')}>{props.title}</h1>
            <button
                ref= {togglebtnRef}
                className={btnClass}
                onClick={props.toggled}>Toggle Person</button>
        </div>
    );
};

export default cockpit;