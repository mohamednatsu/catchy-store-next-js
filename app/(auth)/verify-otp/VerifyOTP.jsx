"use client"

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API_URL } from '@/app/api/api-link';
import { saveLoginToken } from '@/utils/cookies';


function VerifyOTP({formData, otp}) {

    const router = useRouter();
    
    const [formOtp, setformOtp] = useState({
        verify_otp: '',
        
    });

    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformOtp({
            ...formOtp,
            [name]: value,
        });
    };

    // console.log(userData)

    // Validate form inputs
    const validate = () => {
        const errors = {};
        if (!formOtp.verify_otp.trim()) {
            errors.verify_otp = 'OTP is required';
        }
        else if(formOtp.verify_otp != otp)
        {
            errors.verify_otp = 'Invalid OTP';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // If validation passes, proceed
            axios.post(API_URL+"/verify-otp", {user: formData, otp: otp, verify_otp: formOtp.verify_otp})
            .then((response) => {
                console.log(response.data);
                saveLoginToken(response.data.token, response.data.id)
            })
            .catch((err) => {
                console.log(err)
            })

            console.log({user: formData, otp: otp, verify_otp: formOtp.verify_otp})
            console.log('Form data submitted:', formOtp);

            

            router.push("/")
        }
    };

    return (

        <>

            <Helmet>
                <title>Verify Otp</title>
            </Helmet>
            <div className="flex w-full justify-around items-center gap-5 flex-col my-20">
                <div className="p-4 text-center mb-10">
                    <h2 className="text-white font-bold my-4 text-4xl">Verify OTP</h2>
                    <p className='text-white'>We sent an OTP to your email: {formData?.email}</p>
                </div>

                <form
                    className="flex justify-center items-center flex-col gap-5 w-3/4 md:w-1/3"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full">
                        <input
                            name="verify_otp"
                            value={formOtp.verify_otp}
                            onChange={handleChange}
                            placeholder="Enter OTP code"
                            className="h-12 w-full rounded-xl bg-gray-300/35 outline-none pl-3 text-white shadow-lg"
                            type="text"
                        />
                        {errors.verify_otp && (
                            <p className="text-red-500 text-sm">{errors.verify_otp}</p>
                        )}
                    </div>
                    

                    <button
                        type="submit"
                        className="bg-white text-lg rounded-2xl my-6 text-center py-1 px-6 hover:translate-y-[-3px] transition-all shadow-lg"
                    >
                        Next
                    </button>
                </form>
            </div>
        </>
    );
}

export default VerifyOTP;
