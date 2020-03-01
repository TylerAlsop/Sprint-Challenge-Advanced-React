import React, {useState} from 'react';

export const makeFavPlayer = (key, initialValues, cb) => {
  const [items, setItems] = useState([]);




  const handleClick = e => {
    // console.log(e.target.value);
    e.target = !e.target
    console.log(items);
  };
 
  
  return [handleClick];
};