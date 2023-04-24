import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {
    return(
<Card className="expenses">
<ExpenseItem
         title = {props.items[0].title}
         Date = {props.items[0].Date}
         Amount = {props.items[0].Amount}
         location= {props.items[0].location}
         
         />
<ExpenseItem
title = {props.items[1].title}
Date = {props.items[1].Date}
Amount = {props.items[1].Amount}
location = {props.items[1].location}
/>
<ExpenseItem
        title = {props.items[2].title}
         Date = {props.items[2].Date}
         Amount = {props.items[2].Amount}
         location = {props.items[2].location}
        />
</Card> 
    );
}
export default Expenses;
