function TransactionList({transactions}) {
    
    // console.log(transactions);
    return (
       transactions && transactions.length === 0 ? (
        
        <div className="transaction-list">
           <p>No Transactions yet</p></div>
           
        ): (<div className="transaction-list">
            
            {/* {transactions.map(trans=> (
                <div key={trans.id}>
                    {trans.date} - {trans.category} - {trans.type} - ₹{+trans.amount}
                </div>
            ))} */}

             {transactions.map((tx) => (
            <div key={tx.id} className="transaction-item">
                <div className="left">
                    <span className="category">{tx.category}</span>
                    <span className="date">{tx.date}</span>
                </div>

                <div className="right">
                    <span className={tx.type === "income" ? "amount income" : "amount expense"}>
                    {tx.type === "income" ? "+" : "-"}₹{tx.amount}
                    </span>
                </div>
            </div>
  ))}
            </div>
        )
    )
}

export default TransactionList
  