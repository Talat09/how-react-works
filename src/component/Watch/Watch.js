import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps)
    }
    useEffect(() => {
        console.log(steps);
    }, [steps])
    return (
        <div style={{ border: '3px solid green', margin: '25px' }}>
            <h2>This is my smart watch</h2>
            <h3>This is my steps:{steps}</h3>
            <button onClick={increaseSteps}>De Dhor.......</button>
            <Display name="Super Amoled" steps={steps}></Display>
        </div>
    );
};

export default Watch;