import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";


const PrivateRoute = () => {
    const{loggedIn,checkStatus}=useAuthStatus();

    if(checkStatus){
        return <p>Loading..................</p>
    }

  return  loggedIn?<Outlet/>:<Navigate to={"/signIn"}/>

}

export default PrivateRoute