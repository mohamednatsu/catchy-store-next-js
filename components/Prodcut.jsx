"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import Link from 'next/link';
import { useParams } from 'next/navigation';


export default function Prodcut({ product, key }) {

    const [inCart, setInCart] = useState(false)
    const [carts, setCarts] = useState([])


    function handleCart(product) {

        
        const productExists = carts.findIndex((item) => item.id === product.id)
        
        if (productExists === -1) {
            setCarts((prevCarts) => [...prevCarts, product])
            setInCart(false)
        }
        else {
            const updatedCart = carts.filter((item) => item.id === product.id)
            setInCart(true)
            setCarts(updatedCart)
        }
        console.log(carts)

    }


    return (
        <div key={key} className="flex flex-col justify-center items-center ">
            <div className="w-full flex flex-row mb-4 justify-start items-center z-50">

                {inCart ? <BsCartCheckFill onClick={() => handleCart(product)} className='text-white cursor-pointer' size={23} />
                    :
                    <FaCartPlus onClick={() => handleCart(product)} className='text-white/60 transition-all cursor-pointer' size={23} />
                }

            </div>
            
            <Link href={`/products/${product.id}`} className='z-20'>
                <div key={product.id} className=" w-full cursor-pointer ">

                    <div className="flex justify-around flex-col items-center hover:translate-y-[-5px] transition-all shadow-md bg-[#d9d9d9]/25 w-full px-4 py-7 rounded-lg">
                        <Image className="rounded-lg shadow-md" width={200} height={200} alt={product.name} src={product.imageProduct.front} />
                    </div>

                    <div className="flex justify-center items-center flex-col my-3">
                        <h3 className="text-white font-bold md:text-xl text-[12px]">
                            {product.name}
                        </h3>

                        <p className="text-white/50 mt-2 md:text-lg text-[10px]">
                            {product.price} BHD
                        </p>

                    </div>
                </div>
            </Link>
        </div>
    )
}
