"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import VerifyOTP from '../verify-otp/VerifyOTP';
import axios from 'axios';
import { API_URL } from '@/app/api/api-link';



function Page() {

    const router = useRouter()

    // State to manage form inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    });


    const [otp, setOtpCode] = useState('')

    const [errors, setErrors] = useState({});
    const [completeData, setComplete] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate form inputs
    const validate = () => {
        const errors = {};
        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirm_password) {
            errors.confirm_password = 'Passwords do not match';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // If validation passes, proceed
            

            axios.post(`${API_URL}/sign-up`, formData)
            .then((response) => {
                console.log(response.data);
                setOtpCode(response.data.otp)
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setComplete(true);
            })
        }
    };


    if (!completeData) {
        return (

            <>
                <Helmet>
                    <title>Sign Up</title>
                </Helmet>
                <div className="flex w-full justify-around items-center gap-5 flex-col my-20">
                    <div className="p-4 text-center mb-10">
                        <h2 className="text-white font-bold text-4xl">Create Account</h2>
                    </div>

                    <form
                        className="flex justify-center items-center flex-col gap-5 w-3/4 md:w-1/3"
                        onSubmit={handleSubmit}
                    >
                        <div className="w-full">
                            <input
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                                className={`h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg ${
                                    errors.username ? 'border-red-500 border' : ''
                                }`}
                                type="text"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm my-2">{errors.username}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className={`h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg ${
                                    errors.email ? 'border-red-500 border' : ''
                                }`}
                                type="text"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm my-2">{errors.email}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className={`h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg ${
                                    errors.password ? 'border-red-500 border' : ''
                                }`}
                                type="text"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm my-2">{errors.password}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <input
                                name="confirm_password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className={`h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg ${
                                    errors.confirm_password ? 'border-red-500 border' : ''
                                }`}
                                type="text"
                            />
                            {errors.confirm_password && (
                                <p className="text-red-500 text-sm my-2">{errors.confirm_password}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-lg rounded-2xl my-6 text-center py-1 px-6 hover:translate-y-[-3px] transition-all shadow-lg"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </>
        );
    }

    else {
        return <VerifyOTP otp={otp} formData={formData} />
    }
}

export default Page;
