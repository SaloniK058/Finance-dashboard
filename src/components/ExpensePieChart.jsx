import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
function ExpensePieChart({transactions}) {

    const COLORS = ['#05335c', '#0c6151', '#FFBB28', '#660707'];

    
  //  Filter only expenses
        const expensesTransactions = transactions.filter(t => t.type === "expense");
    // Now by category
    const data = Object.values(expensesTransactions.reduce((acc, cur)=> {
        if (!acc[cur.category]){
            acc[cur.category] = {name: cur.category, value: 0}
        }
        acc[cur.category].value += (+cur.amount);
        return acc;
    }, {}))
    // coz we want key value pair of category + obj.values give an array of the property values of an object
        
    return (

        data.length === 0 ? (
  <div className="empty-chart">No data yet</div>
) 
      : ( <div className="piechart">
        <PieChart width={400} height={300} border="1px solid red">
            <Pie 
             data={data}
                dataKey = "value"
                nameKey = "name"
                outerRadius ={100}
                cx="50%"
                 cy="50%"
                label>
                {data.map((entry,index)=>(<Cell key={index} fill={COLORS[index % COLORS.length]}/>))}
            </Pie>
            <Tooltip />
      <Legend />
        </PieChart>
        </div>)
    )
}

export default ExpensePieChart
