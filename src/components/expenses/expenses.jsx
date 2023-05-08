import React from "react";
import ExpensesItem from "../expenses-item/expenses-item";
import './expenses.css'

export default function Expenses(props) {

  <div className="expenses">
    <ExpensesItem
      title={props.items[0].title}
      price={props.items[0].price}
      date={props.items[0].date}
    />
    <ExpensesItem
      title={props.items[1].title}
      price={props.items[1].price}
      date={props.items[1].date}
    />
    <ExpensesItem
      title={props.items[2].title}
      price={props.items[2].price}
      date={props.items[1].date}
    />
  </div>;
}
