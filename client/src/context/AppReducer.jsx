// basically how we specify the application state changes in respone to certain actions
export default (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE TRANSACTION':
            return {
                ...state,
                transactions: state.transactions
                    .filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}