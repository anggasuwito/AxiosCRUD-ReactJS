import React from 'react';
import { Table } from "react-bootstrap/cjs";
import LoadingScreen from '../../components/LoadingScreen.js';
import accounting from 'accounting'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

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
                                <Button variant="secondary" onClick={() => detailsMenu(menu)}> <FontAwesomeIcon icon={faEye} /></Button>
                            </td>
                            <td>
                                <Button variant="success" onClick={() => updateMenuByID(menu)}> <FontAwesomeIcon icon={faEdit} /></Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => deleteMenuByID(menu.id_menu)}> <FontAwesomeIcon icon={faTrash} /></Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { result: state.result }
}

export default connect(mapStateToProps)(MenuList);