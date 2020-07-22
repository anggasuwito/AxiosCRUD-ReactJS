import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

class Navbar extends Component {
    toLogin = () => {
        swal({
            title: "Are you sure to logout ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willLogout) => {
                if (willLogout) {
                    this.props.logout()
                }
            });
    }
    render() {
        let showPage
        if (this.props.auth) {
            showPage = (
                <>
                    <Link to={"/home"}><button className="btn navbar-btn" >Home</button></Link>
                    <Link to={"/menu"}><button className="btn navbar-btn" >Menu</button></Link>
                    <Link to={"/transaksi"}><button className="btn navbar-btn" >Transaksi</button></Link>
                    <button className="btn navbar-btn" onClick={() => this.toLogin()}>Logout</button>
                </>)
        }
        return (
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    {showPage}
                </ul>
            </nav>
        );
    }
}

export default Navbar;