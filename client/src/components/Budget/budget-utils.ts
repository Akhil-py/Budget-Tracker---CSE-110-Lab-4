import { API_BASE_URL } from "../../constants/constants";

export const fetchBudget = async (): Promise<number> => {
  try {
    const response = await fetch(`${API_BASE_URL}/budget`, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Failed to fetch budget: ${response.statusText}`);
    }
    const data = await response.json();
    return data.budget;
  } catch (error) {
    console.error("Error fetching budget:", error);
    throw error;
  }
};

// New function to update the budget on the server
export const updateBudget = async (newBudget: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/budget`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ budget: newBudget }),
    });
    if (!response.ok) {
      throw new Error(`Failed to update budget: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error updating budget:", error);
    throw error;
  }
};