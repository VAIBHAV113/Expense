import React, { useState } from "react";
import "./expenses.css";
import ExpenseItem from "../ExpenseItem";
import ExpenseFilter from "../filter/expenseFilter";

export default function Expenses(props) {
  const [curr, setCurr] = useState("2020");
  const handleFilterChild = (value) => {
    console.log(value);
    setCurr(value);
  };

  const filteredProps = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === curr;
  });

  let expensesContent = <p>No Expenses found</p>;

  if(filteredProps.length>0)
  {
       expensesContent =  filteredProps.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    
  }
  return (
    <div className="card">
      <ExpenseFilter filter={handleFilterChild} current={curr} />
      {/* {filteredProps.length === 0 ? (
        <p>No Expenses are there</p>
      ) : ( */}
       {expensesContent}
    </div>
  );
}
