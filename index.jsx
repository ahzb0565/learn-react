import React from 'react';
import ReactDOM from 'react-dom';

// A tick to show how does jsx like
function tick(){
    const element = (
        <div>
            <h1>Hello World!</h1>
            <p>now is {new Date().toLocaleTimeString()}</p>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );

}

setInterval(tick, 1000);

// A simple prop component
function Welcome(prop){
    return <p>This element created by props object. prop.name = {prop.name}</p>
}

const propElement = <Welcome name='Sara'/>  // User defined component

ReactDOM.render(propElement, document.getElementById('simpleProp'));