import { Link,useLocation } from "react-router-dom";


const Header = () => {

  const location=useLocation();

  function changeStyle(route){
     if(route===location.pathname){
      return true;
     }
  }
  console.log(changeStyle("/"));
  
  return (
    <div className="w-full  border-b shadow-sm sticky top-0 z-50">
      <header className="w-full flex max-w-6xl mx-auto justify-between items-center ">
        <div className="">
          <Link to={"/"}>
            <img
              className="h-20"
              src="https://b2cdata.marketing.moveaws.com/assets/images/social-img-ph.jpg"
              alt="Realtor"
            />
          </Link>
        </div>
        <div className="">
          <ul className="flex items-center space-x-10">
            <Link to={"/"}>
              <li className={`text-slate-400 font-semibold border-b-[3px] border-transparent text-sm   pb-2 ${changeStyle("/")&&"border-b-red-700 pb-2 "}`}>Home</li>
            </Link>
            <Link to={"/offers"}>
              <li className={`text-slate-400 font-semibold border-b-[3px] border-transparent text-sm  pb-2 ${changeStyle("/offers")&&"border-b-red-700  pb-2"}`}>Offers</li> 
            </Link>
            <Link to={"/signIn"}>
              <li className={`text-slate-400 font-semibold border-b-[3px] border-transparent text-sm  pb-2 ${changeStyle("/signIn")&&"border-b-red-700  pb-2"}`}>Sign In</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
