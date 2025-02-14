import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Expense } from "../../types/types";
import { createExpense } from "../../utils/expense-utils";

const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here
  const {expenses, setExpenses} = useContext(AppContext);

  // Exercise: Create name and cost to state variables
  const [name, setName] = useState<string>("")
  const [cost, setCost] = useState<number | "">(0)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Exercise: Add add new expense to expenses context array
    const newExpense: Expense = {
      id: Math.floor(Math.random() * 10000).toString(),
      description: name,
      cost: parseFloat(cost.toString()),
    }
    createExpense(newExpense);
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };
  
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            data-testid="nameInput"
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            // HINT: onChange={}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            data-testId="costInput"
            required
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            // HINT: onChange={}
            onChange={(e) => setCost(e.target.value===""?"":parseFloat(e.target.value))}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
