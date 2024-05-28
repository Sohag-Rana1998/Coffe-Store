import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className="font-rancho max-w-screen-2xl container  mx-auto">
      <div className="max-w-7xl container mx-auto">
        <Banner></Banner>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
