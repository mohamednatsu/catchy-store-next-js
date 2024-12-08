'use client';

import { API_URL } from '@/app/api/api-link';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';



const userCookies = require("@/utils/cookies")

function LoginPage() {

    const router = useRouter();
    const [formData, setFormData] = useState({ emailOrUsername: '', password: '' });
    const [errors, setErrors] = useState({});
    const [token, setToken] = useState("");
    const [isLoginComplete, setIsLogin] = useState("");
    const [loginState, setIsLOginState] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate inputs
    const validate = () => {
        const validationErrors = {};
        if (!formData.emailOrUsername) {
            validationErrors.emailOrUsername = 'Email Or Username is required.';
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required.';
        } else if (formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters.';
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Login successful:', formData);
            axios.post(API_URL+"/login", formData)
            .then((res) => {
                console.log("Login successful:", res)
                setToken(res.data.token)
                userCookies.saveLoginToken(res.data.token, res.data.id)
                setIsLOginState(true)
                router.push("/")
                
            })
            .catch((err) => {
                console.log("Error:", err)
                setIsLogin(err.response.data.message)
                setIsLOginState(false)
            })
            
        }
    };

    return (
        <div className='flex w-full justify-around items-center gap-5 flex-col my-20'>
            <div className="p-4 text-center mb-10">
                <h2 className='text-white font-bold text-4xl'>Login</h2>
                <p className='my-4 text-red-500 capitalize'>{isLoginComplete}</p>
            </div>

            <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-5 w-3/4 md:w-1/3">
                <div className="w-full">
                    <input
                        name="emailOrUsername"
                        placeholder="Email or Username"
                        className={`h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg ${
                            errors.emailOrUsername ? 'border-red-500 border' : ''
                        }`}
                        type="text"
                        value={formData.emailOrUsername}
                        onChange={handleChange}
                    />
                    {errors.emailOrUsername && <p className="text-red-500 text-sm my-2">{errors.emailOrUsername}</p>}
                </div>
                <div className="w-full">
                    <input
                        name="password"
                        placeholder="Password"
                        className={`h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg ${
                            errors.password ? 'border-red-500 border' : ''
                        }`}
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm my-2">{errors.password}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-white text-lg rounded-2xl my-6 text-center py-1 px-6 hover:translate-y-[-3px] translate-y-0 transition-all shadow-lg"
                >
                    Login
                </button>
            </form>

            <div className="flex justify-center gap-6 items-center sm:flex-col md:flex-row text-[10px]">
                <div className="capitalize">
                    <p className="text-white/80">Forgot your password?</p>
                    <Link className="text-white font-bold" href="/forget-password">
                        Click here
                    </Link>
                </div>
                <div className="capitalize">
                    <p className="text-white/80">Don’t have an account yet?</p>
                    <Link className="text-white font-bold" href="/sign-up">
                        Click here
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
