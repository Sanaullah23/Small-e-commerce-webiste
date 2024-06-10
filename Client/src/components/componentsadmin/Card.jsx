import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Card = ({image, name, price, category, id}) => {
 const naviagte= useNavigate()
  const handleDelete=async(id)=>{
    console.log(id)
    try {
      const res = axios.delete(`http://localhost:8080/api/v1/product/delete-product/${id}`)
      if ((await res).status==200) {
        toast.success("product deleted successfully");
        
    
      }else{
        toast.error("Can not delete product");
      }
    } catch (error) {
      console.log("error in deleting product")
    }
  }
  return (
    <>
      <div  className='bg-slate-100  pb-2  rounded-b-md border-[1px] border-gray-300'>
        <img src={image} alt="" className='w-full h-[200px]'/>
        <p className='text-[16px] px-1 font-medium'>{name}</p>
        <p className='flex flex-col gap-2 text-[14px]  px-1'>
            <span>Price: ${price}</span>
            <span>Category: {category}</span> 
        </p>
        <div className='flex justify-between items-center mt-2  px-1'>
            <Link to={`/dashboard/admin/product-details/${id}`} className='bg-blue-500 text-slate-100 px-4 py-1 rounded-md'>View</Link>
            <button  onClick={()=>handleDelete(id)} className='bg-red-500 text-slate-100 px-4 py-1 rounded-md'>Delete</button>
        </div>
        
      </div>
    </>
  )
}

export default Card