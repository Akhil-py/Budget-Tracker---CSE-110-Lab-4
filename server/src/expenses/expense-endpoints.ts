import { Database } from "sqlite";
import { createExpenseServer, deleteExpense, getExpenses } from "./expense-utils";
import { Request, Response } from 'express';

export function createExpenseEndpoints(app: any, db: Database) {
   // Create a new expense
   app.post("/expenses", (req: Request, res: Response) => {

       createExpenseServer(req, res, db);
       console.log("Loaded createExpenseServer");

   });

   // Delete an expense
   app.delete("/expenses/:id", (req: Request, res: Response) => {

       deleteExpense(req, res, db);
       console.log("Loaded delete expense");

   });

   // Get all expenses
   app.get("/expenses", (req: Request, res: Response) => {

       getExpenses(req, res, db);
       console.log("Loaded get expenses");

   });

}