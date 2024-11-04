import { Expense } from "../../types/types";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { deleteExpense } from "../../utils/expense-utils";

const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here
  const {expenses, setExpenses} = useContext(AppContext);

  const handleDeleteExpense = (currentExpense: Expense) => {
    // Exercise: Remove expense from expenses context array
    //setExpenses(prevExpenses => prevExpenses.filter((_, i) => i !== currentExpense));
    const index = expenses.findIndex(item => item.id === currentExpense.id);
    if (index !== -1) {
      const newArray = [...expenses.slice(0, index), ...expenses.slice(index + 1)];
      setExpenses(newArray);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center"  data-testid="expense">
      <div>{currentExpense.description}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
