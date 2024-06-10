import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios';
import AdminLayout from './AdminLayout';
import { Link } from 'react-router-dom';
import Card from '../../components/componentsadmin/Card';
import { useProduct } from '../../context/Product';


const ViewProducts = () => {
  const {pData} = useProduct()
  
  return (
    <Layout>
      <AdminLayout>
      <div className='w-[60rem]'>
      <h1 className='text-center text-[24px] font-bold bg-teal-600 text-zinc-50'>VIEW PRODUCTS</h1>
     
     <div className='bg-teal-200 overflow-y-auto grid grid-cols-2 space-x-2 space-y-2 md:grid-cols-5  rounded-sm px-2 py-1  h-[35.2rem] rounded-b-md'>

     {pData?.map((item, index)=>(
           <Card  image={`http://localhost:5173/src/assets/images/`+item.image}
            name={item.productName}
            price={item.price}
            category={item.category}
           key={index}
           id={item._id}
            />
         ))}

         
     </div>
      </div>

        
         
       
     
      </AdminLayout>
    </Layout>
  )
}

export default ViewProducts