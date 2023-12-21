'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserProfile({ params }: any) {
    const router = useRouter();

    useEffect(() => {
        router.push('/signin');
    }, []);

    return (
        <div>UserProfile: {params.id}</div>
    )
}
