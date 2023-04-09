import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/forms/form";
import { useState } from "react";

import Expenses from "./components/expenses/expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {


  const [item, setItem] = useState(DUMMY_EXPENSES);

  const handleStateUp = (newExpense) => {
    const expen = { ...newExpense, id: Math.random().toString() };
    console.log(expen);
    setItem((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <Form onSaveData={handleStateUp} />
      <Expenses items={item}  />
    </div>
  );
}

export default App;
