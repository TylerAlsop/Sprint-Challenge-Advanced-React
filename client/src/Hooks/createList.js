import React, {useState} from 'react';

export const createList = (key, initialValues, cb) => {
  const [items, setItems] = useState([]);

  const handleChanges = e => {
    // console.log(e.target.value);
    setItem({
      ...items,
      // username: hello
      [e.target.name]: e.target.value
    });
    console.log(items);
  };
 
  
  return [setItem];
};