import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import LoginForm from '../pages/login/LoginForm'
import Menu from './../pages/menu/Menu'
import Transaksi from './../pages/transaksi/Transaksi'
import Navbar from '../components/Navbar'
import NotFound from './../components/NotFound'

const routes = [
    { id: 1, path: '/home', component: HomePage },
    { id: 2, path: '/menu', component: Menu },
    { id: 3, path: '/transaksi', component: Transaksi }
]
class Navigation extends Component {
    state = {
        auth: false
    }
    componentDidMount() {
        if (sessionStorage.getItem("auth") !== null) {
            this.setState({
                auth: true,
            });
            this.props.history.push({
                pathname: this.props.location.pathname,
            });
        }
    }
    onLogin = () => {
        this.setState({
            auth: true
        })
        sessionStorage.setItem("auth", "loggedIn");
        this.props.history.push({
            pathname: "/home"
        })
    }
    onLogout = () => {
        this.setState({
            auth: false
        })
        sessionStorage.removeItem("auth")
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
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>

        );
    }
}

export default withRouter(Navigation);