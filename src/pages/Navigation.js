import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import LoginForm from '../pages/login/LoginForm'
import Menu from './../pages/menu/Menu'
import Transaksi from './../pages/transaksi/Transaksi'
import Navbar from '../components/Navbar'

const routes = [
    { id: 1, path: '/home', component: HomePage },
    { id: 2, path: '/menu', component: Menu },
    { id: 3, path: '/transaksi', component: Transaksi }
]
class Navigation extends Component {
    state = {
        auth: false
    }
    onLogin = () => {
        this.setState({
            auth: true
        })
        this.props.history.push({
            pathname: "/home"
        })
    }
    onLogout = () => {
        this.setState({
            auth: false
        })
        this.props.history.push({
            pathname: "/"
        })
    }

    render() {
        const routeList = routes.map((route) => {
            return <Route
                key={route.id}
                path={route.path} render={
                    (props) => {
                        return this.state.auth ?
                            <route.component {...props} /> : <Redirect to='/' />
                    }
                } />
        });
        return (
            <div>
                <Navbar logout={this.onLogout} auth={this.state.auth} />
                <Switch>
                    <Route path="/" exact
                        render={(props) => {
                            return <LoginForm {...props} onLogin={this.onLogin} />
                        }} />
                    {routeList}
                </Switch>
            </div>

        );
    }
}

export default withRouter(Navigation);