import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../context/Auth";

const Header = () => {
  const { auth, setAuth, Logout } = useAuth();
  const [isopen, setIsOpen] = useState(false);
  const navigate=useNavigate()
  const MENUBAR = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Products", link: "/products" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];

 
  return (
    <>
      <header>
        <nav>
          <div className="hidden md:flex gap-3 justify-between items-center py-2 px-6 bg-teal-200 shadow-sm shadow-gray-400">
            <Link to="/">
              {" "}
              <h2 className="text-[22px] font-medium flex items-center gap-2 ">
                {" "}
                <FaShoppingCart /> ShopMe{" "}
              </h2>
            </Link>
            <ul className=" flex gap-4 ">
              {MENUBAR.map((item, index) => {
                return (
                  <Link
                    to={item.link}
                    key={index}
                    className="text-[14px] hover:text-teal-700 duration-300 "
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex gap-4 justify-center items-center text-[14px]">
                {!auth ? (
                  <>
                    <button className="bg-teal-700 px-4 py-1 text-zinc-50 rounded-md font-medium">
                      <Link to="/login">Login</Link>{" "}
                    </button>
                    <button className="bg-teal-700 px-4 py-1 text-zinc-50 rounded-md font-medium">
                      <Link to="/register">Register</Link>{" "}
                    </button>
                  </>
                ) : (
                  <details className="dropdown">
                    <summary  className="px-4 py-1">{auth?.user.name}</summary>
                    <ul
                      
                      className="dropdown-content z-[1] menu p-2 bg-teal-200 rounded-box w-52 right-0"
                    >
                      <li>
                        <Link to={`/dashboard/${auth?.user?.role==="admin" ?"admin":"user"}`}>Dashboard</Link>
                      </li>
                      <li>
                     
                    
                  
                    <Link to="/login" onClick={Logout}
                    className="bg-red-600 px-4 py-1 text-zinc-50 rounded-md font-medium hover:bg-red-700">Logout</Link>
                 
                      </li>
                    </ul>
                  </details>
                )}
              </div>
            </ul>
          </div>
          <div className="flex gap-3 justify-between items-center py-2 px-4  bg-teal-200 md:hidden">
            <h2 className="text-[22px] font-medium ">ShopMe</h2>
            <div
              className={`${isopen ? "text-gray-800" : "right-[-100%]"} z-40`}
            >
              <button
                onClick={() => setIsOpen(!isopen)}
                className="text-[18px]"
              >
                {isopen ? "X" : <RiMenu3Fill />}{" "}
              </button>
            </div>
          </div>
          <div
            className={`${
              isopen ? "right-0" : "right-[-100%] w-0"
            } top-0 fixed h-full w-3/4 bg-teal-200 duration-300 pl-6 pt-4 mt-4 z-10 md:hidden `}
          >
            <h2 className="text-[22px] font-medium ">ShopMe</h2>
            <ul className=" flex flex-col  gap-4">
              {MENUBAR.map((item, index) => {
                return (
                  <Link
                    to={item.link}
                    key={index}
                    className="text-[14px] hover:text-teal-700 duration-300"
                    onClick={() => setIsOpen(!isopen)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
