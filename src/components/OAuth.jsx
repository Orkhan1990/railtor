import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {  toast } from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate=useNavigate();

  const authViaGoogle=async ()=>{
    try {
      const auth=getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth,provider);
      const user= result.user;

      //check for the user 

      const docRef= doc(db,"users",user);
      const docSnap= await getDoc(docRef);

      if(!docSnap.exists())
      {
          await setDoc(docRef,{
            name:user.displayName,
            email:user.email,
            timestamp:serverTimestamp()
          })
        }
        navigate("/");
        toast.success("Sign up successfuly occured!")
    } catch (error) {
      toast.error("Could not authorize with Google")
    }



  }
  return (
    <button onClick={authViaGoogle} className="flex items-center space-x-2 w-full justify-center bg-red-600 text-white rounded-lg p-2 uppercase hover:bg-red-400 transition duration-150 ease-in-out">
      <FcGoogle className="bg-white mr-1"/>
      <span> Continue with Google</span>
    </button>
  );
};

export default OAuth;
