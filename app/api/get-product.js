
import axios from "axios"
import { API_URL } from "./api-link"


export const getProduct = () => {
    const api = API_URL
    axios.get(`${api}/products`)
    .then((res) => {
        console.log(res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err)
    })
}