import { useAppContext } from "../../context/AppContext";
import { formatCurrency, formatDate } from "../../utils/formatters";
import { useState } from "react";
import TransactionFilters from "./TransactionFilters";
import AddTransactionModal from "./AddTransactionModal";

const TransactionList = () => {
  const { transactions, deleteTransaction, userRole } = useAppContext();

  const [filters, setFilters] = useState({
    search: "",
    type: "",
    category: "",
  });

  const [editData, setEditData] = useState(null);

  //  Handle Edit
  const handleEdit = (transaction) => {
    setEditData(transaction);
  };

  //  Filter Logic
  const filteredTransactions = transactions.filter((t) => {
    return (
      t.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.type ? t.type === filters.type : true) &&
      (filters.category
        ? t.category.toLowerCase().includes(filters.category.toLowerCase())
        : true)
    );
  });

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>

      {/*  Edit Modal */}
      <AddTransactionModal
        editData={editData}
        setEditData={setEditData}
      />

      {/*  Filters */}
      <TransactionFilters onFilter={setFilters} />

      {/*  List */}
      <div className="space-y-3">
        {filteredTransactions.map((t) => (
          <div
            key={t.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            {/* LEFT */}
            <div>
              <h3 className="text-black font-medium">{t.title}</h3>
              <p className="text-sm text-black">
                {t.category} • {formatDate(t.date)}
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              
              {/*  Amount */}
              <div
                className={`font-semibold ${
                  t.type === "income"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {t.type === "income" ? "+" : "-"}
                {formatCurrency(t.amount)}
              </div>

              {/*  Admin Controls */}
              {userRole === "admin" && (
                <>
                  {/* Edit */}
                  <button
                    onClick={() => handleEdit(t)}
                    className="px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded"
                  >
                    Edit
                  </button>

                  {/*  Delete */}
                  <button
                    onClick={() => deleteTransaction(t.id)}
                    className="px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
