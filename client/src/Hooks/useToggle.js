import React, {useState} from 'react';

export const createList = (key, initialValues, cb) => {
  const [items, setItems] = useState([]);
  
  const newKeyValue = (object, newKey, newValue) => {
    return object.newKey.newValue
  };

  const handleClick = e => {
    // console.log(e.target.value);
    setItems({
      ...items, newKeyValue()
    });
    console.log(items);
  };
 
  
  return [handleClick];
};