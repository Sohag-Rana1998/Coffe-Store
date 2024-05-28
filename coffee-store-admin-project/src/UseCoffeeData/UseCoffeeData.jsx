import { useEffect } from 'react';
import { useState } from 'react';

const UseCoffeeData = () => {
  const [isloading, setIsLoading] = useState(false);
  const [coffeeData, setCoffeeData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const reFetch = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('https://coffee-store-server-pi-three.vercel.app/coffee')
      .then(res => res.json())
      .then(data => setCoffeeData(data));
    setIsLoading(false);
  }, [toggle]);

  return { isloading, coffeeData, reFetch };
};

export default UseCoffeeData;
