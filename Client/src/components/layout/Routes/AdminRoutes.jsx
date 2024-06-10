import { useEffect, useState } from 'react'
import { useAuth } from '../../../context/Auth'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layout';
const AdminRoutes = () => {
  const { auth } = useAuth();
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
        const res = await axios.get('http://localhost:8080/api/v1/auth/auth-admin')
      if (res.data.success) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.TOKEN)   authCheck();
    
  }, [auth?.TOKEN]);
  return ok ? <Outlet /> : <Layout><h1>Redirecting You  Seconds</h1></Layout>;
};

export default AdminRoutes;
