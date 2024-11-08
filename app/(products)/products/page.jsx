import { data } from '@/assets/dummy-data';
import Prodcut from '@/components/Prodcut'
import React from 'react'
import { FaArrowTurnDown } from "react-icons/fa6";

export default function Prodcuts() {
    return (
        <div className="container flex flex-col justify-around items-center w-full my-16">
            <div className=" flex justify-center w-1/2 items-center gap-3 text-white">
                <h2 className="text-3xl font-bold">
                    Products
                </h2>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 my-11 gap-7">
                {data.map((prod, key) => (
                    <Prodcut product={prod} key={key} />
                ))}
            </div>
        </div>
    )
}
