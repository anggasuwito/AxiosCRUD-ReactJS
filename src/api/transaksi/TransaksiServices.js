import axios from 'axios';

const getAllTransaksi = async () => {
    let transaksi = await axios.get("http://localhost:3000/alltransaksi")
    return transaksi
}

export { getAllTransaksi };