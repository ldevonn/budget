"use client";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { addUserTransaction } from "../redux/transaction";
import { useDispatch } from "react-redux";

function TransactionModal({ isOpen, onClose }) {
    const dispatch = useDispatch()
    const { user } = useAuth();
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const userId = user.$id

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!amount || !description) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const transactionData = {
                userId: userId,
                amount: parseFloat(amount),
                description: description
            };
            console.log(transactionData)

            await dispatch(addUserTransaction(transactionData));
            setAmount('')
            setDescription('')
            onClose();
        } catch (error) {
            console.error('Error submitting transaction:', error);
            alert('Failed to add transaction. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Add Transaction
                </h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="amount"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Amount
                        </label>
                        <input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter the amount"
                            className="shadow appearance-none border rounded w-full py-2 px-3 
                                     text-gray-700 leading-tight focus:outline-none 
                                     focus:shadow-outline"
                            required
                            step="0.01"
                            min="0"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Description
                        </label>
                        <input
                            id="description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter the description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 
                                     text-gray-700 mb-3 leading-tight focus:outline-none 
                                     focus:shadow-outline"
                            required
                        />
            </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                                     py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add Transaction
                        </button>
        </div>
                </form>
            </div>
        </div>
    );
}

export default TransactionModal;
