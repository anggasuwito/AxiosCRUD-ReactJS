import React, { Component } from 'react';
import { getAllMenus, createMenu, updateMenu, deleteMenu } from "../../api/menu/MenuServices.js";
import MenuList from "./MenuList.js";
import CreateMenu from './CreateMenu.js';
import UpdateMenu from './UpdateMenu'
import DetailMenu from './DetailsMenu.js';
import swal from 'sweetalert'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            result: [],
            selectedMenu: {},
            showDetails: false,
            showCreateMenu: false,
            showUpdate: false,
            isLoading: true,
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        getAllMenus().then((response) => {
            if (response.status === 200) {
                this.setState({ ...this.state, message: response.data.messages, result: response.data.result, isLoading: false })
            }
        })
    }

    showDetailsMenu = (result) => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            selectedMenu: { ...result }
        })
    }

    hideDetailsMenu = () => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            selectedMenu: {}
        })
    }

    handleCreateModal = () => {
        this.setState({
            ...this.state,
            showCreateMenu: !this.state.showCreateMenu,
        })
    }

    addNewMenu = (jenisMenu, namaMenu, hargaMenu, stokMenu) => {
        createMenu({
            jenis_menu: jenisMenu,
            nama_menu: namaMenu,
            harga_menu: hargaMenu,
            stok_menu: stokMenu
        }).then(() => {
            this.setState({
                ...this.state,
                showCreateMenu: !this.state.showCreateMenu,
            })
            this.loadData()
        })
    }

    showUpdateModal = (result) => {
        this.setState({
            ...this.state,
            showUpdate: !this.state.showUpdate,
            selectedMenu: { ...result }
        })
    }

    hideUpdateModal = () => {
        this.setState({
            ...this.state,
            showUpdate: !this.state.showUpdate,
            selectedMenu: {}
        })
    }

    updateMenuByID = (jenis, nama, harga, stok, id) => {
         updateMenu({
            jenis_menu: jenis,
            nama_menu: nama,
            harga_menu: harga,
            stok_menu: stok,
            id_menu: id
        }).then(() => {
            this.loadData()
        })
    }
    deleteMenuByID = (id) => {
        swal({
            title: "Are you sure want to delete this data ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteMenu(id)
                        .then(() => {
                            this.loadData()
                        })
                }
            });
    }
    render() {
        let updateModal
        if (this.state.showUpdate) {
            updateModal = <UpdateMenu show={this.state.showUpdate} onHide={this.hideUpdateModal} result={this.state.selectedMenu} updateMenuByID={this.updateMenuByID} />
        }
        return (
            <div>
                <div className="container">
                    <br />
                    <CreateMenu show={this.state.showCreateMenu} handleCreateModal={this.handleCreateModal} addNewMenu={this.addNewMenu} />
                    <div>
                        <MenuList result={this.state.result} isLoading={this.state.isLoading} detailsMenu={this.showDetailsMenu} updateMenuByID={this.showUpdateModal} deleteMenuByID={this.deleteMenuByID} />
                        <DetailMenu show={this.state.showDetails} onHide={this.hideDetailsMenu} result={this.state.selectedMenu} />
                        {updateModal}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu
