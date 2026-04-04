import { useAppContext } from "../../context/AppContext";
import {
  getTotalIncome,
  getTotalExpense,
  getBalance,
} from "../../utils/calculations";
import { formatCurrency } from "../../utils/formatters";

const SummaryCards = () => {
  const { transactions } = useAppContext();

  const income = getTotalIncome(transactions);
  const expense = getTotalExpense(transactions);
  const balance = getBalance(transactions);
  const savings = balance; // simple for now

  const cards = [
    { title: "Income", value: income },
    { title: "Expense", value: expense },
    { title: "Balance", value: balance },
    { title: "Savings", value: savings },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
        >
          <h2 className="text-sm text-gray-500">{card.title}</h2>
          <p className="text-lg font-bold mt-2">
            {formatCurrency(card.value)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;