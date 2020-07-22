import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import React, { Component } from 'react'

export class UpdateMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jenisMenu: this.props.result.jenis_menu,
            namaMenu: this.props.result.nama_menu,
            hargaMenu: this.props.result.harga_menu,
            stokMenu: this.props.result.stok_menu,
            idMenu: this.props.result.id_menu
        }
    }

    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
        console.log("state", this.state)
    }
    changeMenu = () => {
        this.props.updateMenuByID(this.state.jenisMenu, this.state.namaMenu, this.state.hargaMenu, this.state.stokMenu, this.state.idMenu)
        this.props.onHide()
    }

    render() {
        const { show, onHide } = this.props
        return (
            <div>
                <Modal
                    show={show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton onClick={() => onHide()}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Menu
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="container">
                                <br />
                                <div className="card ">

                                    <div className="card-body">
                                        <form>
                                            <br />
                                            <label>Jenis</label>
                                            <input className="form-control" name="jenisMenu" onChange={this.handleChangeInput} value={this.state.jenisMenu} placeholder="Masukkan Jenis" type="text" />
                                            <br />
                                            <label>Nama</label>
                                            <input className="form-control" name="namaMenu" onChange={this.handleChangeInput} value={this.state.namaMenu} placeholder="Masukkan Nama" type="text" />
                                            <br />
                                            <label>Harga</label>
                                            <input className="form-control" name="hargaMenu" onChange={this.handleChangeInput} value={this.state.hargaMenu} placeholder="Masukkan Harga" type="number" />
                                            <br />
                                            <label>Stok</label>
                                            <input className="form-control" name="stokMenu" onChange={this.handleChangeInput} value={this.state.stokMenu} placeholder="Masukkan Stok" type="number" />
                                        </form>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.changeMenu()}> Save</Button>
                        <Button variant="secondary" onClick={() => onHide()}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateMenu