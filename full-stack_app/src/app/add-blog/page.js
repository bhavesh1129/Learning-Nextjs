'use client'

import { useState } from 'react';
import { FilePlus2 } from 'lucide-react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function AddBlog() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [blogInfo, setBlogInfo] = useState({
        title: '',
        slug: '',
        userId: '',
        image: '',
        description: ''
    });

    const handleAddBlog = async () => {
        try {
            setLoading(true);
            if (!blogInfo.title || !blogInfo.slug || !blogInfo.userId || !blogInfo.description) {
                toast.error("Please fill in all required fields.");
            }
            await axios.post("/api/blogs/data", blogInfo, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            toast.success("Blog added successfully");
            router.push("/blogs");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Navbar />
            <div className="mx-auto w-full max-w-7xl py-2">
                <div className="mx-auto my-4 max-w-2xl md:my-6">
                    {/* Form */}
                    <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
                        <div className="mb-4 flex items-center rounded-lg py-2">
                            <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
                                <FilePlus2 size={20} />
                            </div>
                            <div className="flex flex-1">
                                <p className="text-lg font-bold">
                                    Add Blog
                                </p>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-gray-900">Blog Info</p>
                        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
                            <div className="col-span-2 grid">
                                <div className="w-full">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="title"
                                    >
                                        Title
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Enter the title of your blog"
                                        id="title"
                                        autoComplete='off'
                                        onChange={(e) => setBlogInfo({ ...blogInfo, title: e.target.value })}
                                    ></input>
                                </div>
                            </div>

                            <div className="w-full">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="slug"
                                >
                                    Slug
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Enter the unique slug of your blog"
                                    id="slug" autoComplete='off' onChange={(e) => setBlogInfo({ ...blogInfo, slug: e.target.value })}
                                ></input>
                            </div>

                            <div className="w-full">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="userId"
                                >
                                    Author's Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Enter the author's name of your blog"
                                    id="userId" autoComplete='off' onChange={(e) => setBlogInfo({ ...blogInfo, userId: e.target.value })}
                                ></input>
                            </div>

                            <div className="col-span-2 grid">
                                <div className="w-full">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="image"
                                    >
                                        Image URL
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Enter the image url of your blog"
                                        id="image" autoComplete='off' onChange={(e) => setBlogInfo({ ...blogInfo, image: e.target.value })}
                                    ></input>
                                </div>
                            </div>

                            <div className="col-span-2 grid">
                                <div className="w-full">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="description"
                                    >
                                        Content
                                    </label>
                                    <textarea
                                        className="flex h-40 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Enter the content of your blog"
                                        id="description" autoComplete='off' onChange={(e) => setBlogInfo({ ...blogInfo, description: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-span-2 grid">
                                <button
                                    type="button"
                                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={handleAddBlog}
                                >
                                    Add Blog
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <Footer />
        </>
    )
}

