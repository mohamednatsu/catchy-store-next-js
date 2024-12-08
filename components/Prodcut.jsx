"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';


export default function Prodcut({ product }) {
    
    const { carts, addToCart, removeCart } = useCart();

    const checkProductInCart = (productId) => {
        return carts.some(item => item.product._id === productId);
    };

    
    const [inCart, setInCart] = useState(checkProductInCart(product._id))
    
    useEffect(() => {
        setInCart(checkProductInCart(product._id))
        console.log(carts)
    }, [])

    const handleAddToCart = () => {
        addToCart(product, 1)
        setInCart(true)
        console.log(carts)
    }
    
    
    const handleRemoveFromCart = () => {
        removeCart(product, product.sizes[0])
        setInCart(false)
    }



    let price = product.price - (product.price * 0.17)


    return (
        <div key={product._id} className="flex flex-col justify-center items-center ">
            <div className="w-full flex flex-row mb-4 justify-start items-center z-50">

                {inCart ? <BsCartCheckFill onClick={() => handleRemoveFromCart()} className='text-white cursor-pointer' size={23} />
                    :
                    <FaCartPlus onClick={() => handleAddToCart()} className='text-white/60 transition-all cursor-pointer' size={23} />
                }

            </div>
            
            <Link href={`/products/${product._id}`} className='z-20'>
                <div key={product._id} className=" w-full cursor-pointer ">

                    <div className="flex justify-around flex-col items-center hover:translate-y-[-5px] transition-all shadow-md md:bg-[#d9d9d9]/25 w-full px-4 md:py-7 rounded-lg">
                        <Image className="rounded-lg shadow-md" quality={90} width={200} height={200} alt={product.name} src={product.imageProduct.front} />
                    </div>

                    <div className="flex justify-center items-center flex-col my-3">
                        <h3 className="text-white font-bold md:text-xl text-[12px] capitalize">
                            {product.name}
                        </h3>

                        <p className="text-white/50 mt-2 md:text-lg text-[10px]">
                            {Math.round(price)} BHD
                        </p>

                    </div>
                </div>
            </Link>
        </div>
    )
}
