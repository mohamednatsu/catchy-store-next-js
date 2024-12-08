"use client"

import { getProduct } from "@/app/api/get-product";
import { useEffect, useState } from "react";
import Prodcut from "./Prodcut";
import { API_URL } from "@/app/api/api-link";
import axios from "axios";


export default function ProductsList() {

    const [products, setProducts] = useState([])


    useEffect(() => {
        const api = API_URL
        axios.get(`${api}/products`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 my-11 gap-7 mx-4">
            {products.map((prod, key) => (
                <Prodcut key={prod._id} product={prod} />
            ))}
        </div>
    )
}
