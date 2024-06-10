import React, { useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import{ Flip, toast} from 'react-toastify'
import { useAuth } from "../context/Auth";
import Layout from "../components/layout/Layout";
const Login = () => {
  const {auth, setAuth} = useAuth()
  const navigate= useNavigate()
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogUser(prev=>({
      ...prev, [e.target.name]:e.target.value
    }))
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
       const res = await axios.post('http://localhost:8080/api/v1/auth/login',{
        email:logUser.email,
        password:logUser.password
       })
       console.log(res)
       if (res) {
        setAuth(res.data)
       
           toast.success(res.data.message
            , {
              position: "top-center",
              autoClose:300,
              transition:Flip
            }
           )
          
           setTimeout(()=>{
                 navigate('/')
           }, 1000)

       }else{
        toast.error(res.data.message , {
          position: "top-center",
          autoClose:300,
          transition:Flip
        })
       }
    } catch (error) {
      toast.error(error.response.data.message
        , {
          position: "top-center",
          autoClose:300,
          transition:Flip
        }
      )
    }
  }
  return (
    <Layout>
      <div className="my-[50px] min-h-screen">
        <form className="flex  flex-col justify-center items-center gap-6 my-6 py-[80px] bg-slate-100 w-[450px] m-auto rounded-md shadow-md shadow-gray-300">
          <h1 className="text-2xl font-semibold">Login</h1>
          <div className="flex gap-4 items-center px-4 py-2 rounded-md border-[2px] border-gray-200 bg-zinc-50">
            <FaUser />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="px-4 py-1 focus:outline-none bg-zinc-50"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4 items-center px-4  py-2 rounded-md border-[2px] border-gray-200 bg-zinc-50">
            <FaLock />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="px-4 py-1 focus:outline-none bg-zinc-50"
              onChange={handleChange}
            />
          </div>
          <button className="bg-teal-600 text-zinc-50 px-6 py-2 font-medium rounded-md"
          onClick={handleSubmit}>
            Login
          </button>
          <span>
            Don't have an account?{" "}
            <Link to="/register" className="text-teal-500 italic">
              Register
            </Link>
          </span>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
