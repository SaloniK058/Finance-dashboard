function AddonFilter({filter, setFilter}) {
    return (
        <div>
             <select value={filter} onChange={(e) => setFilter(e.target.value)}>
    <option value="all">All</option>
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>
        </div>
    )
}

export default AddonFilter
