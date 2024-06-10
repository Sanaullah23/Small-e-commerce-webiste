import React from 'react';
import Layout from '../../components/layout/Layout';
import AdminLayout from './AdminLayout';

const AdminDashboard = () => {
  return (
    <Layout>
       <AdminLayout>
      <div className='w-[60rem]'>
      <h1 className='text-center text-[24px] font-bold bg-teal-600 text-zinc-50'>ADMIN PANEL</h1>
     
     <div className='bg-teal-200 rounded-sm px-2 py-1  h-[35.2rem] rounded-b-md'>
      <h1>Content</h1>
     </div>
      </div>
    
       </AdminLayout>
    </Layout>
  );
};

export default AdminDashboard;
