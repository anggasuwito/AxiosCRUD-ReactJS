import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import React, { useState } from 'react'

const CreateMenu = (props) => {
    const [jenisMenu, setJenisMenu] = useState("")
    const [namaMenu, setNamaMenu] = useState("")
    const [hargaMenu, setHargaMenu] = useState("")
    const [stokMenu, setStokMenu] = useState("")

    const handleChangeInputJenis = (event) => { setJenisMenu(event.target.value) }
    const handleChangeInputNamaMenu = (event) => { setNamaMenu(event.target.value) }
    const handleChangeInputHargaMenu = (event) => { setHargaMenu(event.target.value) }
    const handleChangeInputStokMenu = (event) => { setStokMenu(event.target.value) }

    const submitNewMenu = () => {
        props.addNewMenu(jenisMenu, namaMenu, hargaMenu, stokMenu)
        setJenisMenu("")
        setNamaMenu("")
        setHargaMenu("")
        setStokMenu("")
    }
    const { show, handleCreateModal } = props
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
                                        <input className="form-control" onChange={handleChangeInputJenis} value={jenisMenu} placeholder="Masukkan Jenis" type="text" />
                                        <br />
                                        <label>Nama</label>
                                        <input className="form-control" onChange={handleChangeInputNamaMenu} value={namaMenu} placeholder="Masukkan Nama" type="text" />
                                        <br />
                                        <label>Harga</label>
                                        <input className="form-control" onChange={handleChangeInputHargaMenu} value={hargaMenu} placeholder="Masukkan Harga" type="number" />
                                        <br />
                                        <label>Stok</label>
                                        <input className="form-control" onChange={handleChangeInputStokMenu} value={stokMenu} placeholder="Masukkan Stok" type="number" />
                                    </form>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => submitNewMenu()}> Save</Button>
                    <Button variant="secondary" onClick={() => handleCreateModal()}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>)
}

export default CreateMenu

