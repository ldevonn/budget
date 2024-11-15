"use client";

import Link from "next/link";
import { useState } from "react";
import LoginModal from "../../modals/loginModal";
import SignupModal from "../../modals/signupModal";
import { useAuth } from "../../contexts/AuthContext";

function Navigation() {
    const { user, logout, loading } = useAuth();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    if (loading) return null;

    return (
        <>
            <div className="flex justify-between items-center p-4 bg-blue-500">
                <Link href="/" className="underline text-white ml-4">
                    Home
                </Link>
                <div className="flex justify-end items-center gap-4 mr-4">
                    {user ? (
                        <>
                            <p className="text-white">
                                Welcome, {user.name || "User"}
                            </p>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                onClick={() => setIsLoginModalOpen(true)}
                            >
                                Login
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                                onClick={() => setIsSignupModalOpen(true)}
                            >
                                Signup
                            </button>
                        </>
                    )}
                </div>
            </div>
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
            <SignupModal
                isOpen={isSignupModalOpen}
                onClose={() => setIsSignupModalOpen(false)}
            />
        </>
    );
}

export default Navigation;
