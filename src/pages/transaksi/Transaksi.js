import React, { Component } from 'react';
import { getAllTransaksi } from "../../api/transaksi/TransaksiServices.js";
import TransaksiList from "./TransaksiList.js";

export class Transaksi extends Component {
    state = {
        message: "",
        result: [],
        isLoading: true,
    }
    componentDidMount() {
        getAllTransaksi().then((transactions) => {
            console.log(transactions.data);
            this.setState({ ...this.state, message: transactions.data.messages, result: transactions.data.result, isLoading: false })
        }).catch((error) => {
            console.log(error);
        })

    }

    render() {
        return (
            <div>
                <div className="container">
                <br />
                    <div>
                        <TransaksiList result={this.state.result} isLoading={this.state.isLoading} updateByIndex={this.updateByIndex} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Transaksi
