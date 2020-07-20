import axios from 'axios';

const getAllMenus = async () => {
    let menus = await axios.get("http://localhost:3000/allmenus")
    return menus
}

const createMenu = async (form) => {
    let newMenu = await axios.post("http://localhost:3000/menu",form)
    return newMenu
}
const updateMenu = async (form) => {
    let changeMenu = await axios.put("http://localhost:3000/menu/"  + form.menu_id, form)
    return changeMenu
}

const deleteMenu = async (index) => {
    let removeMenu = await axios.delete("http://localhost:3000/menu/" + index)
    return removeMenu
}

// const getMenusWithPromise = new Promise((resolve,reject)=>{
//     let menus = axios.get("http://localhost:3000/allmenus")
//     return menus
// })

export { getAllMenus, createMenu, updateMenu, deleteMenu };