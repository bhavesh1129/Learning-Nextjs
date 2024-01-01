'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function AdminPage() {

    const people = [
        {
            name: 'John Doe',
            title: 'Front-end Developer',
            department: 'Engineering',
            email: 'john@devui.com',
            role: 'Developer',
            image:
                'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        },
        {
            name: 'Jane Doe',
            title: 'Back-end Developer',
            department: 'Engineering',
            email: 'jane@devui.com',
            role: 'CTO',
            image:
                'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        },
    ];

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const [blogData, setBlogData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getUserData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/users/users');
                setUserData(response.data); // Assuming response.data is an array, if not, adjust accordingly
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        const getBlogData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/blogs/data');
                setBlogData(response.data); // Assuming response.data is an array, if not, adjust accordingly
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getUserData();
        getBlogData();
    }, []);

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/api/users/user/${id}`);
            toast.success('User deleted successfully');
            setUserData((prevData) => prevData.filter((user) => user._id !== id));
        } catch (error) {
            toast.error(error.message);
        }
    };

    const deleteBlog = async (slug) => {
        try {
            await axios.delete(`/api/blogs/data/${slug}`);
            toast.success('Blog deleted successfully');
            setBlogData((prevData) => prevData.filter((blog) => blog.slug !== slug));
        } catch (error) {
            toast.error(error.message);
        }
    };

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
            <section className="mx-auto w-full max-w-7xl px-4 py-4 mt-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Users</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all users. You can add new users, edit or delete existing
                            ones.
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                <span>Users</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Email
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-8 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Status
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-8 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Role
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Account created on
                                            </th>

                                            <th scope="col" className="relative px-4 py-3.5">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {userData?.data?.map((person) => (
                                            <tr key={person?._id}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img
                                                                className="h-10 w-10 rounded-full object-cover"
                                                                src={person?.image}
                                                                alt="image"
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm capitalize font-medium text-gray-900">{person?.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-900 ">{person?.email}</div>
                                                </td>

                                                <td className="whitespace-nowrap px-8 py-4">
                                                    {/* <label className="relative inline-flex justify-center items-center cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div className="w-9 h-5 bg-gray-200 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600">
                                                        </div>
                                                    </label> */}

                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        Active
                                                    </span>
                                                </td>

                                                <td className="whitespace-nowrap px-8 py-4 text-sm text-gray-700">
                                                    {person?.isAdmin ? 'Admin' : 'User'}
                                                </td>

                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-900 ">{getFormatedTime(person?.createdAt)}</div>
                                                </td>

                                                <td className="whitespace-nowrap px-7 py-4 text-right text-sm font-medium">
                                                    <button onClick={() => deleteUser(person?._id)} className="text-red-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-4 mb-7">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Blogs</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all blogs. You can add new blogs, edit or delete existing
                            ones.
                        </p>
                    </div>
                    <div>
                        <Link href="/add-blog">
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add new blog
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                <span>Blogs</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Description
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Status
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Author
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Account created on
                                            </th>

                                            <th scope="col" className="relative px-4 py-3.5">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {blogData.map((blog) => (
                                            <tr key={blog?.slug}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img
                                                                className="h-10 w-10 rounded-full object-cover"
                                                                src={blog?.image}
                                                                alt="Blog Image"
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm capitalize font-medium text-gray-900">{blog?.title}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-900 ">{truncateText(blog?.description, 8)}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap capitalize px-4 py-4 text-sm text-gray-700">
                                                    {blog?.userId}
                                                </td>

                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-900 ">{getFormatedTime(blog?.createdAt)}</div>
                                                </td>

                                                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                    <button onClick={() => deleteBlog(blog?.slug)} className="text-red-500 mr-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </button>

                                                    <Link href={`/blogs/${blog?.slug}`}>
                                                        <button className="text-green-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            </svg>
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />
        </>
    )
}
