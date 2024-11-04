import { Expense } from "../../types/types";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { deleteExpense } from "../../utils/expense-utils";

const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here
  const {expenses, setExpenses} = useContext(AppContext);
  const handleDeleteExpense = async (currentExpense: Expense) => {
    const index = expenses.findIndex(item => item.id === currentExpense.id);
    if (index !== -1) {
      const newArray = [...expenses.slice(0, index), ...expenses.slice(index + 1)];
      try {
        await deleteExpense(currentExpense.id); // Await here
        setExpenses(newArray);
      } catch (error) {
        console.error("Failed to delete expense:", error);
      }
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
