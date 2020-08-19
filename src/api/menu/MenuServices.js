import axios from 'axios';

const getAllMenus = async (keywords, page, limit) => {
    let menus = await axios.get(`http://localhost:3000/allmenus?keywords=${keywords}&page=${page}&limit=${limit}`)
    return menus
}

const getMenuByID = async (id) => {
    let menus = await axios.get("http://localhost:3000/menu/" + id)
    return menus
}

const createMenu = async (form) => {
    let newMenu = await axios.post("http://localhost:3000/menu", form)
    return newMenu
}
const updateMenu = async (form) => {
    console.log("FORM", form);
    console.log("link = http://localhost:3000/menu/" + form.id_menu);
    let changeMenu = await axios.put("http://localhost:3000/menu/" + form.id_menu, form)
    return changeMenu
}

const deleteMenu = async (id) => {
    let removeMenu = await axios.delete("http://localhost:3000/menu/" + id)
    return removeMenu
}

// const getMenusWithPromise = new Promise((resolve,reject)=>{
//     let menus = axios.get("http://localhost:3000/allmenus")
//     return menus
// })

export { getAllMenus, getMenuByID, createMenu, updateMenu, deleteMenu };