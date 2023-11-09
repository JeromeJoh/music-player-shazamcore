import { useState, useEffect } from "react";

function useSessionStorage(key, initialValue) {

  const [state, setState] = useState(() => {
    try {
      const sessionStorageValue = sessionStorage.getItem(key);
      return sessionStorageValue ? JSON.parse(sessionStorageValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    console.log('State', state);
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  
  return [state, setState];
}


export {
  useSessionStorage,
}