// export default (state, action) => {
//   switch(action.type) {
//     case 'DELETE_TRANSACTION':
//       return {
//         ...state,
//         transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
//       }
//     case 'ADD_TRANSACTION':
//       return {
//         ...state,
//         transactions: [action.payload, ...state.transactions]
//       }
//     default:
//       return state;
//   }
// }


export default (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        error: null
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== action.payload && transaction.id !== action.payload
        )
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

