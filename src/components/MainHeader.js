import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class MainHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default MainHeader;