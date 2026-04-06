function SummaryCard({transactions}) {
    // console.log(data);
    
    return (
        <div className="container">
            <h1>Finance Dashboard</h1>
            <Cards  transactions={transactions}/>
            
        </div>
    )
}

export default SummaryCard

function Cards({ transactions}){
   
    const income = transactions.filter(t=> t.type === 'income').reduce((acc, cur)=> acc + (+cur.amount),0);

    const expense = transactions.filter(e=> e.type === "expense").reduce((acc, cur)=> acc + (+cur.amount), 0);

    const balance = income - expense;

    // console.log(income);
    return (
    <div className="cards">
                {/* {data.map(i=> (<div className={`card ${i.type} `} key={i.title}>
                    <h2>{i.title}</h2>
                    <p>{i.amount}</p>
                </div>))} */}

                    <div className="card balance">
                        <h2>Balance</h2>
                        <p>₹{balance.toFixed(2)}</p>
                    </div>
                    <div className="card income">
                        <h2>Income</h2>
                        <p>₹{income.toFixed(2)}</p>
                    </div>

                    <div className="card expense">
                        <h2>Expense</h2>
                        <p>₹{expense.toFixed(2)}</p>
                    </div>
                            
                        </div>
    )
}