import { createContext, useContext, useState, useEffect } from "react";
import {account} from "../appwrite";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await account.get();
                setUser(user);
            } catch {
                setUser(null)
            } finally {
                setLoading (false)
            }
        }
        fetchUser();
    }, [])

    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
            const user = await account.get();
            setUser(user);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const logout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);