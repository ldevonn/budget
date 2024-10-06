"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginModal from "../../modals/loginModal";
import SignupModal from "../../modals/signupModal";
import { useState } from "react";

function Navigation() {
    const router = useRouter();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    return (
        <>
        <div className="flex justify-between items-center p-4 bg-blue-500">
            <Link href="/" className="underline text-white ml-4">Home</Link>
            <div className="flex justify-end gap-4 mr-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setIsLoginModalOpen(true)}>Login</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => setIsSignupModalOpen(true)}>Signup</button>
            </div>
        </div>
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        <SignupModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
        </>
    )
}

export default Navigation;