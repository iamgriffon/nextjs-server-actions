"use client"

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    router.push("/")
    return (
        <>
            <h2>Not Found</h2>
            <p>Could not find requested todo</p>
        </>
    );
}