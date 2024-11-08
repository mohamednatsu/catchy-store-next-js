import React from 'react'

import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function loading() {
    return (
        <div className='w-full flex justify-center items-center my-10 roteteLoading h-[300px]'>
            <AiOutlineLoading3Quarters className='animate-spin' color='white' size={34} />
        </div>
    )
}
