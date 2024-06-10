import React, { useState } from "react";
import { FaHome, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { BiLogoGmail, BiPhoneOutgoing } from "react-icons/bi";
import axios from 'axios'

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/layout/Layout";

const Register = () => {
  const Navigate = useNavigate()
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handlechange = (e) => {
    setUserRegister(prev=>({
      ...prev, [e.target.name]:e.target.value
    }));
  };
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res= await axios.post('http://localhost:8080/api/v1/auth/register', {
        name:userRegister.name,
        email:userRegister.email,
        password:userRegister.password,
        phone:userRegister.phone,
        address:userRegister.address
      })
      if (res) {
        toast.success(res.data.message)
        Navigate('/login')
  
      }
    } catch (error) {
       toast.error(error.response.data.message)
    }
  }

  return (
    <Layout>
      <div className="my-[50px]">
        <form className="flex  flex-col justify-center items-center gap-4 my-6 py-[80px] bg-slate-100 w-[450px] m-auto rounded-md shadow-md shadow-gray-300">
          <h1 className="text-2xl font-semibold">Register</h1>

          <div className="flex gap-4 items-center px-4 py-2 rounded-md border-[2px] border-gray-200 bg-zinc-50">
            <FaUser />
            <input
              type="text"
              placeholder="Enter your name"
              value={userRegister.name}
              name="name"
              className="px-4 py-1 focus:outline-none bg-zinc-50"
              onChange={handlechange}
            />
          </div>
          <div className="flex gap-4 items-center px-4 py-2 rounded-md border-[2px] border-gray-200 bg-zinc-50">
            <BiLogoGmail />
            <input
              type="email"
              placeholder="Enter your email"
              value={userRegister.email}
              name="email"
              className="px-4 py-1 focus:outline-none bg-zinc-50"
              onChange={handlechange}
            />
          </div>
          <div className="flex gap-4 items-center px-4  py-2 rounded-md border-[2px] border-gray-200 bg-zinc-50">
            <FaLock />
            <input
              type="password"
              placeholder="Enter your password"
              value={userRegister.password}
              name="password"
              className="px-4 py-1 focus:outline-none bg-zinc-50"
              onChange={handlechange}
            />
          </div>
          <div className="flex gap-4 items-center px-4  py-2 rounded-md border-[2px] border-gray-200 bg-zinc-50">
            <FaPhone />
            <input
              type="text"
              placeholder="Enter your number"
              value={userRegister.phone}
              name="phone"
              className="px-4 py-1 focus:outline-none bg-zinc-50"
              onChange={handlechange}
            />
          </div>
          <div className="flex gap-4 items-center px-4  py-2 rounded-md border-[2px] border-gray-200 bg-zinc-50">
            <FaHome />
            <input
              type="text"
              placeholder="Enter your address"
              value={userRegister.address}
              name="address"
              className="px-4 py-1 focus:outline-none bg-zinc-50"
              onChange={handlechange}
            />
          </div>
          <button className="bg-teal-600 text-zinc-50 px-6 py-2 font-medium rounded-md"
          onClick={handleSubmit}>
            Regiser
          </button>
          <span>
            Have an account?{" "}
            <Link to="/login" className="text-teal-500 italic">
              Login
            </Link>
          </span>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
