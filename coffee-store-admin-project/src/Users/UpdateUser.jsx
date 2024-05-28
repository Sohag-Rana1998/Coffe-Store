import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://coffee-store-server-pi-three.vercel.app/users/${id}`)
      .then(data => {
        setUser(data.data);
      });
  }, [id]);

  console.log(user);

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    console.log(updateUser);
    axios
      .patch(
        `https://coffee-store-server-pi-three.vercel.app/users`,
        updateUser
      )
      .then(data => {
        console.log(data);
        Swal.fire({
          title: 'User Updated',
          text: 'User information has been updated.',
          icon: 'success',
        });
      });
  };
  return (
    <div className="hero max-w-screen-2xl px-5 md:px-52 w-full mx-auto  bg-base-200 my-16">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update now! (Name only)</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Email (you cannot change email)
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                value={user.email}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
