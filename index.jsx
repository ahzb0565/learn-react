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

// A simple function component
function FuncComponent(props){
    return <li>Hi {props.name}, This element created by function component</li>
}

// A simple class component
class ClassComponent extends React.Component {
    render(){
        return <li>Hello {this.props.name}, This is a class componet</li>;
    }
}

// Composing the components together
function Components(){
    return <ul>
        <FuncComponent name="Bob" />
        <ClassComponent name="Bob" />
    </ul>;
}

ReactDOM.render(<Components />, document.getElementById('Components'));