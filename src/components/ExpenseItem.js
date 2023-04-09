import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  console.log(props);
  return (
    <div className="wrapper">
      <div className="mainDiv">
        <div className="mainDate">
          <div className="month">{month}</div>
          <div className="day">{day}</div>
          <div className="year">{year}</div>
        </div>
        <div className="heading">{props.title}</div>
        <div className="btn">{props.amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
