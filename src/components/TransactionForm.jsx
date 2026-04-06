function TransactionForm({saveTransactions, dispatch, currState}) {
    
    // console.log(currState.transactionsHistory);
    return (
        <div className="form">
         <h4>Transaction Form</h4>
        <div className="formControls">
            <input type="number" placeholder={`Amount /-`} id="amount"
            value={currState.amount} 
            onChange={e=> dispatch({type: "Set_Amount", payload: e.target.value})}
            />
            <input type="text" placeholder={`Category (eg: Salary)`}
            value={currState.category} id="category"
            onChange={e=> dispatch({type: "Set_Category", payload: e.target.value})}
            />
            <select 
            value={currState.type} id="options"
            onChange={e=> dispatch({type: "Set_Type", payload: e.target.value})}
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <button onClick={ 
                saveTransactions
            }>Save</button>
        </div>
        </div>
    )
}
 
export default TransactionForm
