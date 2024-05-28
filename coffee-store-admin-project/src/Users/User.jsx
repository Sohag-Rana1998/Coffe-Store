import axios from 'axios';
import useUserData from '../useUsersData/useUserData';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = () => {
  const { data, refetch } = useUserData();
  console.log(data);

  const handleDelete = id => {
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
        axios
          .delete(`https://coffee-store-server-pi-three.vercel.app/users/${id}`)
          .then(data => {
            console.log(data);
            Swal.fire({
              title: 'Deleted!',
              text: 'User data has been deleted.',
              icon: 'success',
            });
            refetch();
          });
      }
    });
  };

  return (
    <div className="max-w-7xl container mx-auto px-5 ">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No:</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created at</th>
              <th>Last logged at</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((user, index) => (
              <tr key={user._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user.email}</td>
                <td>{user.createDate}</td>
                <td>{user.signInTime}</td>
                <td>
                  <Link to={`/update-user/${user._id}`}>
                    <button className="btn">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
