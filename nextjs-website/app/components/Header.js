'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Contact',
        href: 'contact',
    },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {/* Navbar */}
            <div className="relative w-full bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <Link href='/' className="inline-flex items-center space-x-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                        </span>
                        <span className="font-bold">NextUI</span>
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="ml-12 inline-flex space-x-8">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex grow justify-end">
                        <input
                            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Search"
                        ></input>
                    </div>
                    <div className="ml-2 mt-2 hidden lg:block">
                        <span className="relative inline-block">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1054048/pexels-photo-1054048.jpeg"
                                alt="Dan_Abromov"
                            />
                            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                        </span>
                    </div>
                    <div className="ml-2 lg:hidden">
                        <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer bg-black p-3/2 rounded-full text-white" />
                    </div>
                    {isMenuOpen && (
                        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pb-6 pt-5">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center space-x-2">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                                </svg>
                                            </span>
                                            <span className="font-bold">NextUI</span>
                                        </div>
                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                onClick={toggleMenu}
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <X className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-4">
                                            {menuItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                >
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="ml-3 mt-4 flex items-center space-x-2">
                                        <img
                                            className="inline-block h-10 w-10 rounded-full"
                                            src="https://images.pexels.com/photos/1054048/pexels-photo-1054048.jpeg"
                                            alt="Dan_Abromov"
                                        />
                                        <span className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-900">Dan Abromov</span>
                                            <span className="text-sm font-medium text-gray-500">@dan_abromov</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
