"use client"

import { data } from "@/assets/dummy-data";
import Image from "next/image";
import React, { useState } from "react";

import { MdDelete } from "react-icons/md";

export default function Page() {
    let cartProdcuts = data.slice(0, 3);

    let sumTotal = cartProdcuts.reduce((prod1) => prod1.price+0)

    let [quantity, setNewQuantity] = useState(1);

    const [products, setProducts] = useState(cartProdcuts)

    function plusQuantity(prodId) {
        setNewQuantity(++quantity);
        console.log(prodId)
    }
    
    function minusQuantity(prodId) {
        setNewQuantity(--quantity);
        console.log(prodId)
    }


    function removeItem(prodId) {
        setProducts(products.splice(0, products.indexOf({id: prodId}))) 
    }

    return (
        <div className="flex flex-col justify-around items-center gap-8 w-full my-10">
            <div className="flex w-full justify-around items-center p-5 text-white font-bold md:text-xl text-lg">
                <h2 className="">Your Bag: </h2>
                <h2>Subtotal: 1,330 BHD</h2>
            </div>

            <div className="flex flex-col justify-center items-center my-3 lg:w-3/4 w-full gap-10 ">
                {cartProdcuts.map((item, key) => (
                    <div
                        key={key}
                        className="flex md:flex-row flex-col h-[25%] bg-gray-200/20 justify-around items-center py-3 rounded-xl shadow-xl w-[80%] md:p-3"
                    >
                        <div className="md:w-[15%] md:h-[15%] w-[30%] h-[30%]">
                            <Image
                                className="rounded-lg shadow-xl w-full"
                                alt={item.name}
                                src={item.imageProduct.front}
                            />  
                        </div>

                        <div className="flex md:flex-col justify-start gap-5 items-start mr-6 md:w-[50%] w-[80%] p-6">
                            <h2 className="text-white font-bold md:text-2xl text-[13px]">{item.name}</h2>

                            <div className="flex gap-5 items-center">
                                <p className="text-white/50 md:text-[18px] text-[13px]">BHD {item.price}</p>

                                <p className="text-white font-light md:text-lg text-[13px]">Size: {item.sizes[1]}</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center justify-center gap-10 bg-black/45 text-white p-3 font-bold rounded-xl shadow-md ">
                                <p onClick={() => minusQuantity(item.id)} className="md:text-xl text-[16px] cursor-pointer">-</p>
                                <p className="md:text-lg text-[16px]">{quantity}</p>
                                <p onClick={() => plusQuantity(item.id)} className="md:text-xl text-[16px] cursor-pointer">+</p>
                            </div>

                            {/* <p onClick={() => removeItem(item.id)} className="ml-5 text-red-600 bg-red-300/90 hover:bg-red-300 transition-all cursor-pointer p-2 rounded-lg">Remove</p> */}
                            <MdDelete className=" text-[30px] cursor-pointer text-red-500" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center">
                    <button className="text-center bg-white/90 rounded-md shadow-md px-10 py-2 hover:translate-y-[-2px] transition-all text-lg">
                        Checkout
                    </button>
            </div>
        </div>
    );
}
