import React, { Component } from 'react';
import { Table } from "react-bootstrap/cjs";
import LoadingScreen from '../../components/LoadingScreen.js';

class MenuList extends Component {
    render() {
        let { isLoading, result, updateByIndex, deleteByIndex } = this.props
        if (isLoading) {
            return (
                <LoadingScreen />
            )
        }
        let listmenu = result.map((menu, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{menu.jenis_menu}</td>
                <td>{menu.nama_menu}</td>
                <td>{menu.harga_menu}</td>
                <td>{menu.stok_menu}</td>
                <td><button onClick={() => updateByIndex(menu.id_menu, menu.jenis_menu, menu.nama_menu, menu.harga_menu, menu.stok_menu)}>Update</button><button onClick={() => deleteByIndex(menu.id_menu)}>Delete</button></td>
            </tr>
        })
        return (
            <div style={{ marginTop: 10 }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Jenis Menu</th>
                            <th>Nama Menu</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listmenu}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default MenuList;