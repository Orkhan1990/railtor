import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: [e.target.value],
    }));
  };

  console.log(formData);
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="my-5 text-center font-bold text-3xl">Sign In</h1>
      <div className="flex flex-wrap py-12">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="./images/signInPage.jpg"
            alt="signIn"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-12">
          <form>
            <input
              className="mb-6 w-full px-4 py-2 text-gray-700 text-xl bg-white border-gray-300 transition ease-in-out rounded outline-none"
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              id="email"
              value={formData.email}
            />
            <div className="relative mb-6">
              <input
                className=" w-full px-4 py-2 text-gray-700 text-xl bg-white border-gray-300 transition ease-in-out rounded outline-none"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                value={formData.password}
              />

              {showPassword ? (
                <FaEye
                  className="absolute top-4 right-5 cursor-pointer text-xl"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute top-4 right-5 cursor-pointer text-xl"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between mb-6">
              <p>
                Don't have any account yet?
                <Link to={"/signUp"} className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">
                Register
                </Link>
              </p>
              <p className="text-blue-700 hover:text-blue-400 transition duration-200 ease-in-out">
                <Link to={"/forgotPassword"}>
                Forgot Password?
                </Link>
              </p>
            </div>
            <button className="w-full bg-blue-700 text-white font-semibold uppercase rounded-lg p-2 hover:bg-blue-500 transition duration-200 ease-in-out">Sign In</button>
            <div className="my-4 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
              <p className="font-semibold text-center mx-4">OR</p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
