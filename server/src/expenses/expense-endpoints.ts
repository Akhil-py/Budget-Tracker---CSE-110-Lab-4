import { createExpenseServer, deleteExpense, getExpenses } from "./expense-utils";
import { Request, Response } from 'express';

export function createExpenseEndpoints(app: any, expenses: any) {
    // Create a new expense
    app.post("/expenses", (req: Request, res: Response) => {

        createExpenseServer(req, res, expenses);

    });

    // Delete an expense
    app.delete("/expenses/:id", (req: Request, res: Response) => {

        deleteExpense(req, res, expenses);

    });

    // Get all expenses
    app.get("/expenses", (req: Request, res: Response) => {

        getExpenses(req, res, expenses);

    });

}