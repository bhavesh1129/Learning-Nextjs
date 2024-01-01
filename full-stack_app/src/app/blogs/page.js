'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function BlogPage() {
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/blogs/data');
                setBlogData(response.data);
                router.push('/blogs');
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

    const truncateText = (text, maxLength) => {
        const words = text.split(' ');
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(' ') + '...';
        }
        return text;
    };

    return (
        <>
            <Toaster />
            <section className="relative overflow-hidden py-12">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                                OUR BLOG
                            </span>
                            <h1 className="text-5xl font-bold">Latest news from our blog</h1>
                        </div>

                        <section className="text-gray-600 body-font">
                            <div className="container px-5 pt-24 py-4 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    {blogData?.map((blog) => (
                                        <div key={blog?._id} className="lg:w-1/3 sm:w-1/2 p-4">
                                            <div className="flex relative">
                                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={blog?.image} />
                                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                    <div className='text-orange-400 mb-1 flex justify-start items-center font-semibold '>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                        <h2 className="tracking-widest text-sm title-font capitalize">{blog?.userId}</h2>
                                                    </div>

                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 capitalize">{blog?.title}</h1>
                                                    <p className="leading-relaxed">{truncateText(blog?.description, 25)}</p>
                                                    <button className='mt-2 text-white p-2 bg-orange-400 rounded-lg'><Link href={`/blogs/${blog?.slug}`}>Read More</Link></button>
                                                    <p className="mt-2 leading-relaxed text-xs font-semibold text-gray-400">{getFormatedTime(blog?.createdAt)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}
