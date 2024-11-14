"use client"
import Loading from '@/app/loading';
import { data } from '@/assets/dummy-data';
import Image from 'next/image';
import { useState } from 'react';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import Head from 'next/head';
import { Helmet } from 'react-helmet-async';

function Page({ params }) {

    const { id } = params;

    const product = data.filter((prod) => prod.id == id)[0]


    const [isLoading, setLoading] = useState(true)


    function closeLoading() {
        setLoading(false);
    }

    return (
        <>

            <Helmet>
                <title>{product.name}</title>
            </Helmet>

            <div className='flex flex-col justify-around items-center gap-5 w-full my-10'>

                <div className="flex md:flex-row-reverse flex-col-reverse justify-center items-center gap-4 w-full p-4 my-5">

                    <div className="felx md:justify-start justify-center md:items-center gap-7 w-[40%]">

                        <div className="flex gap-[34px] flex-col md:justify-start justify-center">
                            <h2 className='text-white md:text-4xl font-bold text-[20px] text-center'>
                                {product.name}
                            </h2>

                            <p className='text-white/70 list-item text-[17px]'>{product.details}</p>

                            <h3 className='text-white/90 md:text-[18px] text-[15px]'>{product.category}</h3>
                        </div>

                        <div className="flex w-full md:justify-start justify-center items-center gap-4 mt-6">
                            {product.sizes.map((size, key) => (
                                <div key={key} className="bg-white/60 hover:bg-white transition-all cursor-pointer text-center rounded-xl font-bold shadow-md md:px-5 md:py-2 px-4 py-1 text-sm">
                                    {size}
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="md:w-1/2 sm:w-[75%] flex flex-row-reverse gap-9 justify-center items-center">
                        {/* {isLoading &&  <Loading size={24} color={"white"} />  } */}

                        <FaArrowRight color='white' className='cursor-pointer hover:translate-x-[4px] transition-all' size={30} />

                        <Image onLoadingComplete={() => setLoading(false)} className='md:w-[50%] md:h-[50%] w-[75%] rounded-lg shadow-md' alt={product.name} src={product.imageProduct.front} />
                        {/* <Image onLoadingComplete={() => setLoading(false)} className='md:w-[50%] md:h-[50%] w-[75%] rounded-lg shadow-md' alt={product.name} src={product.imageProduct.back} /> */}
                        <FaArrowLeft color='white' className='cursor-pointer hover:translate-x-[-4px] transition-all' size={30} />

                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className='text-center bg-white/90 rounded-md shadow-md px-10 py-2 hover:translate-y-[-2px] transition-all text-lg'>Add To Bag</button>
                </div>
            </div>
        </>
    )
}

export default Page;
