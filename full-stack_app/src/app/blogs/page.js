'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default async function BlogPage() {
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/blogs/data', blogData, { next: { revalidate: 3600 } });
                toast.success('Blogs shown successfully');
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
                                    {
                                        blogData?.map((blog) => (
                                            <div key={blog._id} className="lg:w-1/3 sm:w-1/2 p-4">
                                                <div className="flex relative">
                                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={blog.image} />
                                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 capitalize">Author: {blog.userId}</h2>
                                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 capitalize">{blog.title}</h1>
                                                        <p className="leading-relaxed">{blog.description}</p>
                                                        <p className="mt-2 leading-relaxed">{blog.createdAt}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
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
