import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex items-center space-x-2 w-full justify-center bg-red-600 text-white rounded-lg p-2 uppercase hover:bg-red-400 transition duration-150 ease-in-out">
      <FcGoogle/>
      <span> Continue with Google</span>
    </button>
  );
};

export default OAuth;
