import React, {useState} from 'react';

export const useToggle = (key, initialValues, cb) => {
  const [items, setItems] = useState([]);



  
  const handleClick = e => {
    // console.log(e.target.value);
    setItems({
      ...items
    });
    console.log(items);
  };
 
  
  return [handleClick];
};