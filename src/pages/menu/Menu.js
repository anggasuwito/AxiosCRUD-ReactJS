import React, { Component } from 'react';
import { getAllMenus } from "../../api/menu/MenuServices.js";
import MenuList from "./MenuList.js";
import CreateMenu from './CreateMenu.js';
import UpdateMenu from './UpdateMenu'
import DeleteMenu from './DeleteMenu.js';
class Menu extends Component {
    state = {
        message: "",
        result: [],
        isLoading: true,
        onCreate: false,
        onUpdate: false
    }
    componentDidMount() {
        getAllMenus().then((menus) => {
            this.setState({ ...this.state, message: menus.data.messages, result: menus.data.result, isLoading: false })
        }).catch((error) => {
            console.log(error);
        })

    }
    handleCreate = () => {
        this.setState({
            ...this.state,
            onCreate: true,
            onUpdate: false,
            onDelete: false
        })
    }
    updateByIndex = (index, jenis, nama, harga, stok) => {
        this.setState({
            ...this.state,
            indexMenu: index,
            jenisMenu: jenis,
            namaMenu: nama,
            hargaMenu: harga,
            stokMenu: stok,
            onUpdate: true,
            onCreate: false,
            onDelete: false
        })
    }
    deleteByIndex = (index) => {
        this.setState({
            ...this.state,
            indexMenu: index,
            onUpdate: false,
            onCreate: false,
            onDelete: true
        })
    }
    render() {
        if (this.state.onCreate) {
            return (
                <CreateMenu />
            )
        }
        if (this.state.onUpdate) {
            return (
                <UpdateMenu indexFromMenu={this.state.indexMenu} jenis={this.state.jenisMenu} nama={this.state.namaMenu} harga={this.state.hargaMenu} stok={this.state.stokMenu} />
            )
        }
        if(this.state.onDelete){
            return(
                <DeleteMenu indexFromMenu={this.state.indexMenu}/>
            )
        }
        return (
            <div>
                <div className="container">
                    <br />
                    <button className="btn btn-outline-primary" type="button" onClick={this.handleCreate}>Create Menu</button>
                    <div>
                        <MenuList result={this.state.result} isLoading={this.state.isLoading} updateByIndex={this.updateByIndex} deleteByIndex={this.deleteByIndex} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu
