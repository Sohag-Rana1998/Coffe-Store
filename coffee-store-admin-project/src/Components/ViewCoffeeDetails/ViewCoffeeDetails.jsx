import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewCoffeeDetails = () => {
  const { id } = useParams();

  const [coffee, setCoffee] = useState({});
  useEffect(() => {
    axios
      .get(`https://coffee-store-server-pi-three.vercel.app/coffee/${id}`)
      .then(data => {
        setCoffee(data.data);
      });
  }, [id]);
  console.log(coffee);
  return (
    <div className="w-full md:w-1/2 mx-auto">
      <div className="card flex-col z-30 items-center card-side bg-[#F5F4F1] shadow-md">
        <figure>
          <img src={coffee.photo} alt="Movie" />
        </figure>
        <div className="flex flex-col justify-center items-center p-5 ">
          <h2 className="card-title mb-3">{coffee.name}</h2>

          <p className="mb-3">{coffee.chef}</p>
          <p className="mb-3">{coffee.supplier}</p>
          <p className="mb-3">{coffee.taste}</p>
          <p className="mb-3">{coffee.category}</p>
          <p className="mb-3">{coffee.details}</p>
          <p className="mb-3">{coffee.photo}</p>
          <p>Price:890</p>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffeeDetails;
