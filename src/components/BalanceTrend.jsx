import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function BalanceTrend({transactions}) {
    // sorting transactions by date
    const sortedTransactions = [...transactions].sort((a,b)=> new Date(a.date) - new Date(b.date));

    // calculating running balance
 
    // let balance = 0;
    // const balanceDate = sortedTransactions.map((tx)=> {
    //     if (tx.type === 'income'){
    //         balance += +tx.amount;
    //     } else {
    //         balance -= +tx.amount;
    //     }
    //     return {
    //         date: tx.date,
    //         balance: balance
    //     }
    // })
    
    const trendData = sortedTransactions.reduce((acc, tx) => {
  const lastBalance = acc.length > 0 ? acc[acc.length - 1].balance : 0;

  const newBalance =
    tx.type === "income"
      ? lastBalance + +tx.amount
      : lastBalance - +tx.amount;

  acc.push({
    date: tx.date,
    balance: newBalance,
  });

  return acc;
}, []);

    const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    return date.toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
  });
};

    return (
        <div className="chart-card">
            <h5>Balance Trend</h5>

            <ResponsiveContainer width='100%' height={250}>
                <LineChart data= {trendData}>
                    <XAxis dataKey="date" tickFormatter={formatDate}/>
                     <YAxis />
                <Tooltip formatter={(value) => `₹${value}`}/>
                <Line type="monotone" dataKey="balance" stroke="#a3172a" strokeWidth={2} />
               </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BalanceTrend
