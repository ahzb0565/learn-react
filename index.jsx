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
        setResult(this.state.isToggleOn);
        console.log('toggle2 clicked, result is '+ this.state.isToggleOn);
    }

    render(){
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


function LoginButton(props){
    return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props){
    return <button onClick={props.onClick}>Logout</button>;
}
function UserGreeting(props){
    return <p>Hi, welcome back</p>;
}
function GuestGreetiing(){
    return <p>Hi stranger, please login</p>;
}
function Greeting(props){
    if(props.isLoggedIn){
        return <UserGreeting />;
    }else{
        return <GuestGreetiing />;
    }
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(){
        this.setState({isLoggedIn: true});
    }
    logout(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const loggedIn = this.state.isLoggedIn;
        let button = null;
        if(loggedIn){
            button = <LogoutButton onClick={this.logout} />;
        }else{
            button = <LoginButton onClick={this.login} />;
        }
        return (
            <div><Greeting isLoggedIn={loggedIn}/>{button}</div>
        );
    }
}

function ListItem(props){
    return <li>{props.value}</li>;
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map(number => (
        <ListItem key={number.toString()} value={number} />
    ));
    return <ul>{listItems}</ul>;
}

ReactDOM.render(<Components />, document.getElementById('Components'));
ReactDOM.render(<Clocks />, document.getElementById('Clocks'));
ReactDOM.render(<Toggles />, document.getElementById('toggles'));
ReactDOM.render(<LoginControl />, document.getElementById('loginControl'));
ReactDOM.render(<NumberList numbers={[1,2,3,4,5]} />, document.getElementById('numberList'));