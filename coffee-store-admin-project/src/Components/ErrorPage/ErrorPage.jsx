import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex w-full max-w-7xl  mx-auto min-h-screen justify-center items-center">
      <div className="w-full h-full ">
        <img
          className="w-full h-full"
          src="https://i.postimg.cc/3Rfj9v9t/404.gif"
          alt=""
        />
        <div className="flex justify-center">
          <Link to={'/'}>
            <button className="bg-blue-600 btn">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
