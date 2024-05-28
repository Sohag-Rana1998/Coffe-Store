import CoffeeHouse from '../CoffeeHouse/CoffeeHouse';
import UseCoffeeData from '../../UseCoffeeData/UseCoffeeData';
import Banner2 from '../Banner/Banner2';
import FollowUs from './FollowUs';

const Home = () => {
  const { isloading, coffeeData, reFetch } = UseCoffeeData();
  console.log(coffeeData);
  return (
    <div className="max-w-7xl container mx-auto">
      <Banner2></Banner2>
      <CoffeeHouse
        coffees={coffeeData}
        isloading={isloading}
        reFetch={reFetch}
      ></CoffeeHouse>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
