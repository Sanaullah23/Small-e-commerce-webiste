import React from 'react'

const Pagination = ({handlePrev, handleNext, page, setPage,pageCount, setPageCount}) => {
  return (
    <>
    <div className='flex gap-2 justify-end pr-4'>
    <button className='bg-blue-500 text-slate-100 px-4 py-1 rounded-md'
      onClick={()=>handlePrev()}>Previous</button>
      {
        Array(pageCount).fill(null).map((element, index)=>{
            return(
                <>
                 <span className={` px-4 py-2 rounded text-center cursor-pointer border-[1px] border-gray-400 ${page ===index+1 ? " bg-blue-600 text-slate-100" : "bg-slate-100"}`}
                 onClick={()=>setPage(index+1)}
                 >{index+1}</span>
                </>
            )
        })
      }
      <button className='bg-blue-500 text-slate-100 px-4 py-1 rounded-md'
      onClick={()=>handleNext()}>Next</button>
    </div>
    </>
  )
}

export default Pagination