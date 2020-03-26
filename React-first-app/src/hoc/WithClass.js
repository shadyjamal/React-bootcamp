import React from 'react';

const withCLass = (props, classes) => {
    return <div className={classes}>
        {props.children}
    </div>
}

export default withCLass;