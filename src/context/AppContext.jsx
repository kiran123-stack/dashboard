import { createContext, useContext, useState } from "react";
import { transactions as initialData } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("admin"); 
  const [transactions, setTransactions] = useState(initialData);

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      { id: Date.now(), ...newTransaction },
      ...prev,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const editTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updatedTransaction.id ? updatedTransaction : t))
    );
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

export const useAppContext = () => useContext(AppContext);
