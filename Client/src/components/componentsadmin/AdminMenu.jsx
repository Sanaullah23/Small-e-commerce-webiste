import React from "react";
import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <div className="w-[200px] h-[600px] bg-teal-200 px-4 py-2 rounded-md">
      <Link to="/dashboard/admin">
        <h1 className="text-2xl font-semibold text-center bg-teal-600 px-2 rounded-md py-2 text-zinc-50">
          Admin Menu
        </h1>
      </Link>
      <ul className="font-semibold flex flex-col justify-center gap-2 mt-2">
        <li className="hover:bg-teal-400 duration-300 px-2 py-1 rounded-md flex justify-between items-center gap-2">
          <Link to="/dashboard/admin/create-product">Create Product</Link>
          <FaBasketShopping />
        </li>
        <li className="hover:bg-teal-400 duration-300 px-2 py-1 rounded-md flex  justify-between items-center gap-2">
          <Link to="/dashboard/admin/view-products">View Products</Link>
          <FaShoppingCart />
        </li>
        <li className="hover:bg-teal-400 duration-300 px-2 py-1 rounded-md flex justify-between items-center gap-2">
          <Link to="/dashboard/admin/view-users">View Users</Link>
          <FaUsers />
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
