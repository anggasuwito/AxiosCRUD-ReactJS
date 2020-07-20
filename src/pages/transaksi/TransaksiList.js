import React, { Component } from 'react';
import { Table } from "react-bootstrap/cjs";
import LoadingScreen from '../../components/LoadingScreen.js';
 
class TransaksiList extends Component {
    render() {
        let { isLoading, result } = this.props
        if (isLoading) {
            return (
                <LoadingScreen />
            )
        }
        let listtransaksi = result.map((transaksi, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{transaksi.tanggal_transaksi}</td>
                <td>{transaksi.jenis_menu}</td>
                <td>{transaksi.nama_menu}</td>
                <td>{transaksi.harga_menu}</td>
                <td>{transaksi.quantity}</td>
                <td>{transaksi.total_harga}</td>
            </tr>
        })
        return (
            <div style={{ marginTop: 10 }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Tanggal Transaksi</th>
                            <th>Jenis Menu</th>
                            <th>Nama Menu</th>
                            <th>Harga Menu</th>
                            <th>Quantity</th>
                            <th>Total Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listtransaksi}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default TransaksiList;