'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState(false);
    const [session, setSession] = useState({});

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('Logout successfully');
            router.push('/login');
        } catch (error) {
            console.log('Logout failed', error.message);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const userInfo = await axios.get('/api/users/user');
                setSession(userInfo.data.data);
                setIsAdmin(userInfo.data.data.isAdmin);
            } catch (error) {
                console.log('User info not found', error.message);
                toast.error(error.message);
            }
        };
        getUserInfo();
    }, []);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-orange-400 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
                    <span className="ml-3 text-xl">BG</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href='/' className="mr-5 hover:text-gray-900">Home</Link>
                    <Link href='/about' className="mr-5 hover:text-gray-900">About</Link>
                    <Link href='/blogs' className="mr-5 hover:text-gray-900">Blogs</Link>
                    <Link href='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
                    {
                        session ?
                            (isAdmin && <Link href='/admin' className="mr-5 hover:text-gray-900">Admin</Link>) :
                            ('')
                    }
                </nav>
                {
                    session ? (
                        <button onClick={logout} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    ) : (
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>)
                }
            </div>
        </header>
    )
}
