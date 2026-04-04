import { createContext, useContext, useState } from "react";
import { transactions as initialData } from "../data/mockData";

// Create Context
const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("admin"); 
  const [transactions, setTransactions] = useState(initialData);

  //  Add Transaction
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      {
        id: Date.now(),
        ...newTransaction,
      },
      ...prev,
    ]);
  };

  return (
    <AppContext.Provider
   value={{
    transactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
    userRole,
    setUserRole,
  }}
>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook (easy access)
export const useAppContext = () => {
  return useContext(AppContext);
};

const deleteTransaction = (id) => {
  setTransactions((prev) => prev.filter((t) => t.id !== id));
};

// Edit Transaction
const editTransaction = (updatedTransaction) => {
  setTransactions((prev) =>
    prev.map((t) =>
      t.id === updatedTransaction.id ? updatedTransaction : t
    )
  );
};