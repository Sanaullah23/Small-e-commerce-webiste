import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/Auth'
import { Outlet } from 'react-router-dom';
import Layout from '../Layout';
const DashboardPrivate = () => {
    const {auth} =useAuth()
    const [ok, setOk]= useState(false);
useEffect(()=>{
    const authCheck=async()=>{
        if (auth) {
            setOk(true);
        }else{
            setOk(false);
        }
    }
    if(auth?.TOKEN) {authCheck();}
}, [auth?.TOKEN])


 
  
   
   
    
  

   

  return ok? <Outlet/> : <Layout><h1>Redirecting You  Seconds</h1></Layout>;
}

export default DashboardPrivate