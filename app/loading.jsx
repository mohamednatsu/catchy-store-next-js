import React from 'react'

import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading({size, color}) {
    return (
        <div className='w-full flex justify-center items-center my-10 roteteLoading h-[300px]'>
            <AiOutlineLoading3Quarters className='animate-spin' color={color ? color: "white"} size={size ? size : 34} />
        </div>
    )
}
