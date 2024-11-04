import React from 'react';
import { render, screen, fireEvent, getByTestId, getAllByTestId } from "@testing-library/react";
import App from './App';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

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
    const spent=screen.getByText("Spent so far: $60")
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

describe('Multiple Expenses and delete to check that budget calculations work',()=>{
  test('Test for expense list update after deleting and adding expense', () => {
    render(<App />);

    const name=screen.getByTestId("nameInput");
    const cost=screen.getByTestId("costInput");
    const save=screen.getByText("Save");
    fireEvent.change(name,{target:{value:"UCSD"}});
    fireEvent.change(cost,{target:{value:60}});
    fireEvent.click(save);

    const name2=screen.getByTestId("nameInput");
    const cost2=screen.getByTestId("costInput");
    const save2=screen.getByText("Save");
    fireEvent.change(name,{target:{value:"Banana"}});
    fireEvent.change(cost,{target:{value:20}})
    fireEvent.click(save);

    const deleteButton=screen.getAllByText("x");

    const budget=screen.getByText("Remaining: $1920");
    const spent=screen.getByText("Spent so far: $80");
    expect(budget).toBeInTheDocument();
    expect(spent).toBeInTheDocument();

    fireEvent.click(deleteButton[0]);
    const newbudget=screen.getByText("Remaining: $1980");
    const newspent=screen.getByText("Spent so far: $20");
    expect(newbudget).toBeInTheDocument();
    expect(newspent).toBeInTheDocument();
    
  });

});