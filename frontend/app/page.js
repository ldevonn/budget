"use client"

import { useAuth } from "./contexts/AuthContext";

export default function Home() {
  const {user, loading} = useAuth()

  if (loading) return null
  
  return (
    <>
    {user ? (
      <>
        <p>Hello, Demo! You are logged in</p>
      </>
    ) : (
      <>
        <p>Log in please</p>
      </>
    )}
    
    </>
  )

}
