import { useCart } from "@/contexts/CartContext";
import { getLoginToken, removeUserToken } from "@/utils/cookies";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Menu({ open, handleClick }) {
    const [isClient, setIsClient] = useState(false)

    

    const removeToken = () =>
    {
        removeUserToken();
        window.location.reload();
    }

    useEffect(() => {
        setIsClient(true)
        
    }, [])


    return (
        <div className={`bg-black/80 w-[230px] rounded-e-lg flex flex-col justify-around items-center text-white md:w-[20%] h-[70%] absolute left-0 py-10 z-[100] ${open ? "translate-x-0" : "translate-x-[-340px]"} transition-all ease-in-out shadow-lg`}>
            <div className="list-none flex flex-col gap-3 justify-center items-center pb-5 text-center leading-10 capitalize">
                <Link
                    href={"/products"}
                    onClick={handleClick}
                    className="hover:text-gray-300 transition-all hover:pl-3 cursor-pointer capitalize"
                >
                    Shop
                </Link>
                <Link
                    href={"/about"}
                    onClick={handleClick}
                    className="hover:text-gray-300 transition-all hover:pl-3 cursor-pointer"
                >
                    About
                </Link>

                <Link
                    href={"/contact"}
                    onClick={handleClick}
                    className="hover:text-gray-300 transition-all hover:pl-3 cursor-pointer"
                >
                    contact
                </Link>
                <Link
                    href={"/privacy"}
                    onClick={handleClick}
                    className="hover:text-gray-300 transition-all hover:pl-3 cursor-pointer"
                >
                    privacy & policy
                </Link>
            </div>

            <div className="flex justify-around gap-5 items-center flex-col">

                {!getLoginToken() && isClient ?

                    <>
                        <div className="bg-gray-400/25 hover:bg-gray-400/40 transition-all rounded-2xl w-28 h-10 flex justify-center items-center cursor-pointer">

                            <Link href={"/login"}>
                                Login
                            </Link>

                        </div>

                        <div className="bg-white text-black rounded-2xl w-28 h-10 flex justify-center items-center cursor-pointer">

                            <Link href={"/sign-up"}>
                                Sign Up
                            </Link>
                        </div>
                    </>
                    :
                    <div onClick={() => removeToken()} className="bg-white text-black rounded-2xl w-28 h-10 flex justify-center items-center cursor-pointer">
                        Log Out
                    </div>

                }
            </div>
        </div>
    );
}
