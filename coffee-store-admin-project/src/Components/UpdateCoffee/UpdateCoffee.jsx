import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    console.log(name, chef, supplier, taste, category, details, photo);
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    fetch(`https://coffee-store-server-pi-three.vercel.app/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Coffee updated Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className=" max-w-screen-2xl w-full mx-auto">
      <div className="w-5/6 bg-[#F4F3F0] mx-auto rounded-xl p-5 md:p-16">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold  text-[#374151]">Update Coffee</h3>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="w-full flex justify-between items-center gap-5">
            <div className="w-1/2">
              <h2 className="font-bold mb-2">Name:</h2>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter Coffee Name"
                className="input w-full"
              />
            </div>
            <div className="w-1/2">
              <h2 className="font-bold mb-2">Chef:</h2>
              <input
                defaultValue={chef}
                type="text"
                name="chef"
                placeholder="Enter Coffee Chef"
                className="input w-full"
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-5 mt-4">
            <div className="w-1/2">
              <h2 className="font-bold mb-2">Supplier:</h2>
              <input
                type="text"
                defaultValue={supplier}
                name="supplier"
                placeholder="Enter Coffee Supplier "
                className="input w-full"
              />
            </div>
            <div className="w-1/2">
              <h2 className="font-bold mb-2">Taste:</h2>
              <input
                type="text"
                defaultValue={taste}
                name="taste"
                placeholder="Enter Coffee taste"
                className="input w-full"
              />
            </div>
          </div>
          <div className="flex w-full justify-between items-center gap-5 mb-4">
            <div className="w-1/2">
              <h2 className="font-bold mb-2">Category:</h2>
              <input
                type="text"
                defaultValue={category}
                name="category"
                placeholder="Enter Coffee Category "
                className="input w-full"
              />
            </div>
            <div className="w-1/2">
              <h2 className="font-bold mb-2">Details:</h2>
              <input
                type="text"
                defaultValue={details}
                name="details"
                placeholder="Enter Coffee Details"
                className="input w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-2">Photo URL:</h2>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter Coffee Photo URL"
              className="input w-full mb-2"
            />
            <input
              type="submit"
              value={'Update Coffee'}
              className="input w-full bg-[#D2B48C]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
