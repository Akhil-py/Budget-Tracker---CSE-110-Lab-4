import { getBudget, updateBudget } from "./budget-utils";
import { Request, Response } from 'express';

export function createBudgetEndpoints(app: any, budget: { amount: number }) {
    // Get the budget
    app.get("/budget", (req: Request, res: Response) => {

        getBudget(res, budget.amount);

    });

    // Update the budget
    app.put("/budget", (req: Request, res: Response) => {
        console.log("SERVER ROUTE REQUEST RECEIVED 1");
        updateBudget(res, req.body, budget);

    });
}