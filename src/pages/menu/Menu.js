import React, { useState, useEffect } from 'react'
import { getAllMenus, createMenu, updateMenu, deleteMenu } from "../../api/menu/MenuServices.js";
import MenuList from "./MenuList.js";
import CreateMenu from './CreateMenu.js';
import UpdateMenu from './UpdateMenu'
import DetailMenu from './DetailsMenu.js';
import swal from 'sweetalert'


const Menu = () => {
    const [result, setResult] = useState([])
    const [selectedMenu, setSelectedMenu] = useState({})
    const [showDetails, setShowDetails] = useState(false)
    const [showCreateMenu, setShowCreateMenu] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadData()
    },[])
    const loadData = () => {
        getAllMenus().then((response) => {
            if (response.status === 200) {
                setResult(response.data.result)
                setIsLoading(false)
            }
        })
    }

    const showDetailsMenu = (result) => {
        setShowDetails(!showDetails)
        setSelectedMenu({ ...result })
    }

    const hideDetailsMenu = () => {
        setShowDetails(!showDetails)
        setSelectedMenu({})
    }

    const handleCreateModal = () => {
        setShowCreateMenu(!showCreateMenu)
    }

    const addNewMenu = (jenisMenu, namaMenu, hargaMenu, stokMenu) => {
        createMenu({
            jenis_menu: jenisMenu,
            nama_menu: namaMenu,
            harga_menu: hargaMenu,
            stok_menu: stokMenu
        }).then(() => {
            setShowCreateMenu(!showCreateMenu)
            loadData()
        })
    }

    const showUpdateModal = (result) => {
        setShowUpdate(!showUpdate)
        setSelectedMenu({ ...result })
    }

    const hideUpdateModal = () => {
        setShowUpdate(!showUpdate)
        setSelectedMenu({})
    }

    const updateMenuByID = (jenis, nama, harga, stok, id) => {
        updateMenu({
            jenis_menu: jenis,
            nama_menu: nama,
            harga_menu: harga,
            stok_menu: stok,
            id_menu: id
        }).then(() => {
            loadData()
        })
    }

    const deleteMenuByID = (id) => {
        swal({
            title: "Are you sure want to delete this data ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteMenu(id)
                        .then(() => {
                            loadData()
                        })
                }
            });
    }

    let updateModal
    if (showUpdate) {
        updateModal = <UpdateMenu show={showUpdate} onHide={hideUpdateModal} result={selectedMenu} updateMenuByID={updateMenuByID} />
    }
    return (
        <div>
            <div className="container">
                <br />
                <CreateMenu show={showCreateMenu} handleCreateModal={handleCreateModal} addNewMenu={addNewMenu} />
                <div>
                    <MenuList result={result} isLoading={isLoading} detailsMenu={showDetailsMenu} updateMenuByID={showUpdateModal} deleteMenuByID={deleteMenuByID} />
                    <DetailMenu show={showDetails} onHide={hideDetailsMenu} result={selectedMenu} />
                    {updateModal}
                </div>
            </div>
        </div>
    )
   
}

export default Menu
