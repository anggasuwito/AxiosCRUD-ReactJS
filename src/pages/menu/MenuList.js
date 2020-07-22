import React from 'react';
import { Table } from "react-bootstrap/cjs";
import LoadingScreen from '../../components/LoadingScreen.js';
import accounting from 'accounting/accounting.js'

const MenuList = (props) => {
    const { isLoading, result, detailsMenu, updateMenuByID, deleteMenuByID } = props
    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }
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
                    {result.map((menu, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{menu.jenis_menu}</td>
                            <td>{menu.nama_menu}</td>
                            <td>{accounting.formatMoney(menu.harga_menu, "Rp. ", 2, ".", ",")}</td>
                            <td>{menu.stok_menu}</td>
                            <td>
                                <button onClick={() => detailsMenu(menu)}>DETAILS</button>
                                <button onClick={() => updateMenuByID(menu)}>Update</button>
                                <button onClick={() => deleteMenuByID(menu.id_menu)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default MenuList;