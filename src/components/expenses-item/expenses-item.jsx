import React from 'react';
export default function ExpensesItem(props) {
    return (
        <article className="product">
            <h2>Product : {props.title}</h2>
            <p className="price"> ${props.price}</p>
            <p>{props.date}</p>
        </article>
    );
}