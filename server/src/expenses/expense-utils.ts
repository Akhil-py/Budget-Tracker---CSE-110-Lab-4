import { Database } from "sqlite";
import { Expense } from "../types";
import { Request, Response } from "express";

export async function createExpenseServer(req: Request, res: Response, db: Database) {

    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };
 
        if (!description || !id || !cost) {
            return res.status(400).send({ error: "Missing required fields" });
        }
 
        await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, description, cost]);
        res.status(201).send({ id, description, cost });
 
    } catch (error) {
 
        return res.status(400).send({ error: `Expense could not be created, + ${error}` });
    };
 
 } 

export function deleteExpense(req: Request, res: Response, expenses: Expense[]) {
    // TO DO: Implement deleteExpense function
    const {id} = req.params; 
  

    if (!id) {
        return res.status(400).send({ error: "Missing required field: id" });
    }

    const expenseIndex = expenses.findIndex(expense => expense.id === id);

   if (expenseIndex === -1) {
       return res.status(404).send({ error: "Expense not found" });
    }

    const deletedExpense = expenses.splice(expenseIndex, 1)[0]; 

    res.status(200).send(deletedExpense);
}

export async function getExpenses(req: Request, res: Response, db: Database) {
    
    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };
 
        if (!description || !id || !cost) {
            return res.status(400).send({ error: "Missing required fields" });
        }
 
        await db.run('SELECT * FROM expenses');
        res.status(200).send({ id, description, cost });
 
    } catch (error) {
 
        return res.status(400).send({ error: `Could not get expenses, + ${error}` });
    };
    
    
    
    
    
    
    res.status(200).send({ "data": expenses });
}