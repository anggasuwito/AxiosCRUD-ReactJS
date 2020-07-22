import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'

const DetailsMenu = (props) => {
    const { show, onHide, result: { jenis_menu, nama_menu, harga_menu, stok_menu } } = props
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={() => onHide()}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Details Menu
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
                                    <input className="form-control" value={jenis_menu} disabled type="text" />
                                    <br />
                                    <label>Nama</label>
                                    <input className="form-control" value={nama_menu} disabled type="text" />
                                    <br />
                                    <label>Harga</label>
                                    <input className="form-control" value={harga_menu} disabled type="text" />
                                    <br />
                                    <label>Stok</label>
                                    <input className="form-control" value={stok_menu} disabled type="text" />
                                </form>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => onHide()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailsMenu