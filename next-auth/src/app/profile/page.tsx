'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";

interface UserData {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  avatar_url: string;
  html_url: string;
}

export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [username, setUsername] = useState<string>('');

  const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/users/',
  });

  const fetchUserData = async (username: string) => {
    try {
      const userInfo = await axiosInstance.get(username);
      setUserData(userInfo.data);
    } catch (error: any) {
      toast.error(error.message);
      throw new Error('Error getting user GitHub information ' + error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/users/signout');
      toast.success('Signout successfully');
      router.push('/signin');
    } catch (error: any) {
      console.log('Signout failed', error.message);
      toast.error(error.message);
    }
  };

  const getUserGithubData = async () => {
    await fetchUserData(username);
  };

  useEffect(() => {
    fetchUserData('bhavesh1129');
  }, []);

  return (
    <>
      <Toaster />

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-orange-400 rounded-full">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
            </svg>
            <span className="ml-3 text-xl">BG</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href='/' className="mr-5 hover:text-gray-900">Home</Link>
            <Link href='/profile' className="mr-5 hover:text-gray-900">Profile</Link>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={logout}>Signout
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <h1 className="text-3xl font-semibold title-font mt-10 text-gray-900 text-center capitalize">Hello {userData?.name}🙋🏼‍♂️!</h1>
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-semibold text-xl mb-2 text-gray-900">Dynamic GitHub Profile Viewer</h1>
              <div className='flex justify-start items-center'>
                <input type="text" name="username" placeholder="Enter your Github username" className='outline-0 border-l-2 border-y-2 p-2 rounded-l-md my-3' autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button type="button" className='border-r-2 border-y-2 border-orange-400 p-2 font-medium bg-orange-400 rounded-r-md text-gray-50' onClick={getUserGithubData}>Search</button>
              </div>
              <div className="leading-relaxed"> Explore GitHub profiles in real-time with our dynamic webpage. This interactive platform fetches the latest data, including profile image, name, public repository count, followers, and following counts directly from the user's GitHub account.
                <br />
                Stay up-to-date with users' GitHub activity effortlessly.</div>
            </div>
            <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/3">
              <h2 className="title-font font-medium text-3xl text-gray-900">{userData?.public_repos}+</h2>
              <p className="leading-relaxed">Public Repoistries</p>
            </div>
            <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/3">
              <h2 className="title-font font-medium text-3xl text-gray-900">{userData?.followers}+</h2>
              <p className="leading-relaxed">Followers</p>
            </div>
            <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/3">
              <h2 className="title-font font-medium text-3xl text-gray-900">{userData?.following}</h2>
              <p className="leading-relaxed">Following</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <Link href={userData?.html_url ?? '/'}>
              <img className="object-cover object-center w-full h-full" src={userData?.avatar_url} style={{ width: '600px', height: '400px', objectFit: 'fill' }} alt="avatar_image" />
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
