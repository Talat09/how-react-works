import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '5px solid purple', margin: '2px' }}>
            <h2>This is Dial</h2>
            <h5>Step So FAr: {props.steps}</h5>
        </div>
    );
};

export default Dial;