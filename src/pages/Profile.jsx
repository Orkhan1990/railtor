import { getAuth } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const auth=getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email:auth.currentUser.email,
  });
   console.log(setFormData());
  const { name, email } = formData;
  return (
    <section className="max-w-6xl mx-auto my-20">
      <h1 className="text-center text-3xl font-bold">My Profile</h1>
      <div className="w-full  mt-6 px-3 flex items-center flex-col">
        <form >
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            disabled
            className="w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            disabled
            className="w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out"
          />
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
            <p>
              Do you want to change your name? <Link className="text-red-700">Edit</Link>
            </p>
            <span className="cursor-pointer text-blue-700">Sign out</span>
          </div>
          <button></button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
