import React from 'react';
import { render, screen, fireEvent, getByTestId, getAllByTestId } from "@testing-library/react";
import App from './App';

describe('Create expense and check update to expense list and budget',()=>{
  test('Test for expense list update after new expense', () => {
    render(<App />);
    const name=screen.getByTestId("nameInput");
    const cost=screen.getByTestId("costInput");
    const save=screen.getByText("Save");
    fireEvent.change(name,{target:{value:"UCSD"}});
    fireEvent.change(cost,{target:{value:60}});
    fireEvent.click(save);
    fireEvent.change(name,{target:{value:""}});
    fireEvent.change(cost,{target:{value:""}})
    const expenses=screen.queryAllByTestId("expense");
    expect(expenses).toHaveLength(1);

    const names=screen.getByText("UCSD");
    const newcost=screen.getByText("$60");
    const budget=screen.getByText("Remaining: $1940");
    const spent=screen.getByText("Spent so far: $80")
    expect(budget).toBeInTheDocument();
    expect(spent).toBeInTheDocument();
    expect(names).toBeInTheDocument();
    expect(newcost).toBeInTheDocument();
  });

});

describe('Delete expense and check update to expense list and budget',()=>{
  test('Test for expense list update after deleting expense', () => {
    render(<App />);
    const name=screen.getByTestId("nameInput");
    const cost=screen.getByTestId("costInput");
    const save=screen.getByText("Save");
    fireEvent.change(name,{target:{value:"UCSD"}});
    fireEvent.change(cost,{target:{value:60}});
    fireEvent.click(save);
    fireEvent.change(name,{target:{value:""}});
    fireEvent.change(cost,{target:{value:""}})
    const deleteButton=screen.getAllByText("x");
    const budget=screen.getByText("Remaining: $1940");
    const spent=screen.getByText("Spent so far: $60");
    fireEvent.click(deleteButton[0]);
    const newbudget=screen.getByText("Remaining: $2000");
    const newspent=screen.getByText("Spent so far: $0");
    expect(newbudget).toBeInTheDocument();
    expect(newspent).toBeInTheDocument();
    
  });

});