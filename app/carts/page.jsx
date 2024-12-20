"use client"

import { data } from "@/assets/dummy-data";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import React, { useState } from "react";
import { TbShoppingCartOff } from "react-icons/tb";

import { MdDelete } from "react-icons/md";

export default function Page() {

    const {carts, totlaPrice, increaseQuantity, decreaseQuantity, removeCart} = useCart();

    function plusQuantity(prodId, size) {
        increaseQuantity(prodId, size)
        // fetchCarts()
        console.log(prodId)
    }
    
    function minusQuantity(prodId, size) {
        decreaseQuantity(prodId, size);
        // fetchCarts()
        console.log(prodId)
    }

    console.log(carts)

    if (carts.length == 0) {
        return <h1 className="text-white flex gap-4 justify-start items-center flex-col md:h-[400px] h-[510px] text-2xl mt-14 text-center w-full">
            Your cart is empty
            <TbShoppingCartOff size={60} color="gray" />
        </h1>
    }


    return (
        <div className="flex flex-col justify-around items-center gap-8 w-full my-10">
            <div className="flex w-full justify-around items-center p-5 text-white font-bold md:text-xl text-lg">
                <h2 className="">Your Bag: </h2>
                <h2>Subtotal: {totlaPrice} BHD</h2>
            </div>

            <div className="flex flex-col justify-center items-center my-3 lg:w-3/4 w-full gap-10 ">
                {carts.map((item, key) => (
                    <div
                        key={key}
                        className="flex md:flex-row flex-col h-[25%] bg-gray-200/20 justify-around items-center py-3 rounded-xl shadow-xl w-[60%] md:w-[80%] md:p-3"
                    >
                        <div className="md:w-[15%] md:h-[15%] w-[40%] h-[40%]">
                            <Image
                                className="rounded-lg shadow-xl w-full"
                                alt={item.product?.name}
                                src={item.product?.imageProduct?.front}
                                width={340}
                                height={400}
                            />  
                        </div>

                        <div className="flex md:flex-col justify-start gap-5 items-start mr-6 md:w-[50%] w-[80%] p-6">
                            <h2 className="text-white font-bold md:text-2xl text-[13px]">{item.product?.name}</h2>
                    
                            <div className="flex gap-5 items-center">
                                <p className="text-white/50 md:text-[18px] text-[13px]">BHD {item.product?.price}</p>

                                <p className="text-white font-light md:text-lg text-[13px]">Size: {item.size}</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center justify-center gap-10 bg-black/45 text-white p-3 font-bold rounded-xl shadow-md ">
                                <p onClick={() => minusQuantity(item.product._id, item.size)} className="md:text-xl text-[16px] cursor-pointer">-</p>
                                <p className="md:text-lg text-[16px]">{item.quantity}</p>
                                <p onClick={() => plusQuantity(item.product._id, item.size)} className="md:text-xl text-[16px] cursor-pointer">+</p>
                            </div>

                            {/* <p onClick={() => removeItem(item.id)} className="ml-5 text-red-600 bg-red-300/90 hover:bg-red-300 transition-all cursor-pointer p-2 rounded-lg">Remove</p> */}
                            <MdDelete onClick={() => removeCart(item.product, item.size)} className=" text-[30px] cursor-pointer text-red-500" />
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
