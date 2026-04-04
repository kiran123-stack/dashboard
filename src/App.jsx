import BalanceChart from "./component/dashboard/BalanceChart";
import PieChartBox from "./component/dashboard/PieChartBox";
import SummaryCards from "./component/dashboard/SummaryCards";
import AddTransactionModal from "./component/transactions/AddTransactionModal";
import TransactionList from "./component/transactions/TransactionList";
import Layout from "./layout/Layout";



function App() {
  return (
    <Layout>
      <SummaryCards />
      <div className="grid md:grid-cols-2">
        <BalanceChart />
        <PieChartBox/>
      </div>
      <div className="p-4">
        <AddTransactionModal/>
      </div>
      <TransactionList/>
    </Layout>
  );
}

export default App;