'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function BlogPost({ params }) {
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState({});
    const router = useRouter();
    const slug = params.slug;

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/blogs/data/${slug}`, blogData, { cache: 'no-store' });
                setBlogData(response.data);
                router.push(`/blogs/${slug}`);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const getFormatedTime = (timestampStr) => {
        var options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        var readableFormat = new Date(timestampStr).toLocaleDateString('en-US', options);
        return readableFormat;
    };
    return (
        <>
            <section className="text-gray-600 body-font">
                {
                    blogData && (
                        <div key={blogData?._id} className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img className="object-cover object-center rounded" alt="hero" src={blogData?.image} />
                            </div>
                            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 capitalize">{blogData?.title}</h1>
                                <p className="mb-8 leading-relaxed">{blogData?.description}</p>
                                <div className="flex justify-between w-full items-center">
                                    <div className='flex justify-center items-center capitalize text-md text-gray-400 font-semibold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        <p className='text-md text-gray-400 font-semibold'>&nbsp;{blogData?.userId}</p>
                                    </div>
                                    <div className='flex justify-center items-center text-xs text-gray-400 font-semibold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>

                                        <p>
                                            {getFormatedTime(blogData?.createdAt)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        </>
    )
}  
