import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAppContext } from "../../context/AppContext";

const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b", "#a855f7"];

const PieChartBox = () => {
  const { transactions } = useAppContext();

  const categoryData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow m-4">
      <h2 className="mb-4 font-semibold">Spending Breakdown</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;