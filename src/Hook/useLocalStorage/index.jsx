import { useEffect } from 'react';
import { useState } from 'react';

const getDataOfLocalStorage = (key, value) => {
  const data = JSON.parse(localStorage.getItem(key));
  if (!data) return value;
  return data;
};

const useLocalStorage = ({ key, value }) => {
  const [data, setData] = useState(getDataOfLocalStorage(key, value));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);
  return [data, setData];
};

export default useLocalStorage;
