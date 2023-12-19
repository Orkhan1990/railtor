import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";



const ForgotPassword = () => {
  const[email,setEmail]=useState("");

  const handleChange = (e) => {
     setEmail(e.target.value)
  };

  console.log(email);
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="my-5 text-center font-bold text-3xl">Forgot Password</h1>
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
              value={email}
            />
          
            <div className="flex justify-between mb-6">
              <p>
                Don't have any account yet?
                <Link to={"/signUp"} className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">
                Register
                </Link>
              </p>
              <p className="text-blue-700 hover:text-blue-400 transition duration-200 ease-in-out">
                <Link to={"/signIn"}>
                Sign in instead
                </Link>
              </p>
            </div>
            <button className="w-full bg-blue-700 text-white font-semibold uppercase rounded-lg p-2 hover:bg-blue-500 transition duration-200 ease-in-out">Send reset password</button>
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

export default ForgotPassword