import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAppContext } from "../../context/AppContext";

const BalanceChart = () => {
  const { transactions } = useAppContext();

  const data = transactions.map((t) => ({
    date: t.date,
    amount: t.type === "income" ? t.amount : -t.amount,
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow m-4">
      <h2 className="mb-4 font-semibold">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;