"use client"

import { useAuth } from "./contexts/AuthContext";
import { useState } from "react"
import TransactionModal from "./modals/transactionModal";
export default function Home() {
  const {user, loading} = useAuth()
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  if (loading) return null
  
  return (
    <>
    {user ? (
      <>
        <p>Hello, Demo! You are logged in</p>
        <button className="bg-red-600"
        onClick={() => setIsTransactionModalOpen(true)}
        >Add Transaction</button>

      <TransactionModal
                isOpen={isTransactionModalOpen}
                onClose={() => setIsTransactionModalOpen(false)}
      />
      </>
      
    ) : (
      <>
        <p>Log in please</p>
      </>
    )}
    
    </>
  )

}
