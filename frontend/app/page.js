"use client"

import { useAuth } from "./contexts/AuthContext";
import { useEffect, useState } from "react"
import TransactionModal from "./modals/transactionModal";
import { useDispatch, useSelector } from "react-redux";
import { getUserTransactions } from "./redux/transaction";

export default function Home() {
  const dispatch = useDispatch()
  const {user, loading} = useAuth()
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)
  const transactions = useSelector(state => state.transaction.transactions)

  useEffect(() => {
    const fetchTransactions = async () => {
      if (user) {
        await dispatch(getUserTransactions(user.$id))
      }
    }
    fetchTransactions()
  }, [transactions, user, dispatch])
  
  if (loading) return null

  return (
    <>
    {user ? (
      <>
      <div>
        <p>Hello, Demo! You are logged in</p>
        <button className="bg-red-600"
          onClick={() => setIsTransactionModalOpen(true)}>
            Add Transaction
        </button>
      </div>
        <div>
          <h1>Users transactions:</h1>
          <div className="space-y-4">
              {transactions && Object.values(transactions).map((transaction) => (
                <div 
                  key={transaction.id} 
                  className="border p-4 rounded shadow"
                >
                  <p className="font-semibold">Amount: ${transaction.amount}</p>
                  <p className="text-gray-600">{transaction.description}</p>
                </div>
              ))}
            </div>
        </div>

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
