import React, { useState } from "react";
import "./form.css";
export default function Form(props) {
  const [extitle, setTitle] = useState("");
  const [exdate, setDate] = useState("");
  const [examount, setAmount] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleTitleState = (event) => {
    setTitle(event.target.value);
  };
  const handleAmountState = (event) => {
    setAmount(event.target.value);
  };
  const handleDateState = (event) => {
    setDate(event.target.value);
  };

  const handleButton = () => {
    setClicked(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: extitle,
      amount: examount,
      date: new Date(exdate),
    };
    props.onSaveData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      {clicked ? (
        <form className="formClass">
          <div className="divmain">
            <div className="titleDiv">
              <label className="label">Title</label>
              <input
                className="input"
                type="text"
                value={extitle}
                onChange={handleTitleState}
              />
            </div>
            <div className="titleDiv">
              <label className="label">Amount</label>
              <input
                className="input"
                type="number"
                value={examount}
                onChange={handleAmountState}
              />
            </div>
          </div>
          <div className="titleDiv">
            <label className="label">Date</label>
            <input
              className="input1"
              type="date"
              value={exdate}
              onChange={handleDateState}
            />
          </div>
          <div className="btnDiv">
            <button className="btn1" onClick={() => setClicked(false)}>
              cancel
            </button>
            <button className="btn1" onClick={handleSubmit}>
              Add Expense
            </button>
          </div>
        </form>
      ) : (
        <div className="back">
          <button className="btn2" onClick={handleButton}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
}
