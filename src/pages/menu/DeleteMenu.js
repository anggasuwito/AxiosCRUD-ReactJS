import React, { Component } from 'react'
import { getAllMenus, deleteMenu } from "../../api/menu/MenuServices.js";
import Menu from './Menu';
import swal from 'sweetalert'

export class DeleteMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.indexFromMenu,
            cancelDelete: false,
            isDeleted: false
        }
    }

    componentDidMount() {
        swal({
            title: "Are you sure want to delete this data ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.removeMenu()
                } else {
                    this.cancelDeleteMenu()
                }
            });
    }

    loadData = () => {
        getAllMenus()
    }

    removeMenu = () => {
        deleteMenu(this.state.index)
        this.setState({
            isDeleted: true,
        })
        this.loadData()
    }

    cancelDeleteMenu = () => {
        this.setState({
            cancelDelete: true
        })
    }

    render() {
        if (this.state.cancelDelete || this.state.isDeleted) {
            return (
                <Menu />
            )
        }
        return (
            <div>
                <Menu/>
            </div>
        )
    }
}

export default DeleteMenu
