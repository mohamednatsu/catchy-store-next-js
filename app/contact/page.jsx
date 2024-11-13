import React from 'react'

function page() {
    return (
        <div className='flex w-full justify-around items-center gap-5 flex-col my-20'>
            <div className="p-4 text-center mb-10">
                <h2 className='text-white font-bold text-4xl'>Contact Us</h2>
            </div>

            <div className="flex justify-center items-center flex-col gap-5 md:w-1/3 sm:w-1/2 sm:mx-3">
                <div className="flex flex-row justify-around items-center gap-7 w-full">
                    <input placeholder='First name' className=" h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg" type="text" />
                    <input placeholder='Second name' className=" h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg" type="text" />
                </div>
                <div className="flex flex-row justify-around items-center gap-7 w-full">
                    <input placeholder='Email address' className=" h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg" type="text" />
                    <input placeholder='Order number' className=" h-12 w-[60%]  rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg" type="text" />
                </div>
                <div className="w-full">
                    <input placeholder='Subject' className=" h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg" type="text" />
                </div>
                <div className="w-full">
                    <textarea placeholder='Your Message'  className="w-full pt-2 rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg" name="" id="" cols="20" rows="10">
                    
                    </textarea>
                </div>
            </div>


            <div className="md:w-1/2 sm:w-3/4 flex justify-end">
            <button type="button" className=' bg-white text-lg rounded-2xl my-6 text-center py-1 px-6 hover:translate-y-[-3px] translate-y-0  transition-all shadow-lg'>Send</button>
            </div>
        </div>
    )
}

export default page
