'use client'

import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import Link from 'next/link';

export default function VerifyEmail({ params }: any) {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyEmail', { token })
            setVerified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.reponse.data);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-semibold mb-12">Verifying your Email</h1>
            <h2 className="p-4 text-gray-50 bg-orange-500 rounded-lg mb-10">Token: {token ? `${token}` : "no token"}</h2>

            {verified && (
                <div className='flex justify-center items-center flex-col'>
                    <h2 className="text-xl text-gray-400 mb-2">Your email verified successfully!</h2>
                    <Link href="/signin" className='text-center p-3 bg-black text-gray-50 rounded-md mt-6'>
                        Go back to SignIn
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-xl text-gray-50 bg-red-600 rounded-md p-4 mt-6 text-center">
                        Opps!!! <br />
                        Some error occured, please try again!</h2>
                </div>
            )}
        </div>
    )
}
