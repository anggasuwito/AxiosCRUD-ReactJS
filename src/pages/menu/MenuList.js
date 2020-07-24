import React from 'react';
import { Table } from "react-bootstrap/cjs";
import LoadingScreen from '../../components/LoadingScreen.js';
import accounting from 'accounting/accounting.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap'

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
                        <th colSpan="3">Actions</th>
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
                                <Button> <FontAwesomeIcon onClick={() => detailsMenu(menu)} icon={faEye} /></Button>
                            </td>
                            <td>
                                <Button> <FontAwesomeIcon onClick={() => updateMenuByID(menu)} icon={faEdit} /></Button>
                            </td>
                            <td>
                                <Button> <FontAwesomeIcon onClick={() => deleteMenuByID(menu.id_menu)} icon={faTrash} /></Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default MenuList;
