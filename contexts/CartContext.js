import { API_URL } from "@/app/api/api-link";
import axios from "axios";
import Cookies from "js-cookie";

const { createContext, useState, useEffect, useContext } = require("react");

const CartContext = createContext();

// provider component

export const CartProvider = ({children}) => {
    const [carts, setCarts] = useState([])
    const [totlaPrice, setTotalPrice] = useState(0)
    const [cartLength, setCartLength] = useState(0)


    function fetchCarts() {
        let isMounted = true;  // Flag to track if the component is still mounted
        const userId = Cookies.get("userId")
        axios.get(`${API_URL}/cart/${userId}`)
        .then((res) => {
            setCarts(res.data.cart.items)
            setCartLength(carts.length)
            console.log(carts.length)
            setTotalPrice(res.data.cart.totalPrice)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {

        fetchCarts()
        
    }, [carts.length])


    const addToCart = (proudct, quantity = 1, size) => {
        axios.post(`${API_URL}/cart/add`, {
            userId: Cookies.get("userId"),
            productId: proudct._id,
            quantity: quantity,
            size: size,
        })
        .then((res) => {
            setCarts(res.data.cart.items)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const removeCart = (proudct, size) => {
        axios.post(`${API_URL}/cart/remove`, {
            userId: Cookies.get("userId"),
            productId: proudct._id,
            size: size
        })
        .then((res) => {
            setCarts(res.data.cart.items)
            setTotalPrice(res.data.cart.totalPrice)
        })
        .catch((err) => {
            console.log(err)
        })
    };


    const increaseQuantity = (productid, size) => {
        console.log({
            productid: productid,
            size: size
        })
        axios.post(API_URL+"/cart/increase", {
            userId: Cookies.get("userId"),
            productId: productid,
            size: size
        })
        .then((res) => {
            fetchCarts()
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    const decreaseQuantity = (productid, size) => {
        axios.post(API_URL+"/cart/decrease", {
            userId: Cookies.get("userId"),
            productId: productid,
            size: size
        })
        .then((res) => {
            fetchCarts()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <CartContext.Provider value={{carts, totlaPrice, addToCart, removeCart, cartLength, increaseQuantity, decreaseQuantity, fetchCarts}}>
            {children}
        </CartContext.Provider>
    )

}


// Hook to use the cart context provider
export const useCart = () => useContext(CartContext)