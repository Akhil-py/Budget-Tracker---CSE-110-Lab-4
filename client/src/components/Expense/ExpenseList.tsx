import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Expense } from "../../types/types";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense: Expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
      ))}
    </ul>
  );
};

export default ExpenseList;
