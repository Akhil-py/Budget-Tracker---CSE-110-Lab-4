import { Database } from "sqlite";
import { Expense } from "../types";
import { Request, Response } from "express";

export async function createExpenseServer(req: Request, res: Response, db: Database) {
    console.log("CREATING EXPENSES");
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

export async function deleteExpense(req: Request, res: Response, db: Database) {
    // TO DO: Implement deleteExpense function
    const {id} = req.params; 
    console.log("DELETING EXPENSE");
    try {
        if (!id) {
            return res.status(400).send({ error: "Missing required field: id" });
        }

        const result = await db.run('DELETE FROM expenses WHERE id = ?', id);

        if (result.changes === 0) {
            return res.status(404).send({ error: "Expense not found" });
        }
        res.status(200).send({ result });

    } catch (error) {
        return res.status(400).send({ error: `Could not delete expense, + ${error}` });
    };
}

export async function getExpenses(req: Request, res: Response, db: Database) {
    
    try {
        console.log("FETCHING EXPENSES");
        const expenses = await db.all('SELECT * FROM expenses');
        res.status(200).send({ "data": expenses });
    } catch (error) {
        return res.status(400).send({ error: `Could not get expenses, + ${error}` });
    };
}