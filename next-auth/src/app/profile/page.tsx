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

export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);

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
    const fetchData = async () => {
      try {
        const userInfo: any = await axios.get("/api/users/user");
        console.log(userInfo);

        setUserData(userInfo.data.data);
      } catch (error: any) {
        throw new Error("Error getting user information " + error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Toaster />
      <div>Profile</div>
      <h2>Hello {userData?.name}!</h2>
      <button className="p-3 bg-blue-500 rounded-md font-semibold" onClick={logout}>Signout</button>
    </>
  )
}
