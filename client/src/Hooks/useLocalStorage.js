import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const player = window.localStorage.getItem(key);
        return player ? JSON.parse(player) : initialValue;
  });

  const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
};

export default useLocalStorage;