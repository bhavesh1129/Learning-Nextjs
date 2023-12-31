'use client'

import axios from 'axios';
import Link from 'next/link';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

interface UserData {
  _id: string,
  name: string,
  email: string,
}

interface QuoteData {
  _id: string,
  content: string,
  author: string,
}

export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [quoteData, setQuoteData] = useState([]);

  const logout = async () => {
    try {
      await axios.get("/api/users/signout");
      toast.success("Signout successfully");
      router.push("/signin");
    } catch (error: any) {
      console.log("Signout failed", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfo = await axios.get("/api/users/user");
        setUserData(userInfo.data.data);
      } catch (error: any) {
        throw new Error("Error getting user information " + error.message);
      }
    };

    const fetchQuoteData = async () => {
      try {
        const quoteInfo = await axios.get("https://api.quotable.io/quotes/random?minLength=120&maxLength=150&limit=2&tags=technology");
        setQuoteData(quoteInfo.data);
      } catch (error: any) {
        throw new Error("Error getting quote information " + error.message);
      }
    };

    fetchQuoteData();
    fetchUserData();
  }, []);

  return (
    <>
      <Toaster />

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
            <Link href='/profile' className="mr-5 hover:text-gray-900">Profile</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={logout}>Signout
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <h1 className="text-3xl font-semibold title-font text-gray-900 mb-3 text-center capitalize">Hello {userData?.name}🙋🏼‍♂️</h1>
          <h3 className="text-lg font-normal title-font text-gray-500 mb-12 text-center capitalize">Explore a collection of top tech-inspired quotes!</h3>

          <div className="flex flex-wrap -m-4">
            {
              quoteData && quoteData.map((quote: any) => (
                <div key={quote?.id} className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6">{quote?.content}</p>
                    <a className="inline-flex items-center">
                      <img alt="testimonial" src="https://images.pexels.com/photos/977402/pexels-photo-977402.jpeg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">{quote?.author}</span>
                        <span className="text-gray-500 text-sm">Author</span>
                      </span>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
