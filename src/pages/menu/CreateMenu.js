import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import React, { Component } from 'react'

export class CreateMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jenisMenu: "",
            namaMenu: "",
            hargaMenu: "",
            stokMenu: ""
        }
    }

    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }

    submitNewMenu = () => {
        this.props.addNewMenu(this.state.jenisMenu, this.state.namaMenu, this.state.hargaMenu, this.state.stokMenu)
        this.setState({
            ...this.state,
            jenisMenu: "",
            namaMenu: "",
            hargaMenu: "",
            stokMenu: ""
        })
    }

    render() {
        const { show, handleCreateModal } = this.props
        return (
            <div>
                <button className="btn btn-outline-primary" type="button" onClick={() => handleCreateModal()}>Create Menu</button>
                <Modal
                    show={show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton onClick={() => handleCreateModal()}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Create New Menu
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
                        <Button variant="primary" onClick={() => this.submitNewMenu()}> Save</Button>
                        <Button variant="secondary" onClick={() => handleCreateModal()}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default CreateMenu

