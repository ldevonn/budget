"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navigation() {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center p-4 bg-blue-500">
            <Link href="/" className="underline text-white ml-4">Home</Link>
            <div className="flex justify-end gap-4 mr-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => router.push("/login")}>Login</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => router.push("/signup")}>Signup</button>
            </div>
        </div>
    )
}

export default Navigation;