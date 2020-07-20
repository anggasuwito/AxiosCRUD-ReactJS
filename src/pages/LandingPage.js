import React, { Component } from 'react'
import Navbar from './../components/Navbar';
import HomePage from './home/HomePage';
import Menu from './menu/Menu';
import Transaksi from './transaksi/Transaksi';
import LoadingScreen from '../components/LoadingScreen';
import LoginForm from './login/LoginForm';

export class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goToPage: "",
        }
    }

    handlePage = (onPage) => {
        this.setState({
            goToPage: onPage
        })
    }

    render() {
        let showPage
        if (this.state.goToPage === "" || this.state.goToPage === "homePage") {
            showPage = <HomePage />
        } else if (this.state.goToPage === "menuPage") {
            showPage = <Menu />
        } else if (this.state.goToPage === "transaksiPage") {
            showPage = <Transaksi />
        } else if (this.state.goToPage === "loginPage") {
            return (<LoginForm />)
        } else {
            showPage = <LoadingScreen />
        }
        return (
            <div>
                <Navbar toPage={this.handlePage} />
                {showPage}
            </div>
        )
    }
}

export default LandingPage
