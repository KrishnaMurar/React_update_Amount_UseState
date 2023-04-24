import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

  const ExpenseItem = (props) => {
     const [Amount, setAmount] = useState(props.Amount);

     const clickHandler = () => {
      console.log(Amount);
      setAmount(100);
      
     }
     
     

    return (
     
      
      <Card className='expense-item'>

      <ExpenseDate Date ={props.Date} />
      
       <div className ='expense-item__description'>
        <h2>{props.title}</h2>
        <div className ='expense-item__location'>{props.location}</div>
        <div className ='expense-item__price'>${Amount} 
        <button onClick= {clickHandler}>Update Amount</button>
        </div>
       </div>
      
       
      </Card>
     
    );
  }
 
  export default ExpenseItem