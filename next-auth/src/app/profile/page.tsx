'use client'

import axios from 'axios';
import Link from 'next/link';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
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

  return (
    <>
      <Toaster />
      <div>Profile</div>
      <button className="p-3 bg-blue-500 rounded-md font-semibold" onClick={logout}>Signout</button>
    </>
  )
}
