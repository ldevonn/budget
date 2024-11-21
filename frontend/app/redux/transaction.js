const GET_TRANSACTIONS = "GET_TRANSACTIONS";
const ADD_TRANSACTION = "ADD_TRANSACTION";

const addTransaction = (transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction
})

const getTransactions = (userId) => ({
     type: GET_TRANSACTIONS,
     payload: userId
})

export const getUserTransactions = (userId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/transactions/${userId}`)
        let responseData;
        responseData = await response.json();

        dispatch(getTransactions(responseData));
        return responseData
    } catch (error) {
        console.error('Get transactions error:', error);
        throw error
    }
}

export const addUserTransaction = (formData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/transactions/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData),
        });

        let responseData;
        responseData = await response.json();

        dispatch(addTransaction(responseData));
        return responseData;
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
            };

        default:
            return state;
    }
}

export default transactionReducer