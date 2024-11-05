import { API_BASE_URL } from "../constants/constants";

// Function to get budget from the backend. Method: GET
export const fetchBudget = async (): Promise<number> => {
    const response = await fetch(`${API_BASE_URL}/budget`);
	if (!response.ok) {
    	throw new Error('Failed to fetch budget');
	}

	// Parsing the response to get the data
	let budget = response.json().then((jsonResponse) => {
    	console.log("data in fetchBudget", jsonResponse);
    	return jsonResponse.data;
	});

	console.log("response in fetchBudget", budget);
	return budget;
};

// Function to update the budget in the backend. Method: PUT
export const updateBudget = async (budget: number): Promise<number> => {
    console.log("CLIENT SIDE UPDATE BUDGET CALLED");
    console.log(budget);
    const response = await fetch(`${API_BASE_URL}/budget`, {
    	method: "PUT",
    	headers: {
        	"Content-Type": "application/json",
    	},
    	body: JSON.stringify({ amount: budget }),
	});
	if (!response.ok) {
    	throw new Error("Failed to update budget");
	}
    
    
    const responseBody = await response.text();
    if (responseBody) {
        return JSON.parse(responseBody);
    } else {
        console.warn("Received an empty response");
        return budget; 
    }
};
