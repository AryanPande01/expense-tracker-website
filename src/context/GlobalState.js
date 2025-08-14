import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  transactions: [],
  loading: true,
  error: null
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get('http://192.168.1.35:5001/api/transactions');
      dispatch({
        type: 'SET_TRANSACTIONS',
        payload: res.data
      });
    } catch (err) {
      console.error('Error fetching transactions:', err);
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response?.data?.error || 'Server error'
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`http://192.168.1.35:5001/api/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (err) {
      console.error('Error deleting transaction:', err);
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response?.data?.error || 'Server error'
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      // Only send text and amount (and image if present)
      const { text, amount, image } = transaction;
      const body = { text, amount, image };
      const res = await axios.post('http://192.168.1.35:5001/api/transactions', body);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data
      });
    } catch (err) {
      console.error('Error adding transaction:', err);
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response?.data?.error || 'Server error'
      });
    }
  }

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
