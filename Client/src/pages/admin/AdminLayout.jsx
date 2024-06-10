import React from 'react'
import AdminMenu from '../../components/componentsadmin/AdminMenu'

const AdminLayout = ({children}) => {
  return (
    <>
      <div className='flex gap-4 my-8 pl-6 '>
        <div>
            <AdminMenu/>
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default AdminLayout