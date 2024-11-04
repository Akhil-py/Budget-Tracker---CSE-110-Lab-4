import AddExpenseForm from "../components/Expense/AddExpenseForm";
import Budget from "../components/Budget/Budget";
import ExpenseList from "../components/Expense/ExpenseList";
import ExpenseTotal from "../components/Expense/ExpenseTotal";
import Remaining from "../components/Remaining";

export const MyBudgetTracker = () => {
  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};
