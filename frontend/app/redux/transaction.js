const GET_TRANSACTIONS = "GET_TRANSACTIONS";
const ADD_TRANSACTION = "ADD_TRANSACTION";


const getTransactions = (transaction) => ({
    type: GET_TRANSACTIONS,
     payload: transaction
})
const addTransaction = (transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction
})

// export const getUserTransactions = (userId) => async (dispatch) => {
//     try {
//         const response = await fetch(`/api/transactions/${userId}`)
//         if (response.ok) {
//             const transactions = await response.json();
//             dispatch(getTransactions(transactions));
//             return transactions;
//         } else {
//             const errorData = await response.json();
//             console.error('Get transactions failed:', {
//                 status: response.status,
//                 statusText: response.statusText,
//                 error: errorData
//             });
//             throw new Error(`Failed to get transactions: ${response.status} ${response.statusText}`);
//         }
//     } catch (error) {
//         console.error('Get transactions error:', error);
//         throw error;
//     }
// }

export const addUserTransaction = (formData) => async (dispatch) => {
    try {
        console.log('Sending transaction data:', formData);
        const response = await fetch(`/transactions/new`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        
        if (response.ok) {
            const transaction = await response.json();
            dispatch(addTransaction(transaction));
            return transaction;
        } else {
            const errorData = await response.json();
            console.error('Add transaction failed:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData
            });
            throw new Error(`Failed to add transaction: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Add transaction error:', error);
        throw error;
    }
}

function transactionReducer(state = {}, action) {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state, 
                ...action.payload
            };
         case ADD_TRANSACTION:
            return {
                 ...state, 
                [action.payload.id]: action.payload
            }

        default:
            return state;
    }
}

export default transactionReducer