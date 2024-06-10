import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import AdminLayout from "./AdminLayout";
import women from '../../assets/siteimages/women.jpg'
import axios from "axios";
const ViewUsers = () => {

  const [users, setUsers]= useState([]);
  const getUsers=async()=>{
    try {
      const res = axios.get('http://localhost:8080/api/v1/auth/get-users');
      if ((await res).status==200) {
        setUsers((await res).data.users)
        // console.log((await res).data)
      }else{
        console.log("error")
      }
    } catch (error) {
       console.log(error)
    }
  }

  useEffect(()=>{
    getUsers();
  },[])
  console.log(users)
  return (
    <Layout>
      <AdminLayout>
        <div className="w-[60rem]">
          <h1 className="text-center text-[24px] font-bold bg-teal-600 text-zinc-50">
            VIEW USERS
          </h1>

          <div className="bg-teal-200 rounded-sm px-2 py-1  h-[35.2rem] rounded-b-md overflow-y-auto">
            {
              users?.map((user, index)=>(
                <div key={index} className=" mt-1 border-b-[1px] border-t-[1px] border-gray-400 
            py-2  px-2 bg-slate-100 shadow-sm shadow-gray-400 flex justify-between items-center">
              <img src={women} alt="" className="w-[50px] h-[50px] rounded-full" />
              <div className="flex items-center gap-[84px]">

              <div className="flex">
                <h1 className="w-[120px]">{user.name}</h1>
                <h1 className="w-[120px]">{user.email}</h1>
              </div>
            
              <div className="flex">
                <h1 className="w-[150px]">{user.phone}</h1>
                <h1 className="w-[150px]">{user.address}</h1>
              </div>
              
              
              </div>

              <div className="space-x-4">
                <button className="bg-blue-500 text-slate-100 px-4 py-1 rounded-md font-medium">View</button>
                <button className="bg-red-500 text-slate-100 px-4 py-1 rounded-md font-medium">Delete</button>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </AdminLayout>
    </Layout>
  );
};

export default ViewUsers;
