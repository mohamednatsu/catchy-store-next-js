import Image from 'next/image'
import React from 'react'

import logo from "../assets/logo-cathcy-transformed.png"
import Link from 'next/link'

function Footer() {
    return (
        <div className='bg-black/50 bottom-0 mx-auto w-[90%] h-auto mt-14 rounded-t-xl capitalize shadow-xl'>
            <div className="flex justify-around items-center">
                <div className="">
                    <Image src={logo} width={140} height={140} alt='logo'/>
                </div>
                <div className="text-white/80">
                    <ul className=' py-8 flex flex-col gap-5 '> 
                        <Link href={"/shipping"} className={"cursor-pointer hover:underline transition-all"}>shipping</Link>
                        <Link href={"/about"} className={"cursor-pointer hover:underline transition-all"}>about</Link>
                        <Link href={"/privacy"} className={"cursor-pointer hover:underline transition-all"}>privacy and policy</Link>
                    </ul>
                </div>
            </div>

                <div className="flex justify-center items-center bg-gray-300/70 h-[34px]">
                    All Right Reversed  ©2024 Catchy
                </div>
        </div>
    )
}

export default Footer
