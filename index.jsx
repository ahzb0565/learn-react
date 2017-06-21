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
    return <p>Hi {props.name}, This element created by function component</p>
}

// A simple class component
class ClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {className: 'Class Component'}
    }
    render(){
        return <p>Hello {this.props.name}, This is a class componet, named {this.state.className}</p>;
    }
}

// Composing the components together
function Components(){
    return <ul>
        <li><FuncComponent name="Bob" /></li>
        <li><ClassComponent name="Bob" /></li>
    </ul>;
}

// Clock rendered by components
class ClassClock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick(){
        this.setState((prevState, props) => {return {date: new Date()};});
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return <spam>now is {this.state.date.toLocaleTimeString()}</spam>;
    }
}

// Generage clocks div
function Clocks(){
    return <ul>
        <li>Clock created by class: <ClassClock /></li>
    </ul>;
}

ReactDOM.render(<Components />, document.getElementById('Components'));
ReactDOM.render(<Clocks />, document.getElementById('Clocks'));