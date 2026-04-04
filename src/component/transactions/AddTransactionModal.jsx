import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const AddTransactionModal = ({ editData, setEditData }) => {
  const { addTransaction, editTransaction, userRole } = useAppContext();

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  // Auto-fill when editing
  useEffect(() => {
    if (editData) {
      setForm(editData);
      setOpen(true);
    }
  }, [editData]);

  //  Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    //  Validation first
    if (!form.title || !form.amount || !form.category || !form.date) {
      alert("Please fill all fields");
      return;
    }

    if (editData) {
      // UPDATE
      editTransaction({
        ...form,
        amount: Number(form.amount),
      });
      setEditData(null);
    } else {
      //  ADD
      addTransaction({
        ...form,
        amount: Number(form.amount),
      });
    }

    // 🔄 Reset form
    setForm({
      title: "",
      amount: "",
      type: "expense",
      category: "",
      date: "",
    });

    setOpen(false);
  };

  return (
    <>
      {/*  Add Button (Admin only) */}
      {userRole === "admin" && (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
        >
          + Add Transaction
        </button>
      )}

      {/*  Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            
            <h2 className="text-lg font-semibold mb-4">
              {editData ? "Edit Transaction" : "Add Transaction"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              
              <input
                type="text"
                placeholder="Title"
                className="w-full border p-2 rounded"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <input
                type="number"
                placeholder="Amount"
                className="w-full border p-2 rounded"
                value={form.amount}
                onChange={(e) =>
                  setForm({ ...form, amount: e.target.value })
                }
              />

              <select
                className="w-full border p-2 rounded"
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value })
                }
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>

              <input
                type="text"
                placeholder="Category"
                className="w-full border p-2 rounded"
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              />

              <input
                type="date"
                className="w-full border p-2 rounded"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
              >
                {editData ? "Update" : "Add"}
              </button>
            </form>

            <button
              onClick={() => {
                setOpen(false);
                setEditData(null);
              }}
              className="mt-3 text-sm text-red-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTransactionModal;