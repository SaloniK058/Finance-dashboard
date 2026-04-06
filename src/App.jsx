import { useReducer,useState } from "react";
import SummaryCard from "./components/SummaryCard"
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ExpensePieChart from "./components/ExpensePieChart";
import BalanceTrend from "./components/BalanceTrend";
import AddonFilter from "./components/AddonFilter";


const data = [{type: 'balance' , amount: "₹25,000", title:"Balance"}, {type: 'income' , amount: "₹50,000" ,title:"Income"}, {type: 'expense' , amount: "₹25,000", title:"Expenses"}];

const initialState ={
  amount: "",
  category: "",
  type: "income",
  transactionsHistory: []} 

function reducer(state, action){
  switch(action.type){
    case "Set_Amount" :
      return{
        ...state, amount: action.payload,
      }
      case "Set_Category": 
      return {
        ...state,category: action.payload,
      }
      case "Set_Type":
        return {
          ...state, type: action.payload,
      }
      case "Add_Transaction": 
      return {
        ...initialState, transactionsHistory: [...state.transactionsHistory, action.payload],
      }
      default: 
      throw new Error ("Something went wrong")
  }
}

function App() {

  const [filter, setFilter]= useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  function saveTransactions(){
   if (!state.amount || !state.category) return;
    dispatch({
      type: "Add_Transaction",
      payload: {
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        amount: state.amount,
        category: state.category,
        type: state.type,
      }
    }) 
  }
      const filteredTransactions = state.transactionsHistory.filter((tx) => {
          if (filter === "all") return true;
          return tx.type === filter;
    });

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
      <SummaryCard data={data} 
      transactions={state.transactionsHistory}/>
      <TransactionForm saveTransactions={saveTransactions} 
      dispatch={dispatch} 
      currState={state}  />
      <div className="charts-container">
        <div className="chart-box">
      <ExpensePieChart transactions={state.transactionsHistory}/></div>
      <div className="chart-box">
      <BalanceTrend transactions={state.transactionsHistory}/></div>
      </div>
      {/* <AddonFilter filter={filter} setFilter={setFilter}/> */}
      <AddonFilter filter={filter} setFilter={setFilter}/>
      <TransactionList transactions={filteredTransactions}/>
    </div>
  )
}

export default App
