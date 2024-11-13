import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='flex w-full justify-around items-center gap-5 flex-col my-20'>
            <div className="p-4 text-center mb-10">
                <h2 className='text-white font-bold text-4xl'>Login</h2>
            </div>

            <div className="flex justify-center items-center flex-col gap-5 w-3/4 md:w-1/3">
                <div className="w-full">
                    <input placeholder='Email' className=" h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg" type="text" />
                </div>
                <div className="w-full">
                    <input placeholder='Password' className=" h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg" type="text" />
                </div>
            </div>


            <div className="md:w-1/2 flex justify-end">
            <button type="button" className=' bg-white text-lg rounded-2xl my-6 text-center py-1 px-6 hover:translate-y-[-3px] translate-y-0  transition-all shadow-lg'>Login</button>
            </div>


            <div className="flex justify-center gap-6 items-center sm:flex-col md:flex-row text-[10px]">
                <div className=" capitalize">
                    <p className='text-white/80'>
                        if you forget your password ?
                    </p>

                    <Link className='text-white font-bold' href={"/forget-password"}>
                        Click here
                    </Link>
                </div>
                <div className=" capitalize">
                    <p className='text-white/80'>
                    Don’t have account yet ?
                    </p>

                    <Link className='text-white font-bold' href={"/sign-up"}>
                        Click here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
