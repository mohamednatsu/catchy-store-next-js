import Image from 'next/image'
import React from 'react'

import logo from "../assets/logo-cathcy-transformed.png"
import Link from 'next/link'

function Footer() {
    return (
        <div className='bg-black/50 bottom-0 mx-auto w-[90%] h-auto mt-14 rounded-t-xl rounded-b-xl capitalize shadow-xl'>
            <div className="flex justify-around items-center">
                <div className="">
                    <Image src={logo} className='md:w-[140px] md:h-[140px] w-[100px] h-[100px]' width={140} height={140} alt='logo'/>
                </div>
                <div className="text-white/80">
                    <ul className=' py-8 flex flex-col gap-5 '> 
                        <Link href={"/contact"} className={"cursor-pointer hover:underline transition-all text-[10px] md:text-[18px]"}>contact</Link>
                        <Link href={"/about"} className={"cursor-pointer hover:underline transition-all text-[10px] md:text-[18px]"}>about</Link>
                        <Link href={"/privacy"} className={"cursor-pointer hover:underline transition-all text-[10px] md:text-[18px]"}>privacy and policy</Link>
                    </ul>
                </div>
            </div>

                <div className="flex justify-center items-center rounded-b-xl bg-gray-300/70 h-[34px]">
                    All Right Reversed  ©2024 Catchy
                </div>
        </div>
    )
}

export default Footer
