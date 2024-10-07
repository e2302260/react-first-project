import React from 'react';
import Expenses from './components/Expenses/Expenses';

function App() {

const expenses = [
  { 
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date("2022-07-14"),
  },
  { 
  id: 'e2',
  title: 'New TV',
  amount: 799.49,
  date: new Date("2023-08-12"),
 },
 { 
  id: 'e3',
  title: 'Car Insurance',
  amount: 300.00,
  date: new Date("2023-01-01"),
 },
{ 
  id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date("2022-01-09"),
 },
];

  return (
    <div>
      <Expenses items={expenses}/>
      <h5>Ville Niemi / VAMK / BIT</h5>
    </div>
  );
}

export default App;
