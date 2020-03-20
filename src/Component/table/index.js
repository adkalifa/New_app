
import React, { Component } from 'react';
import style from '../../Assets/style.css';
import '../../../src/App.css';
import HeaderPage from '../Header';

class LoginPage extends Component {
    
    handleClick = () => {
        window.location.assign(HeaderPage);
        console.log(window.location.assign(HeaderPage));
    }
render() {
    return (
        <div className="App">
        <header className="login">
            <input className="username" placeholder="Username" />
            <input className="username" placeholder="Password" />
            <button type="button" className="submit" onClick={this.handleClick}>Login</button>
        </header>
        </div>
    );
    }
}

export default LoginPage;