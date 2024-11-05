import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { fetchBudget, updateBudget } from "../../utils/budget-utils";

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [editing, setEditing] = useState(false);  // Controls edit mode
  const [inputBudget, setInputBudget] = useState(budget); // Holds new budget value

  // Handle budget edit toggle
  const handleEditClick = () => {
    setEditing(true);
    setInputBudget(budget); // Set input to current budget
  };

  // Handle input change
  const handleInputChange = (e: { target: { value: any; }; }) => {
    setInputBudget(Number(e.target.value));
  };

  // Handle save budget
  const handleSaveClick = () => {
    updateBudget(inputBudget); // Update budget
    setEditing(false); // Exit editing mode
    console.log("Success");
  };

  // Handle cancel editing
  const handleCancelClick = () => {
    setEditing(false);
    setInputBudget(budget); // Reset input to current budget
  };


  // Fetch budget on component mount
  useEffect(() => {
    loadBudget();
  }, []);
  
    // Function to load expenses and handle errors
    const loadBudget = async () => {
    try {
      setBudget(await fetchBudget());
    } catch (err: any) {
      console.log(err.message);
    }
    };
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {editing ? (
        <div className="d-flex align-items-center">
          <input
            type="number"
            value={inputBudget}
            onChange={handleInputChange}
            className="form-control mr-2"
            min="0"
          />
          <button onClick={handleSaveClick} className="btn btn-primary btn-sm mr-2">
            Save
          </button>
          <button onClick={handleCancelClick} className="btn btn-secondary btn-sm">
            Cancel
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center">
          <div>Budget: ${budget}</div>
          <button onClick={handleEditClick} className="btn btn-sm btn-outline-primary ml-3">
            Edit
          </button>
        </div>
      )}
    </div>
  );
};


export default Budget;
