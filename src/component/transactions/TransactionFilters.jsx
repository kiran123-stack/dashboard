import { useState } from "react";

const TransactionFilters = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilter({ search, type, category });
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow mb-4 space-y-3 md:flex md:gap-4 md:items-center md:space-y-0">
      
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded w-full"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="text"
        placeholder="Category"
        className="border p-2 rounded w-full"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>
  );
};

export default TransactionFilters;