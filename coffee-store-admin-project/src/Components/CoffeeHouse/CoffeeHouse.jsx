import PropTypes from 'prop-types';
import { FaBeer, FaEye } from 'react-icons/fa';
import { MdEditSquare } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeHouse = ({ coffees, isloading, reFetch }) => {
  console.log(coffees);

  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-pi-three.vercel.app/coffee/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              reFetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Coffee has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  return isloading ? (
    <div>Loading</div>
  ) : (
    <div className="max-w-7xl container mx-auto relative">
      <div className="p-5  z-10 px-5 md:px-32 ">
        <div className="flex justify-center">
          <div className="text-center">
            <p>--- Sip & Savor ---</p>
            <h2 className="text-5xl text-[#331A15;] font-bold ">
              Our Popular Products
            </h2>
            <div className="flex justify-center mt-3">
              <Link to={'/add-coffee'}>
                {' '}
                <button className="btn flex items-center gap-2 bg-[#E3B577] border-3 border-[#331A15] text-white">
                  <FaBeer className="text-[#331A15]"></FaBeer> Add Coffee
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {coffees?.slice(0, 7).map(coffee => (
            <div
              key={coffee._id}
              className="card  z-30 items-center card-side bg-[#F5F4F1] shadow-md"
            >
              <figure>
                <img src={coffee.photo} alt="Movie" />
              </figure>
              <div className="flex justify-between w-full pr-5 ">
                <div>
                  <h2 className="card-title mb-3">{coffee.name}</h2>
                  <p className="mb-3">{coffee.chef}</p>
                  <p>Price:890</p>
                </div>
                <div className="card-actions justify-end">
                  <div className="join join-vertical text-white">
                    <Link to={`/coffee/${coffee._id}`}>
                      <button className="btn w-28 text-white join-item bg-[#D2B48C] flex items-center">
                        <FaEye></FaEye> View
                      </button>
                    </Link>

                    <Link to={`/update-coffee/${coffee._id}`}>
                      {' '}
                      <button className="btn w-28 text-white join-item  bg-[#3C393B] flex items-center">
                        <MdEditSquare />
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(coffee._id)}
                      className="btn w-28 text-white join-item  bg-[#EA4744] flex items-center"
                    >
                      <MdDeleteForever></MdDeleteForever>Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="inset-0 w-52 h-52 z-0 absolute bg-[url()] bg-no-repeat top-0 left-0">
        <img
          src="https://i.postimg.cc/T3Dyfj2K/4.png"
          className="h-full w-full"
          alt=""
        />
      </div>
      <div className=" w-72 h-96 z-0 absolute bg-[url()] bg-no-repeat bottom-20 right-0">
        <img
          src="https://i.postimg.cc/x8HzgBx3/5.png"
          className="h-full w-full"
          alt=""
        />
      </div>
    </div>
  );
};

CoffeeHouse.propTypes = {
  coffees: PropTypes.array,
  isloading: PropTypes.bool,
  reFetch: PropTypes.func,
};

export default CoffeeHouse;
