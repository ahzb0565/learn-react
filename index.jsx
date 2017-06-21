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

// A function based component
function Toggle1(){
    function handleClick(e){
        e.preventDefault();
        console.log('Toggle1 clicked');
        setResult(true);
    }
    return <button onClick={handleClick}>Toggle1</button>;
}

// A class based component
class Toggle2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);  //Bind to this
    }

    handleClick(){
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
    }

    render(){
        console.log('toggle2 clicked, result is '+ this.state.isToggleOn);
        setResult(this.state.isToggleOn);
        return <button onClick={this.handleClick}>Toggle2</button>;
    }
}

// Generate toggles
function Toggles(){
    return <ul>
        <li><Toggle1 /><small>This button rendered by a function component</small></li>
        <li><Toggle2 /><small>This button rendered by a class component</small></li>
    </ul>
}

// Show result
function setResult(result){
    var result = Boolean(result).toString();
    ReactDOM.render(<p>Result is {result}</p>, document.getElementById('result'));
}

ReactDOM.render(<Components />, document.getElementById('Components'));
ReactDOM.render(<Clocks />, document.getElementById('Clocks'));
ReactDOM.render(<Toggles />, document.getElementById('toggles'));