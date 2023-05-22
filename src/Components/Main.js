import React, { useEffect, useState } from 'react';
import Card from './Card';

function Main() {

  const [foods, steFoods] = useState([]);
  
  useEffect(() => {
    fetch('./food.json')
    .then(res => res.json())
    .then(data => steFoods(data.food));
  },[])
  return (
    <div className='main'>
      <div className='main-cards'>
        {foods.map(singlFood => <Card food={singlFood}></Card>)}
      </div>
    </div>
  );
}

export default Main;
