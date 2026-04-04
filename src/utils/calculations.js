// calculations.js

// Total Income
export const getTotalIncome = (transactions) => {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
};

// Total Expense
export const getTotalExpense = (transactions) => {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
};

//  Balance = Income - Expense
export const getBalance = (transactions) => {
  const income = getTotalIncome(transactions);
  const expense = getTotalExpense(transactions);
  return income - expense;
};