
import Image from 'next/image'

import { IoMenu } from "react-icons/io5";

import logo from "../assets/logo-cathcy-transformed.png"
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import axios from 'axios';
import { API_URL } from '@/app/api/api-link';
import { Cookie } from 'next/font/google';
import Cookies from 'js-cookie';

function Navbar({open, handleOpen}) {


    const [numCarts, setNumCarts] = useState(0)
    const [carts, setCarts] = useState([])

    const {cartLength} = useCart();


    return (
        <div className='flex flex-row justify-center items-center h-18 gap-7 p-5 mx-auto'>
            <div className="w-1/2  flex justify-center items-center" onClick={handleOpen}>
                {open ?
                    <IoClose  color='white' className=' cursor-pointer hover:text-white/90 transition md:text-[33px] text-[25px]' />
                    :
                    <IoMenu color='white' className=' cursor-pointer hover:text-white/90 transition md:text-[33px] text-[25px]' />
                }
            </div>
            <div className="w-1/3 flex justify-center items-center">
            <Link href={"/"}>
                <Image className='cursor-pointer' src={logo} alt='logo' width={150} height={170} />
            </Link>
            </div>
            <div className="w-1/2 flex justify-center items-center relative">
                <Link href={"/carts"}>
                    <HiOutlineShoppingBag color='white' className=' cursor-pointer hover:text-white/90 transition md:text-[33px] text-[25px]' />
                </Link>
                <div className="flex justify-center items-center md:translate-x-[-45px] p-2 translate-x-[-38px] translate-y-[12px] md:translate-y-[15px] w-[20px] h-[20px] rounded-full bg-gray-400/80 font-bold text-center">
                    {cartLength}
                </div>
            </div>
        </div>
    )
}

export default Navbar
