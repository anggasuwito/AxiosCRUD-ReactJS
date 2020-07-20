import React, { Component } from 'react'
import swal from 'sweetalert'

export class Navbar extends Component {

    handleLogout = () => {
        swal({
            title: "Are you sure to logout ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willLogout) => {
                if (willLogout) {
                    this.props.toPage("loginPage")
                }
            });
    }
    render() {
        let { toPage } = this.props
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    <button className="btn navbar-btn" onClick={() => toPage("homePage")}>Home</button>
                    <button className="btn navbar-btn" onClick={() => toPage("menuPage")}>Menu</button>
                    <button className="btn navbar-btn" onClick={() => toPage("transaksiPage")}>Transaksi</button>
                    <button className="btn navbar-btn" onClick={this.handleLogout}>Logout</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar
