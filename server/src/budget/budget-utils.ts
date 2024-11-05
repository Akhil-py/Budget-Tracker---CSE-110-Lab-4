import { Response } from 'express';


// Function to get the budget
export function getBudget(res: Response, budget: number) {
    res.status(200).send({ "data": budget });
}

// Function to update the budget
export function updateBudget(res: Response, body: any, budget: { amount: number }) {
    // TO DO: Implement updateBudget function
    console.log("RECEIVED REQUEST ON SERVER with body: ", body);
    const { newbudget } = body;

    if (!body) {
        return res.status(400).send({ error: "Missing body" });
    }

    budget.amount = body.amount;
    res.status(201).send({ amount: budget.amount });
}
