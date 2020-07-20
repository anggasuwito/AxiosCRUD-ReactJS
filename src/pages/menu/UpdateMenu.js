import React, { Component } from 'react'
import { getAllMenus,updateMenu } from "../../api/menu/MenuServices.js";
import Menu from './Menu';
export class UpdateMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jenisMenu: this.props.jenis,
            namaMenu: this.props.nama,
            hargaMenu: this.props.harga,
            stokMenu: this.props.stok,
            idMenu : this.props.indexFromMenu,
            cancelUpdate: false,
            isUpdated: false
        }
    }
    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({ ...this.state, [name]: event.target.value })
    }
  
    loadData = () => {
        getAllMenus()
    }

    handleUpdateMenu = () => {
        updateMenu({
            jenis_menu: this.state.jenisMenu,
            nama_menu: this.state.namaMenu,
            harga_menu: this.state.hargaMenu,
            stok_menu: this.state.stokMenu,
            menu_id:this.state.idMenu
        })
        this.setState({
            jenisMenu: this.state.jenisMenu,
            namaMenu: this.state.namaMenu,
            hargaMenu: this.state.hargaMenu,
            stokMenu: this.state.stokMenu,
            menu_id:this.state.idMenu,
            isUpdated: true
        })
        this.loadData()
    }
    handleCancel = () => {
        this.setState({
            cancelUpdate: true
        })
    }
    render() {
        if (this.state.cancelUpdate || this.state.isUpdated) {
            return (
                <Menu />
            )
        }
        return (
            <div>
                <div className="container">
                    <br />
                    <div className="card ">
                        <div className="card-header">
                            <h3>Update Menu</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <br />
                                <input className="form-control" placeholder="Jenis Menu" type="text" name="jenisMenu" value={this.state.jenisMenu} onChange={this.handleChangeInput} />
                                <br />
                                <input className="form-control" placeholder="Nama Menu" type="text" name="namaMenu" value={this.state.namaMenu} onChange={this.handleChangeInput} />
                                <br />
                                <input className="form-control" placeholder="Harga Menu" type="text" name="hargaMenu" value={this.state.hargaMenu} onChange={this.handleChangeInput} />
                                <br />
                                <input className="form-control" placeholder="Stok Menu" type="text" name="stokMenu" value={this.state.stokMenu} onChange={this.handleChangeInput} />
                                <br />
                                <br /><br />
                                <div className="App">
                                    <button className="btn btn-outline-primary" type="button" onClick={this.handleUpdateMenu}>Save</button>
                                    <button className="btn btn-outline-primary" type="button" onClick={this.handleCancel}>Cancel</button>
                                </div>
                            </form>
                            <br />
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
        )
    }
}

export default UpdateMenu
