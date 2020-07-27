import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import React, { useState } from 'react'

const UpdateMenu = (props) => {
    const [jenisMenu, setJenisMenu] = useState(props.result.jenis_menu)
    const [namaMenu, setNamaMenu] = useState(props.result.nama_menu)
    const [hargaMenu, setHargaMenu] = useState(props.result.harga_menu)
    const [stokMenu, setStokMenu] = useState(props.result.stok_menu)
    const [idMenu] = useState(props.result.id_menu)

    const handleChangeInputJenis = (event) => { setJenisMenu(event.target.value) }
    const handleChangeInputNamaMenu = (event) => { setNamaMenu(event.target.value) }
    const handleChangeInputHargaMenu = (event) => { setHargaMenu(event.target.value) }
    const handleChangeInputStokMenu = (event) => { setStokMenu(event.target.value) }

    const changeMenu = () => {
        props.updateMenuByID(jenisMenu, namaMenu, hargaMenu, stokMenu, idMenu)
        props.onHide()
    }

    const { show, onHide } = props

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
                    <Button variant="primary" onClick={() => changeMenu()}> Save</Button>
                    <Button variant="secondary" onClick={() => onHide()}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UpdateMenu