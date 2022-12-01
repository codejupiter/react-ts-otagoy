import * as React from 'react';
import './style.css';

const nums = [];
const randomNumber = (start: number, end: number) => {
  for(let i = 0 ; i < 10 ; ++ i)
    nums.push(Math.floor(Math.random() * (end - start)));
}
randomNumber(0,40);

const numItems = nums.map(num => (
  <li>{num}</li>
))

export default function App() {
  
  

  return (
    <ul>{numItems}</ul>
  );
}
